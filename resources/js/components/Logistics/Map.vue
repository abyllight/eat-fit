<template>
    <div>
        <v-row>
            <v-col
                sm="12"
                lg="8"
                style="margin-bottom: -40px">
                <v-select
                    v-model="intervals"
                    :items="items"
                    dense
                    item-text="time"
                    item-value="val"
                    label="Интервал"
                    multiple
                    outlined
                    @change="filter"
                >
                    <template v-slot:prepend-item>
                        <v-list-item
                            ripple
                            @click="toggle"
                        >
                            <v-list-item-action>
                                <v-icon :color="intervals.length > 0 ? 'indigo darken-4' : ''">
                                    {{ icon }}
                                </v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title>
                                    Выбрать все
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider class="mt-2"></v-divider>
                    </template>
                </v-select>
            </v-col>
            <v-col sm="12" lg="3">
                <v-select
                    v-model="user_id"
                    :items="couriers"
                    dense
                    item-text="name"
                    item-value="id"
                    label="Курьеры"
                    outlined
                    @change="filter"
                >
                </v-select>
            </v-col>
            <v-col sm="12" lg="1">
                <h3>{{total}}</h3>
            </v-col>
        </v-row>
        <v-row>
            <v-col sm="12" lg="8">
                <div id="map" style="width: 100%;height:700px">
                </div>
            </v-col>
            <v-col sm="12" lg="4">
                <v-row>
                    <v-col cols="3">
                        Имя
                    </v-col>
                    <v-col>
                        {{ order ? order.name : '' }}
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="3">
                        Адрес
                    </v-col>
                    <v-col>
                        <p>{{ order ? order.yaddress : '' }}</p>
                        <span class="red--text">{{ order ? order.yaddress_old : '' }}</span>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="3">
                        Интервал
                    </v-col>
                    <v-col>
                        <p>{{ order ? order.time : '' }}</p>
                        <span class="red--text">{{ order ? order.time_old : '' }}</span>
                    </v-col>
                </v-row>
                <v-row class="mt-5">
                    <v-col>
                        <v-autocomplete
                            v-model='courier_id'
                            :items="couriers"
                            item-text="name"
                            item-value="id"
                            label="Курьеры"
                            dense
                            outlined
                        ></v-autocomplete>
                    </v-col>

                    <v-col>
                        <v-btn
                            :disabled="Object.keys(order).length === 0"
                            color="primary"
                            @click="setCourier"
                        >
                            Назначить
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import {loadYmap, yandexMap, ymapMarker} from 'vue-yandex-maps'
export default {
    name: "Map",
    components: { loadYmap, yandexMap, ymapMarker },
    data: () => ({
        loading: false,
        settings: {
            apiKey: '3ccab634-2c6f-4506-9294-dc6811844c51',
            lang: 'ru_RU',
            version: '2.1'
        },
        colors: [
            'islands#blackStretchyIcon',
            'islands#redStretchyIcon',
            'islands#darkOrangeStretchyIcon',
            'islands#yellowStretchyIcon',
            'islands#darkGreenStretchyIcon',
            'islands#lightBlueStretchyIcon',
            'islands#darkBlueStretchyIcon',
            'islands#violetStretchyIcon',
            'islands#blackStretchyIcon',
        ],
        intervals: [],
        clusterer: {},
        map: {},
        orders: [],
        order: {},
        couriers: [],
        user_id: [],
        courier_id: 0,
        items: [
            {
                'time': '0. не задан',
                'val': 0
            },
            {
                'time': '1. 06.30-07.00',
                'val': 1
            },
            {
                'time': '2. 07.00-07.30',
                'val': 2
            },
            {
                'time': '3. 07.30-08.00',
                'val': 3
            },
            {
                'time': '4. 08.00-08.30',
                'val': 4
            },
            {
                'time': '5. 08.30-09.00',
                'val': 5
            },
            {
                'time': '6. 09.00-09.30',
                'val': 6
            },
            {
                'time': '7. 09.30-10.00',
                'val': 7
            }
        ],
        total: 0,
    }),
    async mounted() {
        await this.fetchCouriers()
        await loadYmap(this.settings);

        let cities = [
            {
                name: 'Astana',
                coords: [51.1801, 71.44598]
            },
            {
                name: 'Almaty',
                coords: [43.237163, 76.945627]
            }
        ]

        let city_id = this.$store.state.auth.user.city_id

        this.map = new ymaps.Map('map', {
            center: cities[city_id - 1].coords,
            zoom: 11
        })

        let myCircle = new ymaps.Circle([
            // Координаты центра круга.
            [51.059496, 71.426799],
            // Радиус круга в метрах.
            650
        ], {
            // Описываем свойства круга.
            // Содержимое балуна.
            balloonContent: "Family village",
            // Содержимое хинта.
            hintContent: "Family village"
        }, {
            // Задаем опции круга.
            // Включаем возможность перетаскивания круга.
            draggable: false,
            // Цвет заливки.
            // Последний байт (77) определяет прозрачность.
            // Прозрачность заливки также можно задать используя опцию "fillOpacity".
            fillColor: "#00FF00",
            // Цвет обводки.
            strokeColor: "#0000FF",
            // Общая прозрачность (как для заливки, так и для обводки).
            opacity: 0.5,
            // Ширина обводки.
            strokeWidth: 5,
            // Стиль обводки.
            strokeStyle: 'shortdash'
        });

        let myGeoObject = new ymaps.GeoObject({
            // Описываем геометрию геообъекта.
            geometry: {
                // Тип геометрии - "Многоугольник".
                type: "Polygon",
                // Указываем координаты вершин многоугольника.
                coordinates: [
                    // Координаты вершин внешнего контура.
                    [
                        [51.183672, 71.394630],
                        [51.177513, 71.389668],
                        [51.170547, 71.368844],
                        [51.126510, 71.359811],
                        [51.084045, 71.389438],
                        [51.074404, 71.421354],
                        [51.097147, 71.468311],
                        [51.107770, 71.497896],
                        [51.130314, 71.501945],
                        [51.145034, 71.528984],
                        [51.186674, 71.421104]
                    ]
                ],
                // Задаем правило заливки внутренних контуров по алгоритму "nonZero".
                fillRule: "nonZero"
            },
            // Описываем свойства геообъекта.
            properties:{
                // Содержимое балуна.
                balloonContent: "Многоугольник"
            }
        }, {
            // Описываем опции геообъекта.
            // Цвет заливки.
            fillColor: '#00FF00',
            // Цвет обводки.
            strokeColor: '#0000FF',
            // Общая прозрачность (как для заливки, так и для обводки).
            opacity: 0.3,
            // Ширина обводки.
            strokeWidth: 5,
            // Стиль обводки.
            strokeStyle: 'shortdash'
        });

        // Добавляем многоугольник на карту.
        this.map.geoObjects.add(myGeoObject);
        this.map.geoObjects.add(myCircle);

        this.clusterer = new ymaps.Clusterer({
            clusterDisableClickZoom: true,
            groupByCoordinates: true,
            clusterIconLayout: 'default#pieChart',
            zIndex: 10
        })

        let self = this
        this.map.events.add('boundschange', function (){
            let clusters = self.clusterer.getClusters()
            let c_len = clusters.length
            let count = 0

            if (c_len > 0) {
                for (let i = c_len; i > 0; i--) {
                    let objects = clusters[i - 1].properties.get('geoObjects')
                    let o_len = objects.length

                    for (let j = o_len; j > 0; j--){
                        let footer = objects[j - 1].properties.get('balloonContentFooter').split(' ')
                        let id = parseInt(footer[1])
                        if (id > 0){
                            count++
                        }
                    }

                    clusters[i - 1].properties.set('iconContent', count + '/' + o_len)
                    count = 0
                }
            }
        })

        this.clusterer.events.add('click', function (e){
            let target = e.get('target');

            if (target._clusterBounds === undefined){
                self.setOrder(target)
            }else {
                if (target.getGeoObjects()) {
                    target.state.set('activeObject', target.getGeoObjects()[0])
                    target.state.events.add('change', function() {
                        let activeObject = target.state.get('activeObject')
                        self.setOrder(activeObject)
                    })
                }
            }
        })
    },
    computed: {
        all () {
            return this.intervals.length === this.items.length
        },
        some () {
            return this.intervals.length > 0 && !this.all
        },
        icon () {
            if (this.all) return 'mdi-close-box'
            if (this.some) return 'mdi-minus-box'
            return 'mdi-checkbox-blank-outline'
        },
    },
    methods: {
        toggle () {
            this.$nextTick(() => {
                if (this.all) {
                    this.intervals = []
                } else {
                    this.intervals = this.items.map(function (item){
                        return item.val
                    })
                }
                this.filter()
            })
        },
        async filter() {
            this.orders = []
            await axios
                .post('/api/map/filter', {
                    intervals: this.intervals,
                    user_id: this.user_id
                })
                .then(response => {
                    this.total = response.data.length
                    this.displayPlaceMarks(response.data)
                    this.orders = response.data
                })
                .catch(error => {
                    this.$store.dispatch('showAlert', {
                        'isVisible': true,
                        'msg': error.message,
                        'color': 'error',
                        'type': 'error'
                    })
                })
        },
        setOrder(target){
            let footer = target.properties.get('balloonContentFooter').split(' ')
            let id = parseInt(footer[0])
            this.order = this.orders.find(item => item.id === id)
            this.courier_id = this.order.courier_id
        },
        async fetchCouriers() {
            this.couriers = []
            await axios
                .get('/api/couriers')
                .then(response => {
                    this.couriers = response.data.data
                    this.couriers.unshift({
                        id: 0,
                        name: 'Не выбрано'
                    })
                })
                .catch(error => {
                    console.log(error)
                })
        },
        setCourier() {
            axios
                .post('/api/map/courier', {
                    order_id: this.order.id,
                    courier_id: this.courier_id
                })
                .then(response => {
                    this.order.courier = response.data
                    this.filter()
                })
                .catch(error => {
                    console.log(error)
                })
        },
        createPlaceMark(value){
            return new ymaps.Placemark([value.lat, value.lng], {
                balloonContentHeader: value.name,
                balloonContentBody: value.time + '<br/>' +
                    value.phone + '<br/>' +
                    value.tag + '<br/>' +
                    value.yaddress,
                balloonContentFooter: value.id + ' ' + value.courier_id,
                iconContent: value.courier_name,
                hintContent: value.name + '<br/' + value.tag + '<br/>' + value.time
            }, {
                preset: this.colors[value.interval],
                zIndex: value.courier_id ? 1 : 1000
            });
        },
        displayPlaceMarks(data){
            this.clusterer.removeAll();
            let i = data.length
            while (i--){
                let p = this.createPlaceMark(data[i])
                this.clusterer.add(p);
            }

            this.map.geoObjects.add(this.clusterer);
        }
    }
}
</script>

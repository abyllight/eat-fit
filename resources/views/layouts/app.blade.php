<!DOCTYPE html>
<html lang="ru">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="csrf-token" content="{{ csrf_token() }}"><!-- CSRF Token -->
      <title>EAT&FIT</title>
      <script src="{{ mix('js/app.js') }}" defer></script><!-- Scripts -->
      <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
      <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    </head>
    <body class="antialiased">
      <div id="app">
        <app></app>
      </div>
    </body>
</html>

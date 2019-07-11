<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="_token" content="{{ csrf_token() }}" />

  <title>Laravel Scaffold</title>

  <!-- Scripts -->
  <script src="{{ config('app.url') }}/js/app.js" defer></script>

  <!-- Styles -->
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">

</head>

<body>
  <div id="app"></div>
</body>

</html>
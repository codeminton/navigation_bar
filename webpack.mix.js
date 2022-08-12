let mix = require('laravel-mix');

mix.js('src/app.js', 'dist')
    .sass('src/navigation.scss', 'dist');

mix.disableNotifications();
const mix = require('laravel-mix');
require('laravel-mix-jigsaw');

mix.disableSuccessNotifications();
mix.setPublicPath('source/assets/build');


mix.js('source/_assets/js/main.js', 'js')
    .sass('source/_assets/css/app.scss', 'css')
    .jigsaw({
        watch: ['config.php', 'source/**/*.md', 'source/**/*.php', 'source/**/*.scss'],
    })
    .sourceMaps()
    .version();

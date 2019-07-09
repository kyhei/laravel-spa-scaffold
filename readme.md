# Laravel scaffold template for Single Page Application

## Abstract

- PHPUnit test environment is configured
- User model, Controller, Routes for Api endpoint are configured
- Vue Router, Vuex are installed in Vue.js
- axios HTTP Client for Laravel CSRF token is configured
- Enjoy Jest and Storybook for your DX

- Easy to setup

For setup

```
$ git clone https://github.com/kyhei/laravel-spa-scaffold.git
$ cd laravel-spa-scaffold
$ composer install
$ cp .env.example .env
$ php artisan key:generate
$ yarn install
```

Run Jest
```
$ yarn test 
```

Run Storybook
```
$ yarn storybook
```
Then, visit [localhost:9001](http://localhost:9001)
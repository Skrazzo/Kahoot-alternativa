# Info
./backend -> Laravel
./frontend -> React

## node env

Izmantoju Deno, bet ganjau vares palaist ari ar npm

```sh
deno run dev
```

vai 

```sh
npm run dev
```

# Install

## Backedn

`cd ./backend` 

```sh
composer install
php artisan key:generate
php artisan migrate
php artisan db:seed
```

```sh
php artisan serve
```

## Frontend

`cd ./frontend`

```sh
deno install
deno run dev
```

vai 

```sh
npm install
npm run dev
```
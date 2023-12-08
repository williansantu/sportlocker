## API (Laravel)
In development I used XAMPP to run the server.

By default, I'm using localhost as the api url

- If you want to change it, you'll have to change it in the react too, in the <b>env</b> file. Path: (react\src\services\env.ts)

1 -  Install the dependencies

        composer install

2 - Run the server with the command:

        php artisan serve

## Database
    
1 - Run the migrations 
    
        php artisan migrate

2 - Run the seeders

        php artisan db:seed


## Front (React)

1 - Install the dependencies

        npm install

2 - Run 

        npm run dev
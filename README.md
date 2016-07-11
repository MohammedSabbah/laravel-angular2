# laravel-angular2

Sample application using Laravel 5.1, Angular2 and Bootstrap.

To run the project you just have to do:

    # Install Laravel dependencies
    cd laravel-angular2
    composer install
    
    # Install Angular2 dependencies
    cd public
    npm install
    
    # Run Typings and compile TS files (you can also use the npm scripts defined in package.json)
    npm run typings install
    ./node_modules/typescript/bin/tsc
    
    # Get a fresh .env file and generate the application key
    php artisan key:generate
    
    # Serve the application
    php -S localhost:8000

And the app will run in your localhost, port 8000. If you have any permission issues try changing the storage/ folder permisisons

    php artisan cache:clear
    sudo chmod 777 -R storage
    composer dump-autoload

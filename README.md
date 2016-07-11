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
    
    # Serve the application
    composer -S localhost:8000

And the app will run in your localhost, port 8000

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

# About webpack

Angular2 includes loads of different modules that are scattered in different files. This makes the app run pretty slow even if we are in production mode. If we want to speed things up we have to use **webpack** to bundle all dependencies into one single file.

We need a **webpack.config.js** in our /public folder and we need to change our **package.json** and **index file** to include the bundle.
You can find examples in the following folders:

    /public/package.json                        # package.json with webpack dependencies (production)
    /public/package.json.old                    # package.json without webpack (for developement)

    /resources/views/welcome.blade.php          # index with webpack (production)
    /resources/views/welcome.blade.php.old      # index without webpack (developement)

**NOTE:** remember to run 'npm install' to install dependencies or to install webpack and webpack-dev-server globally

    npm install webpack -g
    npm instlal webpack-dev-server -g

# Gulp
We have also created a Gulp taks in **gulpfile.js** to minify our bundle and make it even smaller to speed up our application. In the root folder just run

    gulp compress

It will replace the old bundle.js with a minified version (you can change the destination directory if you want to keep the old file)
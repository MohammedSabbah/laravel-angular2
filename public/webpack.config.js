module.exports = {
    entry: "./app/main.ts", // file that bootstraps the app
    output: {
        path: __dirname,
        filename: "./dist/bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    module: {
        loaders: [{
            test: /\.ts/,
            loaders: ['ts-loader'], // needed to tell webpack how to load TS files (check package.json)
            exclude: /node_modules/
        }]
    }
};
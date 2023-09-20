const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/index.js', // Путь к точке входа вашего приложения
    output: {
        filename: 'bundle.js', // Имя файла сборки
        path: __dirname + '/dist', // Путь к выходной папке
    },
    plugins: [
        new TerserPlugin({
            terserOptions: {
                ecma: 6,
                compress: {
                    drop_console: true, // Удалить console.log
                },
            },
        }),
    ],
};

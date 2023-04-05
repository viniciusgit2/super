export const entry = './index.js';
export const output = {
    path: './',
    filename: 'bundle.js'
};
export const module = {
    loaders: [
        {
            test: /\.jsx?/,
            loaders: [
                'babel'
            ],
            include: './index.js',
            query: {
                presets: [
                    'es2015'
                ]
            }
        },
        {
            test: /\.css$/,
            loaders: [
                'style',
                'css',
                'postcss'
            ]
        },
        {
            test: /\.scss$/,
            loaders: [
                'style',
                'css',
                'sass'
            ]
        },
        {
            test: /\.less$/,
            loaders: [
                'style',
                'css',
                'less'
            ]
        },
        {
            test: /\.(png|jpg)$/,
            loaders: [
                'url'
            ],
            query: {
                limit: 8192
            }
        }
    ]
};
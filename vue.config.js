module.exports = {
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
    chainWebpack: (config) => {
        if (process.env.NODE_ENV === 'development') {
            config.plugins.delete('preload')
        }
    },
}

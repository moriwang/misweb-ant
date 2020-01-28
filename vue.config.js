module.exports = {
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    'primary-color': '#1DA57A',
                    'font-size-base': '16px',
                    'font-size-sm': '14px'
                },
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

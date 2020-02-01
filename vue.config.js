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
    devServer: {
        port: 8080,
        host: "0.0.0.0",
        https: false,
        open: false, //在 server 启动后打开浏览器。默认禁用。
        proxy: {
            "/api": {
                target: "http://0.0.0.0:5000", //设置调用的接口域名和端口
                changeOrigin: true, //是否跨域
                ws:true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}

module.exports = {
    devServer: {
        proxy: {
            // 配置跨域
            '/api': {
                target: 'http://localhost:5000/api/', // 跨域地址
                changeOrigin: true, // 更改原点
                pathRewrite: { // 重命名跨域地址
                    '^/api': ''
                }
            }
        }
    }
}

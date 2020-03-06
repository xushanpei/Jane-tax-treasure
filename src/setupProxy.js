// const proxy = require('http-proxy-middleware')

// module.exports = function(app) {
//   app.use(
//     proxy('/api', {
//       target: 'http://47.116.4.10',
//       changeOrigin: true,
//       pathRewrite: {
//         '^/api': ''
//       }
//     })
//   )
// }

// const proxy = require('http-proxy-middleware')
const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports =  (app)=> {
    // proxy第一个参数为要代理的路由
    // 第二参数中target为代理后的请求网址，changeOrigin是否改变请求头，其他参数请看官网
    app.use(createProxyMiddleware('/api', {
        target: 'http://47.116.4.10:8870',
        changeOrigin: true,
        pathRewrite: {
                    '^/api': ''
                  }
    }))
}

module.exports = {
  '/api': {
    target: 'https://www.betterleo.com:3000', // 代理地址，这里设置的地址会代替axios中设置的baseURL
    // target: 'http://localhost:3000', // 代理地址，这里设置的地址会代替axios中设置的baseURL
    changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
    secure: false // 服务器接受的是https的接口
  }
}

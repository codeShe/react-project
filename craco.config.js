
const path = require("path")
const addPath = dir => path.join(__dirname,dir);
const cracoLess = require("craco-less");//单独配置babel无效，需要和craco-less 一起样式才有效果
module.exports = {
  webpack:{
    alias:{
        "@":addPath("src")
    }
  },
    babel:{
        plugins:[
            //第一个 style 为 true ,需要配置 craco-less一起才能生效
           ["import",{ libraryName: 'antd', style: true }]
            //第二种 style 为css ,不需要 craco-less
            // ['import', { libraryName: 'antd', libraryDirectory: 'es', style: "css" }],

        ]
    },
    plugins:[
        {
            plugin: cracoLess,
            options: {
              lessLoaderOptions: {
                lessOptions: {
                  modifyVars: { '@primary-color': 'red' },
                  javascriptEnabled: true,
                   //配置全局less 变量，不需要在使用的地方导入了
                   globalVars: {
                    hack: `true; @import '~@/assets/style/variable.less';`
                  }
                },
              },
            },
          }

    ]
}
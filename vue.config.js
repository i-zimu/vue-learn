const path = require('path')
const webpack = require('webpack')
module.exports = {
    runtimeCompiler: true,
    devServer: {
        port: 9981, // 端口号
        https: false,
        open: true,
        overlay: {
            warnings: false,
            errors: true,
        },
    },
    css: {
        loaderOptions: {
            //向CSS相关的loader传递选项
            less: {
                javascriptEnabled: true,
            },
        },
    },

    chainWebpack: (config) => {
        config.resolve.alias
            .set("@", path.join(__dirname, "src"))
            .set("css", path.join(__dirname, "src/assets/css"))
            .set("font", path.join(__dirname, "src/assets/font"))
            .set("img", path.join(__dirname, "src/assets/img"));

        //less全局变量
        // const types = ["vue-modules", "vue", "normal-modules", "normal"];
        // types.forEach((type) =>
        //     addStyleResource(config.module.rule("less").oneOf(type))
        // );
    },

    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
            }),
            // new CompressionPlugin({
            //     test: /\.js$|\.html$|.\css/, //匹配文件名
            //     threshold: 10240,//对超过10k的数据压缩
            //     deleteOriginalAssets: false //不删除源文件
            // })
        ],
    },
    // transpileDependencies: [
    //     'vue-echarts',
    //     'resize-detector'
    //   ]
};

function addStyleResource(rule) {
    rule
}

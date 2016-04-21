/**
 * 启动性能测试工具类
 * @author zhangziqiu<zhangziqiu@qq.com>
 */
sojs.define({
    name: 'benchmark',
    namespace: 'sojs.test',
    deps: {
        fileClass: 'sojs.test.file',
        benchmarkClass: require('benchmark')
    },

    test: function () {
        // 只处理test/benchmark文件夹下, 以'.benchmark.js'结尾的文件
        this.fileClass.getFileListSync('test/benchmark')
            .filter(function (file) {
                return file.substr(-13) === '.benchmark.js';
            }).forEach(function (file) {
                require(file);
            });
    }
});



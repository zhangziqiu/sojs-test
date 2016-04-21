/**
 * 启动单元测试的工具类
 * @author zhangziqiu<zhangziqiu@qq.com>
 */
sojs.define({
    name: 'unit',
    namespace: 'sojs.test',
    deps: {
        fileClass: 'sojs.test.file',
        mochaClass: require('mocha')
    },

    test: function () {
        var mocha = new this.mochaClass();

        // 只处理test/unit文件夹下, 以'.unit.js'结尾的文件
        this.fileClass.getFileListSync('test/unit')
            .filter(function (file) {
                return file.substr(-8) === '.unit.js';
            }).forEach(function (file) {
                mocha.addFile(file);
            });

        // 启动mocha测试
        mocha.run(function (failtures) {
            process.on('exit', function () {
                process.exit(failtures);
            });
        });
    }
});

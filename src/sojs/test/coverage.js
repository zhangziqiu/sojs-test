/**
 * 启动代码覆盖率检查工具类
 * @author zhangziqiu<zhangziqiu@qq.com>
 */
sojs.define({
    name: 'coverage',
    namespace: 'sojs.test',
    deps: {
        fileClass: 'sojs.test.file'
    },

    test: function () {
        // 直接从项目文件夹获取
        var cli = require('../../../node_modules/istanbul/lib/cli.js');
        // 启动单测, 测试单测的代码覆盖率, 结果放到 test/coverage 目录下
        cli.runToCompletion(['cover', 'tool/unit.js', '--dir=test/coverage']);
    }
});

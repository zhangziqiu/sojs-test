/**
 * 性能测试
 * @author zhangziqiu<zhangziqiu@qq.com>
 */
sojs.define({
    name: 'urlBenchmark',
    $urlBenchmark: function () {
        var benchmarkClass = sojs.using('sojs.test.benchmark').benchmarkClass;
        var suite = new benchmarkClass.Suite();

        suite.add('demo-test-1', {
            fn: function () {
                var testString= 'http://www.develop.cc';
                testString.replace('http', 'https');
            }
        }).add('demo-test-2', {
            fn: function () {
                var testString= 'http://www.develop.cc';
                testString.replace('http', 'https');
            }
        }).on('cycle', function (event) {
            console.log(String(event.target));
        }).run({
            'async': true,
            'initCount': 2
        });

    }
});



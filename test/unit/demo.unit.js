/**
 * 单元测试类
 * @author zhangziqiu<zhangziqiu@qq.com>
 */

var assert = require('assert');

describe('===== unit-test-demo =====', function () {

    it('demo1', function () {
        var expect = {
            origin: 'http://www.a.com',
            protocol: 'http',
            host: 'www.a.com',
            domain: 'a.com',
            port: 80,
            path: [],
            query: {}
        };
        var actual = {
            origin: 'http://www.a.com',
            protocol: 'http',
            host: 'www.a.com',
            domain: 'a.com',
            port: 80,
            path: [],
            query: {}
        };
        assert.deepEqual(actual, expect);
    });
});

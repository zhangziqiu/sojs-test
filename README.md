# Sojs test framework
===================================
sojs 测试框架. 提供以下功能:
> 单元测试
> 性能测试
> 代码覆盖率测试.

## 单元测试:
单元测试使用 mocha 模块支持.

### 建立单元测试用例
1. 在项目根目录下, 建立文件夹 test/unit
2. 在 test/unit 文件夹中, 建立以".unit.js"结尾的单元测试用例文件,比如: demo.unit.js
3. 编写测试用例:

```js
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
```

### 创建辅助工具
1. 在项目的任意位置建立js文件, 比如 [项目根目录]/tool/unit.js
2. 编写如下代码:

```js
/**
 * 单元测试
 * @author zhangziqiu<zhangziqiu@qq.com>
 */

require('sojs');
require('sojs-test');

sojs.define({
    name: 'unit',
    deps: {
        unitClass: 'sojs.test.unit'
    },

    /**
     * 静态构造函数
     */
    $unit: function () {
        this.unitClass.test();
    }
});
```

### 安装与运行
1. 安装 sojs:
```js
npm install sojs
```
2. 安装 sojs-test:
```js
npm install sojs-test
```
3. 运行在上一步中建立的辅助工具:
```js
node .\tool\unit.js
```
## 代码覆盖率测试:
代码覆盖率测试使用 istanbul 模块支持.
代码覆盖率不需要编写任何代码, 会生成基于"单元测试"的测试用例的代码覆盖率.

### 创建辅助工具
1. 在项目的任意位置建立js文件, 比如 [项目根目录]/tool/coverage.js
2. 编写如下代码:

```js
/**
 * 代码覆盖率检查
 * @author zhangziqiu<zhangziqiu@qq.com>
 */

require('sojs');
require('sojs-test');

sojs.define({
    name: 'coverage',
    deps: {
        coverageClass: 'sojs.test.coverage'
    },

    /**
     * 静态构造函数
     */
    $coverage: function () {
        this.coverageClass.test();
    }
});
```
### 安装与运行
1. 安装 sojs:
```js
npm install sojs
```
2. 安装 sojs-test:
```js
npm install sojs-test
```
3. 运行在上一步中建立的辅助工具:
```js
node .\tool\coverage.js
```

## 性能测试:
单元测试使用 benchmark 模块支持.

### 建立性能测试用例
1. 在项目根目录下, 建立文件夹 test/benchmark
2. 在 test/benchmark 文件夹中, 建立以".benchmark.js"结尾的单元测试用例文件,比如: demo.benchmark.js
3. 编写测试用例:

```js
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
```

### 创建辅助工具
1. 在项目的任意位置建立js文件, 比如 [项目根目录]/tool/benchmark.js
2. 编写如下代码:

```js
/**
 * 启动性能测试工具类
 * @author zhangziqiu<zhangziqiu@qq.com>
 */

require('sojs');
require('sojs-test');

sojs.define({
    name: 'benchmark',
    deps: {
        benchmarkClass: 'sojs.test.benchmark'
    },

    /**
     * 静态构造函数
     */
    $benchmark: function () {
        this.benchmarkClass.test();
    }
});
```

### 安装与运行
1. 安装 sojs:
```js
npm install sojs
```
2. 安装 sojs-test:
```js
npm install sojs-test
```
3. 运行在上一步中建立的辅助工具:
```js
node .\tool\benchmark.js


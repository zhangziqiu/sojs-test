require('sojs');

sojs.define({
    name: 'sojs-test-module',
    '$sojs-test-module': function () {
        sojs.setPath({'sojs.test': __dirname});
    }
});
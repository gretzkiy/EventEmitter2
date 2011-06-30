var testCase = require('nodeunit').testCase;

module.exports = testCase({

  'Add 50000 listener, emit 15k times' : function (test) {

    var EventEmitter2 = require('../../lib/ee2').EventEmitter2;
    var emitter = new EventEmitter2;

    var iterations = 10000;
    var len = 10;

    console.time('EE2_1');
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len; j++){
        for (var k = 0; k < len; k++){
          for (var l = 0; l < len; l++){
            emitter.on([i,j,k,l].join('.'), function () { test.ok(true,'emit') });
            emitter.on([i,j,k,l].join('.'), function () { test.ok(true,'emit') });
            emitter.on([i,j,k,l].join('.'), function () { test.ok(true,'emit') });
            emitter.on([i,j,k,l].join('.'), function () { test.ok(true,'emit') });
            emitter.on([i,j,k,l].join('.'), function () { test.ok(true,'emit') });
          }
        }
      }
    }

    while (iterations--) {
      emitter.emit('1.8.6.3');
      emitter.emit('5.2.9.1');
      emitter.emit('9.5.3.8');
    }

    console.timeEnd('EE2_1');
    test.expect(150000);
    test.done();
  }

});
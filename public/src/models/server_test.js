import QUnit from 'steal-qunit';
import Server from './server';

QUnit.module('models/server');

QUnit.test('getList', function(){
  stop();
  Server.getList().then(function(items) {
    QUnit.equal(items.length, 2);
    QUnit.equal(items.attr('0.description'), 'First item');
    start();
  });
});

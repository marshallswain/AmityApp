import QUnit from 'steal-qunit';
import { ViewModel } from './server';

// ViewModel unit tests
QUnit.module('amity-ui/pages/server');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the page-server component');
});

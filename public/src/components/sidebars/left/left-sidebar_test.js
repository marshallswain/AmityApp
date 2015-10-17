import QUnit from 'steal-qunit';
import { ViewModel } from './left-sidebar';

// ViewModel unit tests
QUnit.module('amity-ui/components/left-sidebar');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the left-sidebar component');
});

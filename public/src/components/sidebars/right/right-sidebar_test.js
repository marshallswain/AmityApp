import QUnit from 'steal-qunit';
import { ViewModel } from './right-sidebar';

// ViewModel unit tests
QUnit.module('amity-ui/components/right-sidebar');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the right-sidebar component');
});

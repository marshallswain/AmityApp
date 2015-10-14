import QUnit from 'steal-qunit';
import { ViewModel } from './collection';

// ViewModel unit tests
QUnit.module('amity-ui/pages/collection');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the page-collection component');
});

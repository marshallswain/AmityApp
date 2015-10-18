import QUnit from 'steal-qunit';
import { ViewModel } from './data';

// ViewModel unit tests
QUnit.module('amity-ui/components/sidebars/data');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the data-sidebar component');
});

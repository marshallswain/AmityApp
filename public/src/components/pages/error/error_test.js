import QUnit from 'steal-qunit';
import { ViewModel } from './error';

// ViewModel unit tests
QUnit.module('amity-ui/components/pages/error');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the page-error component');
});

import QUnit from 'steal-qunit';
import { ViewModel } from './logout';

// ViewModel unit tests
QUnit.module('amity-ui/components/pages/logout');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the page-logout component');
});

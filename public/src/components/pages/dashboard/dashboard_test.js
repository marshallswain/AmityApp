import QUnit from 'steal-qunit';
import { ViewModel } from './dashboard';

// ViewModel unit tests
QUnit.module('amity-ui/pages/dashboard');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the page-dashboard component');
});

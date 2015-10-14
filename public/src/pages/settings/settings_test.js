import QUnit from 'steal-qunit';
import { ViewModel } from './settings';

// ViewModel unit tests
QUnit.module('amity-ui/pages/settings');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the page-settings component');
});

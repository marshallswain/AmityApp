import QUnit from 'steal-qunit';
import { ViewModel } from './security';

// ViewModel unit tests
QUnit.module('amity-ui/components/pages/security');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the page-security component');
});

import QUnit from 'steal-qunit';
import { ViewModel } from './account';

// ViewModel unit tests
QUnit.module('amity-ui/componentns/pages/account');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the page-account component');
});

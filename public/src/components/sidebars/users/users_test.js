import QUnit from 'steal-qunit';
import { ViewModel } from './users';

// ViewModel unit tests
QUnit.module('amity-ui/components/sidebars/users');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the users-sidebar component');
});

import QUnit from 'steal-qunit';
import { ViewModel } from './header';

// ViewModel unit tests
QUnit.module('amity-ui/components/header');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the amity-header component');
});

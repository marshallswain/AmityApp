import QUnit from 'steal-qunit';
import { ViewModel } from './footer';

// ViewModel unit tests
QUnit.module('amity-ui/components/footer');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the amity-footer component');
});

import QUnit from 'steal-qunit';
import { ViewModel } from './about';

// ViewModel unit tests
QUnit.module('amity-ui/components/pages/about');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the page-about component');
});

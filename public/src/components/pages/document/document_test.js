import QUnit from 'steal-qunit';
import { ViewModel } from './document';

// ViewModel unit tests
QUnit.module('amity-ui/pages/document');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the page-document component');
});

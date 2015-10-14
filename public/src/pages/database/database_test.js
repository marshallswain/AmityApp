import QUnit from 'steal-qunit';
import { ViewModel } from './database';

// ViewModel unit tests
QUnit.module('amity-ui/pages/database');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the page-database component');
});

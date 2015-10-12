import F from 'funcunit';
import QUnit from 'steal-qunit';

F.attach(QUnit);

QUnit.module('amity-ui functional smoke test', {
  beforeEach() {
    F.open('../development.html');
  }
});

QUnit.test('amity-ui main page shows up', function() {
  F('title').text('amity-ui', 'Title is set');
});

import { test } from 'qunit';
import moduleForAcceptance from 'minsk-training-app/tests/helpers/module-for-acceptance';
import page from '../pages/room-list';

moduleForAcceptance('Acceptance | room list');

test('loading a list of rooms', function (assert) {
  page.
    visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(page.roomList().count(), 1);
    assert.equal(page.roomListItems().count(), 3);
    assert.equal(page.roomListItems(1).text(), 'Welcome');
  });
});

test('clicking on a room in the list should open it', function(assert) {
  page.visit('/');

  page.roomListItems(1).click();

  andThen(function() {
    assert.equal(currentURL(), '/r/11/Welcome');
  });
});

import { test } from 'qunit';
import moduleForAcceptance from 'minsk-training-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | room list');

test('loading a list of rooms', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(find('ul').length, 1);
    assert.equal(find('ul li').length, 3);
    assert.equal(find('ul li:first').text(), 'Welcome');
  });
});

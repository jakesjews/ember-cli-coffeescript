import { module, test } from 'qunit';
import { visit, currentURL, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | index', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.equal(find('.test-result').innerText, 'Howdy');
  });
});

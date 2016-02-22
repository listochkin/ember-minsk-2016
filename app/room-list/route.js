import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { id: '11', name: 'Welcome' },
      { id: '12', name: 'Ember' },
      { id: '13', name: 'Minsk' }
    ];
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // return Ember.RSVP.hash({
      // carts: this.store.find('cart'),
      // pods: this.store.find('pod')
  return this.store.find('cart');
}

});

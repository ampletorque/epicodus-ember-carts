import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['pods'],
  pods: function() {
    return this.get('controllers.pods.model');
  }.property(),

// podFake: ['Jack', 'John'],


  actions: {
    addCart: function() {
      var podsModel = this.get('controllers.pods.model');
      var thisPod = this.get('pod1');
      // debugger;
      var newCart = this.store.createRecord('cart', {
        name: this.get('name'),
        food: this.get('food'),
        description: this.get('description'),
        rank: this.get('rank'),
        cost: this.get('cost'),
        pod: this.get('pod1')
      });
      newCart.save().then(function() {
        // var podModel = podsModel.findBy('podName', thisPod);
        // podModel.get('carts').pushObject(newCart);
        debugger;
        thisPod.get('carts').pushObject(newCart);
        thisPod.save();
        // podModel.save();

      });
      this.setProperties({
        name: '',
        food: '',
        description: '',
        rank: '',
        cost: '',
        pod: ''
      });
    }
  }
});

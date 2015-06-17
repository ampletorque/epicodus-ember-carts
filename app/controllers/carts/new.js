import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    addCart: function() {
      var newCart = this.store.createRecord('cart', {
        name: this.get('name'),
        food: this.get('food'),
        description: this.get('description'),
        rank: this.get('rank'),
        cost: this.get('cost'),
      });
      newCart.save();

      // pod = this.get('pod');

      var cPod = this.store.find('cart');
      // var addpod = this.get('controllers.pods.model');
      console.log(newCart);
      console.log(cPod);
      // console.log(addpod);
      // console.log(addpod.get('carts'));
      // addpod.get('carts').pushObject(newCart);
      // addpod.save();

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

import Ember from 'ember';

export default Ember.Controller.extend({
needs: ['pods', 'pod'],

  actions: {
    addCart: function() {
      var podsModel = this.get('controllers.pods.model');
      var newCart = this.store.createRecord('cart', {
        name: this.get('name'),
        food: this.get('food'),
        description: this.get('description'),
        rank: this.get('rank'),
        cost: this.get('cost')
      });
      newCart.save().then(function() {
        var podModel = podsModel.findBy('podName', "Cartlandia");

        podModel.get('carts').pushObject(newCart);
        podModel.save();

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



      //  pod: this.get('pod')

      //
      // var cPod = this.store.find('cart');
      // var addpod = this.get('controllers.pods.model');
      // console.log(newCart);
      // console.log(cPod);
      // console.log(addpod);
      // // console.log(addpod.get('carts'));
      // // addpod.get('carts').pushObject(newCart);
      // // addpod.save();

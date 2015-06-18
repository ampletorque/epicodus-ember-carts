import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['carts', 'pods'],

  actions: {
    delete: function() {
      debugger;
       if (confirm('Are you sure?')) {
         var toBeDeleted = this.get('model');
         var cartModel = this.get('controllers.carts.model');
         var orphanCartsList = toBeDeleted.get('carts');
         debugger;
         orphanCartsList.forEach(function(cartsId) {
           debugger;
           var myCart = cartModel.find(cartModel.id, cartsId);

            myCart.pod  = "-Js7gW8a87HHaVbnMxCX";
            myCart.save();
         })

         this.get('model').destroyRecord();
         this.transitionToRoute('pods');
       }
     }
   }
});

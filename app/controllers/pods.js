import Ember from 'ember';

export default Ember.Controller.extend({
 needs: ['carts'],
 actions: {
   debug: function() {
     debugger;
   }
 }
});

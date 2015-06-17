import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addPod: function() {
      var newPod = this.store.createRecord('pod', {
        podName: this.get('podName'),
        podLocation: this.get('podLocation')
      });
      newPod.save();
      this.setProperties({
        podName: '',
        podLocation: ''
      });
    }
  }
});

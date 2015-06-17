import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.resource('pods', function() {
    this.route('new');
    this.resource('carts', function() {
      this.route('new');
    });     
  });
});

export default Router;

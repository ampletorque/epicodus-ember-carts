import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('pods', function() {
    this.route('new');
    this.resource('pod', {path: ':pod_id'});
  });
  this.resource('carts', function() {
    this.route('new');
    this.resource('cart', {path: ':cart_id'});
  });
});

export default Router;

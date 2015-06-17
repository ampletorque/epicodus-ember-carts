import DS from 'ember-data';

export default DS.Model.extend({
  carts: DS.hasMany('cart'),
  podName: DS.attr('string'),
  podLocation: DS.attr('string'),

});

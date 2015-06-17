import DS from 'ember-data';

export default DS.Model.extend({
  pod: DS.belongsTo('pod', {async: true}),
  name: DS.attr('string'),
  food: DS.attr('string'),
  description: DS.attr('string'),
  rank: DS.attr('number'),
  cost: DS.attr('number')

});

import DS from 'ember-data';

export default DS.Model.extend({
  firstname: DS.attr("string"),
  lastname: DS.attr("string"),
  job: DS.attr("string"),
  email: DS.attr("string"),
  phone: DS.attr("string"),
  times: DS.hasMany("time", {async: true})
});
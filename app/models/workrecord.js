import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.attr("string"),
  project: DS.attr("string"),
  date: DS.attr("string"),
  begin: DS.attr("string"),
  end: DS.attr("string"),
  absenceTime: DS.attr("number")
});
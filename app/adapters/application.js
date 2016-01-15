import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: "https://rest-json-api-hordavid.c9users.io",
    namespace: ""
});

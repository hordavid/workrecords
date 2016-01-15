import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            Employee: this.store.findRecord("employee", "l68LwFAElrUmvvOPbbMt")
            /*Deleteemployee: this.store.findRecord("employee", "/g3AqmuNfceIfI6pQHma").then(function(employee) {
                employee.destroyRecord();
            })*/
        };
    }
});

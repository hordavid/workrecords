import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            Employee: this.store.findRecord("employee", "UcvHiZV8m9bFx+hTWUKF")
            /*Delete-employee: this.store.findRecord("employee", "UcvHiZV8m9bFx+hTWUKF").then(function(employee) {
                employee.destroyRecord();
            })*/
        };
    }
});

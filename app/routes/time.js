import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return {
            Time: this.store.findRecord('time', params.time_id)
        };
    }
});

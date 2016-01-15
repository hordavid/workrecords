import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            Times: this.store.findAll('time')
        };
    }
});

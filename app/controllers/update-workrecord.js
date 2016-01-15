import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        updateWorkrecord: function(id, data) {
            console.log("Workrecord update start");
            this.store.findRecord("workrecord", id).then(function(workrecord) {
                workrecord.set("project", data.project);
                workrecord.set("date", data.date);
                workrecord.set("begin", data.begin);
                workrecord.set("end", data.end);
                
                workrecord.save();
            });
            console.log("Workrecord update success");
        }
    }
});

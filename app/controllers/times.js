import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        deleteTime: function (id) {
            this.store.findRecord('employee', 'UcvHiZV8m9bFx+hTWUKF').then(function(emp) {
                emp.set('times', emp.get('times').removeObject(id));
                emp.save();
            });
            this.store.findRecord('time', id).then(function(time) {
                time.destroyRecord();
            });
        },
        addBreak: function(id) {
            console.log("Workrecord update start");
            this.store.findRecord('time', id).then(function(time) {
                var breakValue = time.get('absenceTime');
                var newValue;
                
                if(breakValue + 5 <= 120) {
                    newValue = breakValue + 5;
                } else {
                    newValue = breakValue;
                }
                
                time.set('absenceTime', newValue);
                time.save();
            });
            console.log("Workrecord update success");
        },
        removeBreak: function(id) {
            console.log("Workrecord update start");
            this.store.findRecord('time', id).then(function(time) {
                var breakValue = time.get('absenceTime');
                var newValue;
                
                if(breakValue - 5 >= 0) {
                    newValue = breakValue - 5;
                } else {
                    newValue = breakValue;
                }
                
                time.set('absenceTime', newValue);
                time.save();
            });
            console.log("Workrecord update success");
        },
        filter: function() {
            var rex = new RegExp($("#filter_input").val(), 'i');
            $('.filterable tr').hide();
            $('.filterable tr').filter(function () {
                return rex.test($(this).text());
            }).show();
        },

        updateTime: function(timeData) {
            console.log(timeData);
        }
    }
    
});

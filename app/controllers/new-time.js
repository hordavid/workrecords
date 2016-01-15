import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newTime: function(timeData) {
            //console.log(timeData);
            var store = this.store;
            var employee_id = timeData.employee;
            var project = timeData.project;
            var date = timeData.date;
            var begin = timeData.begin;
            var end = timeData.end;
            store.findRecord('employee', employee_id).then(function(emp) {
                var firstname = emp.get("firstname");
                var lastname = emp.get("lastname");
                var owner = firstname + " " + lastname;
                //console.log(owner);
                var time = store.createRecord("time", {
                    owner: owner,
                    project: project,
                    date: date,
                    begin: begin,
                    end: end,
                    absenceTime: 0
                });
                time.save().then(function() {
                    if (employee_id != null && employee_id != "null") {
                        //console.log(player);
                        store.findRecord("employee", employee_id)
                            .then(function (_employee) {
                                store.findRecord("time", time.get("id"))
                                    .then(function (_time) {
                                        _employee.get("times").pushObject(_time);
                                        _employee.save();
                                    });
                            });
                    }
                });
            });
        }
    }
});

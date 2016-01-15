import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newWorkrecord: function(data) {
            //console.log(data);
            var store = this.store;
            var employee_id = data.employee;
            var project = data.project;
            var date = data.date;
            var begin = data.begin;
            var end = data.end;
            store.findRecord('employee', employee_id).then(function(emp) {
                var firstname = emp.get("firstname");
                var lastname = emp.get("lastname");
                var owner = firstname + " " + lastname;
                //console.log(owner);
                var workrecord = store.createRecord("workrecord", {
                    owner: owner,
                    project: project,
                    date: date,
                    begin: begin,
                    end: end,
                    absenceTime: 0
                });
                workrecord.save().then(function() {
                    if (employee_id != null && employee_id != "null") {
                        //console.log(player);
                        store.findRecord("employee", employee_id)
                            .then(function (_employee) {
                                store.findRecord("workrecord", workrecord.get("id"))
                                    .then(function (_workrecord) {
                                        _employee.get("workrecords").pushObject(_workrecord);
                                        _employee.save();
                                    });
                            });
                    }
                });
            });
        }
    }
});

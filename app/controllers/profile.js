import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
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
        updateEmployee: function(id) {
            if($("#btn-custom").html() === "Szerkesztés") {
                $("div").each(function() {
                    if(Ember.$(this).hasClass("col-lg-10")) {
                        var children = $(this).children();
                        var name = children.attr("name");
                        var text = children.text();
                        
                        children.remove();
                        
                        var input = $("<input type='text'>").addClass("form-control").attr({"name": name, "value": text});
                        $(this).append(input);
                    }
                }); 
                $("#btn-custom").html("Mentés").removeClass("btn-default").addClass("btn-primary");
            } else {
                console.log("Employee update start");
                this.store.findRecord('employee', id).then(function(employee) {
                    var firstname = $('[name="firstname"]').val();
                    var lastname = $('[name="lastname"]').val();
                    var job = $('[name="job"]').val();
                    var email = $('[name="email"]').val();
                    var phone = $('[name="phone"]').val();
                    
                    employee.set('firstname', firstname);
                    employee.set('lastname', lastname);
                    employee.set('job', job);
                    employee.set('email', email);
                    employee.set('phone', phone);
                    
                    employee.save();
                });
                console.log("Employee update success");
                
                $("div").each(function() {
                    if($(this).hasClass("col-lg-10")) {
                        var children = $(this).children();
                        var name = children.attr("name");
                        var text = children.val();
                        
                        children.hide();
                        
                        var well = $("<div>").addClass("well well-sm").attr("name", name).html(text);
                        $(this).append(well);
                        
                    }
                });   
                $("#btn-custom").html("Szerkesztés").removeClass("btn-primary").addClass("btn-default");
            }
        }
        
    }
});

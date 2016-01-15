import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        onSubmit: function () {
            this.get('onSave')({
                employee: $('.employee select:nth-of-type(1)').val(),
                project: $('[name="project"]').val(),
                date: $('[name="date"]').val(),
                begin: $('[name="begin"]').val(),
                end: $('[name="end"]').val(),
                absenceTime: $('[name=absence]').val()
            });
            //this.onSave();
        }
    }
});

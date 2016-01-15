import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        onSubmit: function () {
            this.get('onUpdate')({
                project: $('[name="project"]').val(),
                date: $('[name="date"]').val(),
                begin: $('[name="begin"]').val(),
                end: $('[name="end"]').val(),
            });
            //this.onSave();
        }
    }
});

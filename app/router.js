import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('profile');
  this.route('new-workrecord');
  this.route('workrecords');
  this.route('update-workrecord', {path: "/workrecords/:workrecord_id"});
});

export default Router;

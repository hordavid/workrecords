import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('profile');
  this.route('new-time');
  this.route('times');
  this.route('time', {path: 'times/:time_id'});
  //this.resource('time', {path: 'times/:time_id'});
});

export default Router;

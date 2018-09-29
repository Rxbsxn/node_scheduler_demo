const schedule = require('node-schedule');

schedule.scheduleJob('* * * * *', () => { // callback will be executed every minute
  console.log('Ember.js > React');
});

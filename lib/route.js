import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {BlazeLayout} from 'meteor/kadira:blaze-layout';

FlowRouter.route("/",{
  name: 'home',
  action(){
    BlazeLayout.render('HomeLayout')
  }
});

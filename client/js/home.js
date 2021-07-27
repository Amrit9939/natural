import {Meteor} from 'meteor/meteor';
import axios from 'axios';

const Suggestion = new Mongo.Collection(null);
console.log(false);

Template.HomeLayout.events({
  'input #input1': function(){
     var value = document.getElementById('input1').value;
     var obj ={
       v:value
     }
     axios.post("/",obj).then((res)=>{
       console.log(res.data.str);
     }).catch(err=>{
       console.log(err);
     });
  },
  'click #btn': function(){
    console.log("clicked");
    var value = document.getElementById('input1').value;
    console.log(value);

  }
});

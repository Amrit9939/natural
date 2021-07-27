import { Meteor } from 'meteor/meteor';
import express from 'express';
import {WebApp} from 'meteor/webapp';
const Fiber = require('fibers');
var cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
let s1 = "cat";
let s2 = "cap";


let natural = require('natural');
console.log(natural.JaroWinklerDistance(s1,s2));
console.log(natural.JaroWinklerDistance('not', 'same'));
var available = ['cat','bat','amrit','amar','aman','puneet','manoj','raju','shyam'];

app.post('/',(req,res)=>{
  Fiber(async function(){
  try {
    var target = req.body.v;
    var max = 0;
    var n_str= "";
    available.forEach((element)=>{
      c_max = natural.JaroWinklerDistance(target,element);
      if(c_max>max){
        n_str=element;
        max = c_max;
      }
    });
    console.log(n_str);
    return res.status(200).json({
      str:n_str
    })
  } catch (e) {
    console.log(e);
  }
  }).run();
});
WebApp.connectHandlers.use(app);

const EventEmitter=require('events');
class MyEmitter extends EventEmitter {}

const myEmitter=new MyEmitter();

myEmitter.on('waterFull', ()=>{
    console.log('Please turn off the motor');
    setTimeout(()=>{
        console.log('Please turn off the motor! Its a gentle reminder');
    },3000);
});

// myEmitter.emit('event');

console.log("The script is running");
console.log("The script is still running");
myEmitter.emit('waterFull')
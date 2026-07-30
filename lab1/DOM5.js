import { EventEmitter } from "events";

class Domclass extends EventEmitter{

    addEventListner(eventname,callback){
        this.on(eventname,callback);
    }
    removeEventListener(eventname,callback){
        this.off(eventname,callback);

    }
dispatchEvent(eventname,eventData={}){
    const event={
        type:eventname,
        timespam:new Date(),
        ...eventData
    }
    this.emit(eventname,event);

}
    
}
const button =new Domclass();
const handleclick=(event)=>{
    console.log(`button click type: ${event.type} at ${event.timespam}`);
};
button.addEventListner('click',handleclick);
button.dispatchEvent('click',{
    target: 'submitBtn',

});
button.removeEventListener("click",handleclick)
button.dispatchEvent("click",{
    target: "resetBtn",

});



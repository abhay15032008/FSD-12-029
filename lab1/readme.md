# event loop
js is synchronous and single threaded by default
## there  can be async behaviour 
- with browserAPI - setTimeout , setInterval ,setImmediate,nextclick
- with promises
- with event handlers 
# promise
a function not executed immediately it must be exexuted after a while.it has some status during the execution ,at final it may resolve ()=>success 
or 
reject=>unsuccess

# callback
callback function => that passes as arguments or new parameter to another function
# modern java script devided into two category
1...common js(cjs)=> supports OOPS->require 
-priority(nextTick,promise,setImediate/setTimeout)
2...module js(mjs)=> follow modular approach -> import
- priority (promise,nextTick,setImmediate/setTimeout)


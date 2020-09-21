// More advance things
/* Before code runs there is a global execution context that gets created
, even if code empty create when we create a javascript file. Few
important things get created. It's a creation phase that will
create a global objects can be window and a this key word. ALso Js 
engin allocate memeory for our functions on the global objects. 
After the creation phase there is the execution phase. In this phase
the code starts running. Hoisting: King of moving to the top */

sayHi();

function sayHi() {
  console.log("hello");
}

/* Above example of Hoisting. Js already know about the function
before executing it. Js takes a look an so the above work.
Same work with varibles var, will not get an error, var will be 
undefined. Var also hoisted but value doesn't get saved. With const 
doesn't work. Const and let resolve these issues*/

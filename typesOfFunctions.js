
(function immediatelyInvokedFunction(){
    console.log("This is immediately invoked Function !");
})();


(immediatelyInvokedFunction =() =>{
    console.log("This is immediately invoked Function 2 in arrow function syntax !");
})();

function named(){
    console.log("This is named Function !");
}
named();

const named2 = () =>{
    console.log("This is named Function 2 with arrow function syntax!");
}
named2();


setTimeout(function(){
    console.log("this is anonymous function !");
},3000);

setTimeout(()=>console.log("this is anonymous function with arrow function syntax!"),3000);
const anonymousFunction = function(){
    console.log("this is also an example of anonymous function !");
}
anonymousFunction();
const anonymousFunction2 = ()=> console.log("this is also an example of anonymous function with arrow function syntax !");

anonymousFunction2();
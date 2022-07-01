function receivesAFunction(callBack) {
    return callBack();
};
callback("hello");

function helloFunc(){
    console.log("how are you");
};
function returnsANamedFunction(){
    return(helloFunc);
};

function returnsAnAnonymousFunction(){
    return () => console.log('an anonymous function')
};

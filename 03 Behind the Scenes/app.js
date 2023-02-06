////// VANILLA JS //////

let message = 'Hello!';
let longMessage = message + 'World!';
console.log(longMessage);       // Hello! World!
message = 'Hello!!!!';
console.log(longMessage);       // Hello! World!


////// PROXIES //////
const data = {
    message: 'Hello!',
    longMessage: 'Hello! World!'
};

const handler = {
    set(target, key, value){
        if ( key === 'message') {
            target.longMessage = value + ' World!';
        }
        target.message = value;
        // console.log(target);
        // console.log(key);
        // console.log(value);
    }
}

const proxy = new Proxy(data, handler)
// NOTE: Tracking one property, to update another property, when that one property changes 

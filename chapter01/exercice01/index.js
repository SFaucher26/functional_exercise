
export function greetWorld() {
return "Hey, world!";
}

export function greet(name) {
    
    return "Hey, "+name +"!" ;
}

/**
 * 
 * @param {string} name 
 * @returns 
 */
export function capitilizedGreet(name) {
return greet(name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase());
}

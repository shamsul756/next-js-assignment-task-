function descriveValue(value){
    let type = typeof value;
    let typeCheck = value ? "truthy" : "falsy";
 
    return type + " | " + typeCheck;
}
let checkValue = descriveValue(3);
console.log(checkValue);
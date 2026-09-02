function getTypeDate(day){
   day = day.toLowerCase();
//check start 
   switch(day){
    case "friday":
    case "saturday":
       return "weekend";

    case "sunday":
    case "monday":
    case "tuesday":
    case "wednessday":
    case "thursday":
        return "working day";
  
   default :
  return  "invalid day"
   }
}

let checkValue = getTypeDate("");
let checkDay = getTypeDate("sunday")
console.log(checkValue, checkDay);


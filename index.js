function validUserName(userName){
    if(userName.length < 3){
        return "too short"
    }
  else if(userName.includes(" ")){
    return "space are not allowed"
  }

  else if(userName.toLowerCase().includes("admin")){
    return "reserved keyword"
  }
  return "available"
}
let checkValue = validUserName("adin");
console.log(checkValue);
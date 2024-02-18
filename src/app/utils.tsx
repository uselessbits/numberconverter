export function checkIfNumberValid(number:string, base:number){
  let valid = true
  for(let i = 0; i < number.length; i++){
    if(parseInt(number[i],10) >= base){
      valid = false
      break
    }
  }
  return valid


}


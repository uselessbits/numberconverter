export function checkIfNumberValid(number:string, base:number){
  
  for(let i = 0; i < number.length; i++){
    if(isNaN(parseInt(number[i],base)) || parseInt(number[i],base) < 0 || parseInt(number[i],base) >= base){
      return false
    }
  }
  return true


}


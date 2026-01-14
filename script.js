function pairElement(str){
  
  const basesAdn = str.split("");
  const result = [] ;

  for(let baseAdn of basesAdn){
     if(baseAdn == "A"){
       result.push([baseAdn ,"T"])
     }else if(baseAdn == "T"){
       result.push([baseAdn ,"A"])
     }else if(baseAdn == "C"){
       result.push([baseAdn ,"G"])
     }
     else if(baseAdn == "G"){
       result.push([baseAdn ,"C"])
     }
  }
  
  return result
}
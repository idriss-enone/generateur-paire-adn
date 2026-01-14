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

console.log(pairElement("ATCGA"));
// [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
console.log(pairElement("TTGAG"));
// [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
console.log(pairElement("CTCTA"));
// [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
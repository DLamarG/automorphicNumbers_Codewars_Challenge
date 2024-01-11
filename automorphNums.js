function automorphic(n){
    let squNum = Math.pow(n, 2).toString();
    let strNum = n.toString()
    if(squNum.substring(squNum.length - strNum.length,)===strNum){return "Automorphic"}
    if(squNum.substring(squNum.length - strNum.length,)!=strNum){return "Not!!"}
  }


console.log(automorphic(6))//--> Automorphic
console.log(automorphic(53))//--> Not!!
console.log(automorphic(76))//--> Automorphic
console.log(automorphic(95))//--> Not!!
console.log(automorphic(625))//--> Automorphic
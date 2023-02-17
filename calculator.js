let textSpace = document.getElementById("text-space");


function clickbtn(target){
  let targetValue = target.innerHTML;
  if (targetValue == "AC"){
    textSpace.innerHTML = "0";
  } else if(targetValue == "="){
    textSpace.innerHTML = eval(textSpace.innerHTML);
  } else if(targetValue == "." && textSpace.innerHTML == "0"){
      textSpace.innerHTML = "0.";
  } else if(targetValue == "00" && textSpace.innerHTML == "0"){
      textSpace.innerHTML = "0";
  } else if(targetValue == "*" && textSpace.innerHTML == "0"){
      textSpace.innerHTML = "0";
  } else if(targetValue == "/" && textSpace.innerHTML == "0"){
      textSpace.innerHTML = "0";
  } else if(targetValue == "+" && textSpace.innerHTML == "0"){
      textSpace.innerHTML = "0";
  } else if(targetValue == "-" && textSpace.innerHTML == "0"){
      textSpace.innerHTML = "0";
  } else if(textSpace.innerHTML == "0"){
    textSpace.innerHTML = targetValue;
  } else{
  textSpace.innerHTML += targetValue;
  }
}

function clickplus(target){
  
  let lastLetter = textSpace.innerHTML.slice(-1);
  let targetValue = target.innerHTML;
  console.log(lastLetter,targetValue)
  
  if(lastLetter == "+" && targetValue == "+" ){
    let str = textSpace.innerHTML;
    let newstr = str.slice(0,-1);
    textSpace.innerHTML = newstr + targetValue;
    
  }
  
}

function clickminus(target){

  }

function clickmulti(target){
  
  }

function clickdiv(target){
 
  }
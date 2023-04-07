// generate from json array data with index

var i=0;
var count = 0;
generate(0);
 
function generate(index){
    document.getElementById("questions").innerHTML = jsonData[index].q;
    document.getElementById("opt1").innerHTML = jsonData[index].option1;
    document.getElementById("opt2").innerHTML = jsonData[index].option2;
    document.getElementById("opt3").innerHTML = jsonData[index].option3;
}

function CheckAnswer(){
    if(document.getElementById("option1").checked && jsonData[i].option1 == jsonData[i].Answer){
        count++;
    }
    if(document.getElementById("option2").checked && jsonData[i].option2 == jsonData[i].Answer){
        count++;
    }
    if(document.getElementById("option3").checked && jsonData[i].option3 == jsonData[i].Answer){
        count++;
    }
    //i increase from next question
    i++;
    if(jsonData.length-1 < i){
        document.write("Your score is : "+ count)
    }
    generate(i);
  
}
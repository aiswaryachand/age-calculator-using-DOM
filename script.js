var pardiv = document.createElement("div");
pardiv.style.textAlign = "center"
pardiv.style.paddingTop = "30px"

//this is the input for the date
var inputdate = document.createElement("input");
inputdate.setAttribute("type","date");
inputdate.setAttribute("id","dob");
inputdate.style.width = "30%"
inputdate.style.margin = "10px"
//this is for the button
var button = document.createElement("button");
button.innerHTML = "Display date"
button.className = "btn btn-primary"
button.addEventListener("click",displaydata);
//Append it to parent div
pardiv.append(inputdate,button)
var displaydiv = document.createElement("div");
displaydiv.id = "displaydata"
document.body.append(pardiv)

function displaydata(){
    
var input = document.getElementById("dob").value;
var inpdate = new Date(input);
console.log(inpdate)
var currdate = new Date()
console.log(currdate)
var millisecdiff = currdate.getTime() - inpdate.getTime()
console.log(millisecdiff)
var seconddiff = mathfloor(millisecdiff,1000)
console.log(seconddiff)
var minutesdiff = mathfloor(seconddiff,60);
console.log(minutesdiff);
var hourdiff = mathfloor(minutesdiff,60);
console.log(hourdiff);
var daydiff = mathfloor(hourdiff,24);
console.log(daydiff);
var monthdiff = getmonthdiff(inpdate,currdate)
console.log(monthdiff);
var yeardiff = getYear(inpdate,currdate)
console.log(yeardiff);

var result = document.createElement("div");
result.textContent = "year" +  yeardiff;
document.body.appendChild(result);
result.style.textAlign = "center"
document.getElementById("year");
var result = document.createElement("div");
result.textContent = "Month" +monthdiff;
document.body.appendChild(result);
result.style.textAlign = "center"
var result = document.createElement("div");
result.textContent =  "Day" + daydiff;
document.body.appendChild(result);
result.style.textAlign = "center"
var result = document.createElement("div");
result.textContent = "Hour"+ hourdiff;
document.body.appendChild(result);
result.style.textAlign = "center"
var result = document.createElement("div");
result.textContent = "Minutes" + minutesdiff;
document.body.appendChild(result);
result.style.textAlign = "center"
var result = document.createElement("div");
result.textContent = "Second"+ seconddiff;
document.body.appendChild(result);
result.style.textAlign = "center"
var result = document.createElement("div");
result.textContent = "milli Second" + millisecdiff;
document.body.appendChild(result);
result.style.textAlign = "center"
}
function mathfloor(value1,value2){
return Math.floor(value1/value2)
}

function getYear(value1,value2){
var d1= new Date(value1);
var d2 = new Date(value2);
return d2.getFullYear() - d1.getFullYear()
}
function getmonthdiff(value1,value2){
var year = getYear(value1,value2)
var month = (year*12)+(value2.getMonth()-value1.getMonth())
return month
}
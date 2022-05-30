// console.log(h1_first); 
// document.getElementById("h2_first").innerText ="my dom app"
// console.log(document.getElementsByClassName("h3_first"));
// console.log(document.getElementsByClassName("h3_first")[1]);
// console.log(document.getElementsByClassName("h3_first")[2].innerText);
// console.log(document.getElementsByTagName("span"));
// function printUsername() {
//     var userName = prompt("enter your name")
//     document.write("<h2>" + userName + "</h2>")
// }
// printUsername()
// function printUserColor() {
//     var userColor = prompt("enter your color")
//     var userNumber = prompt("enter your number")
//     for (var i = 0; i < userNumber; i++) {
//         document.write("<span>" +" " + userColor + " " + "</span>")   
//     }
// }
// printUserColor()


// function printText() {
//     var userText = prompt("enter your text please")
//     var userTag = prompt("enter a tag please")
//     document.write("<"+userTag+">"+userText+"<"+userTag+"/>") 
// }
// printText()


// function printInput() {
//     var userTypeInput = prompt("enter your type input")
//     var userText = prompt("enter your text input")
//     document.write("<"+userTypeInput+"/>"+userText+"<"+userTypeInput+"/>")
// }
// printInput()


// function changeClass(myClass,myText) {
//     var myText = prompt("enter a Text")
//     myClass = document.getElementsByClassName("OneLove").innerHTML = myText
// }
// changeClass()

// function addSpan() {
//     var elemetP= document.getElementsByTagName("p")
//     for (var i = 0; i < elemetP.length; i++) {
//             elemetP[i].innerHTML ="<span>"+"hollaa"+"</span>"
            
//         }
//     document.write(elemetP)
// }
// addSpan()

function print() {
    var userName = prompt("enter your name")    
    var userLastName = prompt("enter your last name")    
    var userAge = prompt("enter your age") 
    document.write(" "+userAge+" "+userName+" "+userLastName+" ")
    if (userAge>18) {
        document.write(prompt("enter Text"))
    }   
}
print()
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


// function buildText() {
//     var userText = prompt("enter a Text")
//     var userTagName = prompt("enter a Tag Name")

    
// }


// function printInput() {
//     var userTypeInput = prompt("enter your type input")
//     document.body.textContent("<input type ="+userTypeInput+"/>")
// }
// printInput()



// function changeClass(myClass,myText) {
//     var changeClass = document.getElementsByClassName(myClass)
//     for (var i = 0; i < changeClass.length; i++) {
//         changeClass[i].innerText = myText     
//     }
// }
// changeClass("OneLove","dfgGFDFGDFhjk")

// function addSpan() {
//     var pArray= document.getElementsByTagName("p")
//     for (var i = 0; i < pArray.length; i++) {
//             pArray[i].innerHTML ="<span>"+"hollaa"+"</span>"
            
//         }
//     document.write(pArray)
// }
// addSpan()

// function print() {
//     var userName = prompt("enter your name")    
//     var userLastName = prompt("enter your last name")    
//     var userAge = prompt("enter your age") 
//     document.write(" "+userAge+" "+userName+" "+userLastName+"<br>")
//     if (userAge>18) {
//         document.write("<input type=")
//     }   
// }
// print()


// function printMovie() {
//     var movie = {
//         nameMovie:prompt("enter name movie"),
//         nameViews:prompt("enter name views"),
//         nameYear:prompt("enter name year"),
//         userMovieURL:prompt("enter movie url"),
//     }
//     document.write("<h1>"+movie.nameMovie+"</h1>"+"<h3>"+movie.nameViews+"</h3>"+"<h6>"+movie.nameYear+"</h6>"+"<img src="+movie.userMovieURL+">")
// }
// printMovie()

// var worker = {
//     workerName:prompt("enter your name"),
//     workerLastName:prompt("enter your last name"),
//     workerEmail:prompt("enter your email"),
//     workerClass:prompt("enter your class"),
// }
// document.write("<b>"+worker.workerName+"</b>"+"<ins>"+worker.workerLastName+"</ins>"+"<h5>"+worker.workerEmail+"</h5>"+"<span>"+worker.workerClass+"</span>")


// function printConstractur() {
//     var userNumber =+prompt("enter a number")
//     for (var i = 0; i < userNumber; i++) {
//         var building ={
//             constracturName:prompt("enter constractur"),
//             companyName :prompt("enter company name"),
//             floorNum :prompt("enter floor Number"),
//             apprtmentNumber :prompt("enter apprtment Number"),
//         } 
//         document.body.innerHTML="<b>"+building.companyName+"</b>"+"<h2>"+building.companyName+"</h2>"+"<sup>"+building.floorNum+"</sup>"+"<h1>"+building.constracturName+"</h1>"
//     }
// }
// printConstractur()


// var funResult  = 0
// function printStores() {
//     var userNumber = +prompt("enter number")
//     for (let i = 0; i < userNumber; i++) {
//         var store = {
//             storeName:prompt("enter store name"),
//             storeAddress:prompt("enter store address"),
//             storeClassNumber:prompt("enter Class Number"),
//             storeEmployeesNumber:+prompt("enter store Employees Number"),
//         }
//         if (store.storeEmployeesNumber>10) {
//             document.body.innerHTML="<b>"+store.storeName+"</b>"+"<h2>"+store.storeAddress+"</h2>"+"<sup>"+store.storeClassNumber+"</sup>"+"<h1>"+store.storeEmployeesNumber+"</h1>"
//             funResult++
//         }
//     }   
// }
// printStores()


// function sum() {
//     console.log(funResult);
// }
// sum()


// function somefun() {
//     var userNumber = +prompt("enter number")
//     var list = document.getElementById("listtt")
//     for (var i = 0; i < userNumber; i++) {
//         var contact = {
//             username:prompt("enter your name"),
//             usercompany:prompt("enter your company"),
//             userphone:prompt("enter your phone"),
//             useremail:prompt("enter your email"),
//         }
//         list.innerHTML+="<li>"+ contact.username+"</li>"
//     }
// }
// somefun()


// function addToTable() {
//     var userNumber =+prompt("enter a number")
//     var mytable = document.getElementById("hatable")
//     for (var i = 0; i < userNumber; i++) {
//         var doctor = {
//             doctorFullName:prompt("enter your name doctor"),
//             doctorIntership:prompt("enter your intership doctor"),
//             doctorPhone:prompt("enter your phone doctor"),
//             doctorIsAvailable:confirm("doctor are you available"),
//             doctorEmail:prompt("enter your Email")
//         }
//         mytable.innerHTML+= "<tr>"+"<td>"+doctor.doctorFullName+"</td>"+"<td>"+doctor.doctorIntership+"</td>"+"<td>"+doctor.doctorPhone+"</td>"+"<td>"+doctor.doctorEmail+"</td>"+"</tr>"
//     }
// }
// addToTable()
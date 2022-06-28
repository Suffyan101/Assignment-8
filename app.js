// Chapter # 26-30 

// Question 1

// var a =  prompt("Please enter Positive number")

// document.write("Number: "+ a+"<br>")

// document.write("Round Off value: "+ Math.round(a)+"<br>")
// document.write("Floor value: "+ Math.floor(a)+"<br>")
// document.write("Round Ceil Value: "+ Math.ceil(a))


// Question 2

// var a =  prompt("Please enter negative number")

// document.write("Number: "+ a+"<br>")

// document.write("Round Off value: "+ Math.round(a)+"<br>")

// document.write("Floor value: "+ Math.floor(a)+"<br>")

// document.write("Round Ceil Value: "+ Math.ceil(a))


// Question 3

// var a = prompt("Please enter positive or negative number to display absolute number")


// document.write("User Enter Value is: "+ a+"<br>")

// document.write("Absolute value of user value: "+ Math.abs(a))


// Question 4

// var a = Math.ceil(Math.random()*6)

// document.write("<h3>"+"Dice Number is: "+"</h3>"+"<br>")

// document.write("<h1>"+ "Random Dice Value"+ a + "</h1>")


// Question 5

// var a = Math.ceil(Math.random()*2)

// if( a === 1){
//     document.write(a+"<br>")
//     document.write("Random Coin value: Tails")
// }
// else{
//     document.write(a+"<br>")
//     document.write("Random Coin value: Heads")
// }


// Question 6

// var a = Math.ceil(Math.random()*100)

// document.write("Random number between 1 and 100: "+ a)

// Question 7

var a  = prompt("Enter your weight in kilograms")
var c = ""

for(i = 0 ; i<= a.length; i++){
    var b = a.charCodeAt(i)
    if(b >= 48 && b <=57 || b === 46){
        c+= a[i]
    }
    
}
var d = parseFloat(c).toFixed(2)
console.log(d) 
document.write("The Weight of user: "+ d +" Kilograms")


// Question 8 

// var a = prompt("Please Select the number between 1 to 10")
// var c = parseInt(a)
// var b = Math.ceil(Math.random()*10)
// console.log(b)
// if(a=== ""){
//     alert("Kindly insert the number")
// }
// else if(c === b){
//     alert("You Win")
// }
// else{
//     alert("Try Again :)")
// }
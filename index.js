let userNumber = prompt("Enter a number");
let userNumber2 = parseInt(userNumber);
let number = document.getElementById("number");
if (userNumber2 % 2 === 0) {
    alert("your number is even")
    console.log("Even");
}
else if (userNumber2 % 2 === 1){
    alert("your number is odd")
    console.log("Odd");
}
else if (isNaN(userNumber2)) {
    alert("Please enter a number")
}
number.innerHTML = `Your Number is ${userNumber2}`;
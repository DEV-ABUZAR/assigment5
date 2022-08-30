var num1:any= prompt("enter num1")
var num2:any= prompt("enter num2")
var num3:any= prompt("enter num3")
if ("num1 > num2 && num1 > num3"){
    document.write("number 1 is maximum")
}
else if ( "num2 > num1 && num2 > num3"){
    document.write("number 2 is maximum")
}
else if ( "num3 > num1 && num3 > num2"){
    document.write("number 3 is maximum")
}
else {
    document.write("please enter valid numbers")
}
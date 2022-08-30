var a = prompt("enter num1");
var b = prompt("enter num2");
if (a > b) {
    document.write("num1 is maximum");
}
else if (b > a) {
    document.write("num2 is maximum");
}
else if (a == b) {
    document.write("the numbers are equal");
}
else {
    document.write("please enter a valid number");
}

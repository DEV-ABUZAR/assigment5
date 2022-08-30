var b:any= prompt("enter anything");
if(b >= '1' && b <= '99'){
    document.write("this is a charectar")
}
else if (b >= 'a' &&  b <= 'z' || (b >= 'A' &&  b <= 'Z'){
    document.write("this is an alphabet")
}
else{
    document.write("this is a special charectar")
}
function reverseString() {
    // assign variable from input
    var str = document.getElementById("inputString").value;
    // syntax to perform sentence reverse
    var revStr = str.split('').reverse().join('');
    // perform 
    document.getElementById("originalString").textContent = "Original string: " + str;
    document.getElementById("reversedString").textContent = "Reversed string: " + revStr;
}
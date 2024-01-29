let a = parseInt(prompt("Input "))
if (a.slice(0,3) === reverseString(a.slice(3))) {
    console.log ("зеркальное")
} else {
    console.log ("не зеркальное")
}
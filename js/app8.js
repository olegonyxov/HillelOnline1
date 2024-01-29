let a = parseInt(prompt("Input "))
if (a.slice(0,3) === (a.slice(3)).split("").reverse().join("")) {
    console.log ("зеркальное")
} else {
    console.log ("не зеркальное")
}
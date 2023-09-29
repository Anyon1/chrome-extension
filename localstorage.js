let array = []
array.push("value1", "value2")
console.log(array)
console.log(typeof array)
// Array erstellt und Werte zugewiesen + Typ verifiziert

let arrayToString = JSON.stringify(array)
localStorage.setItem("test", arrayToString)
console.log(typeof arrayToString)
console.log(localStorage.getItem("test"))
// Array in String umgewandelt und im localStorage gespeichert
// String-Typ verifiziert
// weil localStorage keine Arrays speichern kann



let arrayAgain = JSON.parse(localStorage.getItem("test"))
console.log(arrayAgain)
console.log(typeof arrayAgain)
// String wieder in einen Array umgewandelt



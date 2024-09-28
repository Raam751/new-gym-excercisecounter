let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let heading1 = document.getElementById("excercise")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    
    saveEl.textContent = 10 - count
}

function next() {
    
    heading1.textContent = "Crunches: "
    
    count = 0
}

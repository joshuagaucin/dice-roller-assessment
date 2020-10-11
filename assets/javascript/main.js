const numRolls = document.querySelector('#number-of-rolls')
const numRollsD4 = document.querySelector("#number-of-rolls-D4");
const numRollsD8 = document.querySelector("#number-of-rolls-D8");
const numRollsD10 = document.querySelector("#number-of-rolls-D10");
const numRollsD20 = document.querySelector('#number-of-rolls-D20')
const roll = document.querySelector("#roll");
const rollD4 = document.querySelector("#roll-D4");
const rollD8 = document.querySelector("#roll-D8");
const rollD10 = document.querySelector("#roll-D10");
const rollD20 = document.querySelector('#roll-D20')
const total = document.querySelector('#sum-of-rolls')
const showAll = document.querySelector('#show-all-rolls')
const allRolls = document.querySelector('#all-rolls')
let totalRolls = 0
let dieRolls = []
let reset = document.querySelector('#reset')





rollD4.addEventListener("click", function () {
  i = 0;
  while (i < numRollsD4.value) {
    let randomRollD4 = Math.floor(Math.random() * 4) + 1;
    totalRolls += randomRollD4;

    i++;

    dieRolls.push(randomRollD4);
  }
  total.innerText = "Sum of all rolls is " + totalRolls;
});
roll.addEventListener("click", function () {
  i = 0;
  while (i < numRolls.value) {
    let randomRoll = Math.floor(Math.random() * 6) + 1;
    totalRolls += randomRoll;

    
    i++;

    dieRolls.push(randomRoll);
  }
  total.innerText = "Sum of all rolls is " + totalRolls;

  
});
rollD8.addEventListener("click", function () {
  i = 0;
  while (i < numRollsD8.value) {
    let randomRollD8 = Math.floor(Math.random() * 8) + 1;
    totalRolls += randomRollD8;

    
    i++;

    dieRolls.push(randomRollD8);
  }
  total.innerText = "Sum of all rolls is " + totalRolls;

 
});

rollD10.addEventListener("click", function () {
  i = 0;
  while (i < numRollsD10.value) {
    let randomRollD10 = Math.floor(Math.random() * 10) + 1;
    totalRolls += randomRollD10;

    
    i++;

    dieRolls.push(randomRollD10);
  }
  total.innerText = "Sum of all rolls is " + totalRolls;

  
});
rollD20.addEventListener('click', function() {

        i = 0
        while (i < numRollsD20.value) {

            let randomRollD20 = Math.floor(Math.random() * 20) + 1;
            totalRolls += randomRollD20

           
            i++;

            dieRolls.push(randomRollD20)
        }
        total.innerText = "Sum of all rolls is " + totalRolls

        
    })

    //for each dieroll create a new list item and add it to innerHtml of all rolls
showAll.addEventListener('click', function() {
    let i = 0;
    while (i < dieRolls.length) {
        //let newList = document.createElement('li')
        //newList.innerHTML = dieRolls[i]
        //allRolls.appendChild(newList)
        allRolls.innerHTML += "<li>" + dieRolls.pop([i]) + "</li>"
        i++
        // console.log(allRolls)
    }

})

reset.addEventListener('click', function() {
    numRolls.value = ""
    total.innerHTML = ""
    allRolls.innerHTML = ""
    dieRolls = []
    numRollsD20.value = ""
    
    numRollsD8.value = "";
    numRollsD10.value = "";
    numRollsD4.value = "";
    totalRolls = 0

})
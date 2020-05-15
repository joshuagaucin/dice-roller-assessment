const numRolls = document.querySelector('#number-of-rolls')
const roll = document.querySelector('#roll')
const numRollsD20 = document.querySelector('#number-of-rolls-D20')
const rollD20 = document.querySelector('#roll-D20')

const total = document.querySelector('#sum-of-rolls')
const showAll = document.querySelector('#show-all-rolls')
const allRolls = document.querySelector('#all-rolls')
let totalRolls = 0
let dieRolls = []
let reset = document.querySelector('#reset')


roll.addEventListener('click', function() {

    i = 0
    while (i < numRolls.value) {

        let randomRoll = Math.floor(Math.random() * 6) + 1;
        totalRolls += randomRoll

        console.log(randomRoll)
        i++;

        dieRolls.push(randomRoll)
    }
    total.innerText = "Sum of all rolls is " + totalRolls

    console.log(dieRolls)
})
rollD20.addEventListener('click', function() {

        i = 0
        while (i < numRollsD20.value) {

            let randomRollD20 = Math.floor(Math.random() * 20) + 1;
            totalRolls += randomRollD20

            //console.log(randomRollD20)
            i++;

            dieRolls.push(randomRollD20)
        }
        total.innerText = "Sum of all rolls is " + totalRolls

        console.log(dieRolls)
    })
    //for each dieroll create a new list item and add it to innerHtml of all rolls
showAll.addEventListener('click', function() {
    let i = 0
    while (i < dieRolls.length) {
        //let newList = document.createElement('li')
        //newList.innerHTML = dieRolls[i]
        //allRolls.appendChild(newList)
        allRolls.innerHTML += "<li>" + dieRolls.pop([i]) + "</li>"
        i += 1
            // console.log(allRolls)
    }

})

reset.addEventListener('click', function() {
    numRolls.value = ""
    total.innerHTML = ""
    allRolls.innerHTML = ""
    dieRolls = ['']
    numRollsD20.value = ""
    totalRolls = 0

})
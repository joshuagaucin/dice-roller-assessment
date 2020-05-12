const form = document.querySelector('#roll-input')
const numRolls = document.querySelector('#number-of-rolls')
const roll = document.querySelector('#roll')
const total = document.querySelector('#sum-of-rolls')
const showTotal = document.querySelector('#show-all-rolls')
const allRolls = document.querySelector('#all-rolls')

let dieRolls = []
roll.addEventListener('click', function() {

    i = 0
    while (i < numRolls.innerText) {
        total.innerHTML = Math.floor(Math.random() * 6 + 1);
        i++;
    }
})
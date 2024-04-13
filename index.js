// Dice Logic


const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1

}

button = document.getElementById('rollbtn')
button.addEventListener('click', () => {

    const hint = document.getElementById('hint')
    const die1 = rollDie()
    const die2 = rollDie()
    console.log(die1, die2)
    const displayDice = () => {

        const diceImages = {
            1: 'dice-1',
            2: 'dice-2',
            3: 'dice-3',
            4: 'dice-4',
            5: 'dice-5',
            6: 'dice-6',
        }

        const setDiceImg = (die, imgId) => {
            document.getElementById(imgId).src = `images/${diceImages[die]}.png`
        }

        setDiceImg(die1, 'dice-1')
        setDiceImg(die2, 'dice-2')

        hint.innerHTML = '‎'
    }

    const timer = setTimeout(displayDice, 3400)
    // buttonResetTimer prevents button spam or clicking too early after rolling which causes audio to not play
    const buttonResetTimer = setTimeout(() => {
        button.disabled = false
        hint.innerHTML = 'Click the button to roll again...'
    }, 4500)
    const rollSound = document.getElementById('rollsound')

    button.disabled = true
    hint.innerHTML = 'Rolling...'
    document.getElementById("dice-1").src = 'images/dice-outline.jpg'
    document.getElementById("dice-2").src = 'images/dice-outline.jpg'
    rollSound.play()

})

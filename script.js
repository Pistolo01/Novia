const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

let messages = [
    '¿Elda Elda?',
    'Tiene que decir que si',
    'Pille el otro boton',
    'No le siga dando que no',
    'Si dice que no me mato',
    'Cuando venga la invito a moñongo',
]

buttonNo.addEventListener('click', () => {
    fontSize = fontSize + 1
    buttonYes.style.fontSize = `${fontSize}rem`

    const indexRandom = Math.floor(Math.random() * messages.length)
    buttonNo.textContent = messages[indexRandom]

})

buttonYes.addEventListener('click', () => {
    document.querySelector('#message').style.display = 'flex'
})
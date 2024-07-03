

// spreekt button sleep aan
let slaapknop = document.querySelector('#gaslapen')

let skateboardButton = document.querySelector('#skateboarden')

let omkledenknop = document.querySelector('#veranderoutfit')

let shirtisblauw = true

let kleinetekst = document.querySelector('#hint')

function slapen() {
    // Binnen de functie wordt de afbeelding aangepast van normaal naar slapen.gif
    let slaapimg = document.querySelector('#normaal')
    slaapimg.src = "plaatjes/slapen.gif"

    // Geluidseffect afspelen (bron: https://gomakethings.com/how-to-play-a-sound-with-javascript/)
    let sleepSound = document.querySelector('#sleepSound')
    sleepSound.play()

    kleinetekst.textContent = "Zzz... Ik val in slaap."
    setTimeout(hideHint, 3000)
}

function spelen() {
    let skateboardimg = document.querySelector('#normaal')
    skateboardimg.src = "plaatjes/pochacco_skate_blue.gif"

    let skateboardSound = document.querySelector('#skateboardSound')
    skateboardSound.play()

    kleinetekst.textContent = "yayyyy"
    setTimeout(hideHint, 3000)
}
function veranderoutfit() {
    let shirtimg = document.querySelector('#normaal')
    if (shirtisblauw == false) {
        shirtimg.src = "plaatjes/normalgreen.png"
        shirtisblauw = true
    } else {
        shirtimg.src = "plaatjes/normalblue.png"
        shirtisblauw = false
    }
}
function hideHint() {
    kleinetekst.textContent = ""
}

slaapknop.addEventListener('click', slapen)

skateboardButton.addEventListener('click', spelen)

omkledenknop.addEventListener('click', veranderoutfit)

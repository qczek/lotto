const yourNumber = [];
const numbers = []
const showNumbers = document.querySelector('.yourNum');
let win = document.querySelector('.win')
const game = {
    stawka: 2,
    coins: 100,
    val3: 1,
    val4: 100,
    val5: 5000,
    val6: 2000000
}
const saldo = document.querySelector('.val');
saldo.textContent = game.coins
const stawka = document.querySelector('.stawka').textContent = game.stawka;


for (let i = 1; i < 51; i++) {
    let pole = document.createElement('div');
    document.body.querySelector('.pole').appendChild(pole)
    pole.classList = 'num'
    pole.textContent += i
    pole.dataset.id = i

}


function losuj() {

    do {
        let flague = null
        const newNum = Math.floor(Math.random() * 49 + 1);
        if (numbers.includes(newNum)) {
            flague = false;
        } else {
            flague = true
            parseInt(newNum)
            numbers.push(newNum)

        }
    } while (numbers.length < 6)

    return numbers
}

const tab = losuj()
const yourPick = document.querySelectorAll('div .num');
let status = true;

function pickNumbers() {

    let parsenumb = this.dataset.id

    parsenumb = parseInt(parsenumb)
    if (yourNumber.length < 6) {
        if (yourNumber.includes(parsenumb)) {

            alert('już instnieje')

        } else {

            yourNumber.push(parsenumb);



            this.style.background = "yellow";
            showNumbers.textContent = yourNumber.sort();



        }

    } else { alert('wybrano już 6liczb') }
    console.log(numbers)
}

function checkResult() {

    let score = 0;
    const bad = []
    if (yourNumber.length < 6) {
        alert('nie wybrałeś 6 liczb')
        return
    } else if (status == false) {
        return alert('musisz rozpocząć nową grę')

    }


    for (i = 0; i < yourNumber.length; i++) {

        if (numbers.includes(yourNumber[i])) {

            console.log(`${yourNumber[i]} trafiona`)
            document.querySelector(`[data-id ="${yourNumber[i]}"]`).style.border = "3px solid green";
            score++;



        }

    }


    document.querySelector('.hit').textContent = `ilość trafionych liczb :  ${score}`
    document.querySelector('.roll').textContent = `Wylosowane liczby to :  ${numbers}`
    switch (score) {
        case 3:
            game.coins = game.coins + (game.stawka * game.val3)
            win.textContent = `Wygrana ${game.stawka * game.val3} zł`
            break;
        case 4:
            game.coins = game.coins + (game.stawka * game.val4)
            win.textContent = `Wygrana ${game.stawka * game.val4} zł`
            break;
        case 5:
            game.coins = game.coins + (game.stawka * game.val5)
            win.textContent = `Wygrana ${game.stawka * game.val5} zł`
            break;
        case 6:
            game.coins = game.coins + (game.stawka * game.val6)
            win.textContent = `Wygrana ${game.stawka * game.val6} zł`
            break;
        default:
            win.textContent = `Wygrana : 0`;

            break
    }

    game.coins -= game.stawka
    saldo.textContent = game.coins
    status = false

}
function newGame() {
    numbers.length = 0;
    losuj()
    for (let i = 0; i < yourNumber.length; i++) {
        document.querySelector(`[data-id = "${yourNumber[i]}"]`).style.background = "white";
        document.querySelector(`[data-id = "${yourNumber[i]}"]`).style.border = "1px solid black";
        document.querySelector('.roll').textContent = `Wylosowane liczby to: `;

    }
    yourNumber.length = 0
    showNumbers.textContent = ""
    document.querySelector('.hit').textContent = "";
    win.textContent = ""
    status = true;


}
yourPick.forEach(numb => numb.addEventListener('click', pickNumbers))
document.querySelector('.los').addEventListener('click', checkResult)
document.querySelector('.newGame').addEventListener('click', newGame)
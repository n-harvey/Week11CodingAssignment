var turn = 1
var counter = 0
var winner = false

function start(){

$('td').on('click', function(){
    place(this)
})

}

start()

function place(box){
    if(box.innerText === ''){
        if(playerTurn() === 1){
            box.textContent = 'X'
        }
        else{
            box.textContent = 'O'
            box.classList.add('text-danger')
        }
        counter++
        console.log('place(box) finished running running check winner')
        checkWinner()
    }
    else{
        box.setAttribute('id', 'invalid')
        setTimeout(() =>{
            box.removeAttribute('id')
        }, 100)
    }
}

function playerTurn(){
    if(turn === 1){
        turn++
        $('.alert').text('Player 2 Turn')
        $('.alert').removeClass('alert-dark')
        $('.alert').addClass('alert-danger')
        console.log('playerTurn finished running')
        return 1
    }
    else{
        turn--
        $('.alert').text('Player 1 Turn')
        $('.alert').addClass('alert-dark')
        $('.alert').removeClass('alert-danger')
        console.log('playerTurn finished running')
        return 2
    }
};

function checkWinner(){

    let box = $('td')
    if(winner != true){
        if(box[0].textContent.concat(box[1].textContent, box[2].textContent) === 'XXX' || box[0].textContent.concat(box[1].textContent, box[2].textContent) === 'OOO'){
            box[0].setAttribute('id', 'winner')
            box[1].setAttribute('id', 'winner')
            box[2].setAttribute('id', 'winner')
            winner = true
        }
        else if(box[3].textContent.concat(box[4].textContent, box[5].textContent) === 'XXX' || box[3].textContent.concat(box[4].textContent, box[5].textContent) === 'OOO'){
            box[3].setAttribute('id', 'winner')
            box[4].setAttribute('id', 'winner')
            box[5].setAttribute('id', 'winner')
            winner = true
        }
        else if(box[6].textContent.concat(box[7].textContent, box[8].textContent) === 'XXX' || box[6].textContent.concat(box[7].textContent, box[8].textContent) === 'OOO'){
            box[6].setAttribute('id', 'winner')
            box[7].setAttribute('id', 'winner')
            box[8].setAttribute('id', 'winner')
            winner = true
        }
        else if(box[0].textContent.concat(box[3].textContent, box[6].textContent) === 'XXX' || box[0].textContent.concat(box[3].textContent, box[6].textContent) === 'OOO'){
            box[0].setAttribute('id', 'winner')
            box[3].setAttribute('id', 'winner')
            box[6].setAttribute('id', 'winner')
            winner = true
        }
        else if(box[1].textContent.concat(box[4].textContent, box[7].textContent) === 'XXX' || box[1].textContent.concat(box[4].textContent, box[7].textContent) === 'OOO'){
            box[1].setAttribute('id', 'winner')
            box[4].setAttribute('id', 'winner')
            box[7].setAttribute('id', 'winner')
            winner = true
        }
        else if(box[2].textContent.concat(box[5].textContent, box[8].textContent) === 'XXX' || box[2].textContent.concat(box[5].textContent, box[8].textContent) === 'OOO'){
            box[2].setAttribute('id', 'winner')
            box[5].setAttribute('id', 'winner')
            box[8].setAttribute('id', 'winner')
            winner = true
        }
        else if(box[0].textContent.concat(box[4].textContent, box[8].textContent) === 'XXX' || box[0].textContent.concat(box[4].textContent, box[8].textContent) === 'OOO'){
            box[0].setAttribute('id', 'winner')
            box[4].setAttribute('id', 'winner')
            box[8].setAttribute('id', 'winner')
            winner = true
        }
        else if(box[2].textContent.concat(box[4].textContent, box[6].textContent) === 'XXX' || box[2].textContent.concat(box[4].textContent, box[6].textContent) === 'OOO'){
            box[2].setAttribute('id', 'winner')
            box[4].setAttribute('id', 'winner')
            box[6].setAttribute('id', 'winner')
            winner = true
        }
    }
    if (counter === 9 || winner === true){
        $('.alert').removeClass('alert-danger')
        $('.alert').removeClass('alert-dark')
        if(counter === 9 && winner === false){
            console.log('counter is 9 and winner is false')
            $('.alert').addClass('alert-info')
            $('.alert').text('Tie Game!')
        }
        else{
            if(turn === 1){
                $('.alert').text('Player 2 Wins!')
                $('.alert').addClass('alert-success')
            }
            else{
                $('.alert').text('Player 1 Wins!')
                $('.alert').addClass('alert-success')
            }
        }
        $('td').off()
        $('button').removeClass('d-none')
    }
    console.log('checkWinner finished running')
}

function reset(){
    console.log('reset function being ran')
    $('td').each(function() {
        this.innerText = ''
        this.setAttribute('id', '')
        this.classList.remove('text-danger')
    }
    )
    turn = 1
    counter = 0
    winner = false
    $('.player').text('Player 1 Turn')
    $('button').addClass('d-none')
    $('.alert').addClass('alert-dark')
    $('.alert').removeClass('alert-danger')
    $('.alert').removeClass('alert-success')
    $('.alert').removeClass('alert-info')
    start()
}

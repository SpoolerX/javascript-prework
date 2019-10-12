let playerScore = 0;
let computerScore = 0;
function playGame(playerInput){
  clearMessages();
  function getMoveName(argMoveId){
    console.log('getMoveName z argumentem:',argMoveId);
    if(argMoveId == 1){
      return 'kamień';
    }
    else if(argMoveId == 2){
      return 'papier';
    }
    else {
      return 'nożyce'
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

  function displayResult(argComputerMove, argPlayerMove) {
    console.log('displayResult z argumentami:',argComputerMove,argPlayerMove);
  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
      ++playerScore;
    }
    else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
        ++playerScore;
    }
    else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      printMessage('Ty wygrywasz!');
      ++playerScore;
  }
    else if(argComputerMove ==  argPlayerMove  ){
      printMessage('Remis');
    }
    else if (argPlayerMove == 'nieznany ruch' ){
      printMessage('Podaj wynik buraku');
    }
    else {
      printMessage('Przegrałeś!');
      ++computerScore;
    }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName(randomNumber);
  let playerMove = getMoveName(playerInput);

displayResult(computerMove,playerMove);
printMessage('Komputer: '+computerScore+' Gracz:'+playerScore)

}
document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});





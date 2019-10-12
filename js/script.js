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
    }
    else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    }
    else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      printMessage('Ty wygrywasz!');
  }
    else if(argComputerMove ==  argPlayerMove  ){
      printMessage('Remis');
    }
    else if (argPlayerMove == 'nieznany ruch' ){
      printMessage('Podaj wynik buraku');
    }
    else {
      printMessage('Przegrałeś!');
    }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName(randomNumber);
  let playerMove = getMoveName(playerInput);

displayResult(computerMove,playerMove);
}
document.getElementById('play-rock').addEventListener('click', function(){
  printMessage(playGame(1));
});
document.getElementById('play-paper').addEventListener('click', function(){
  printMessage(playGame(2));
});
document.getElementById('play-scissors').addEventListener('click', function(){
  printMessage(playGame(3));
});
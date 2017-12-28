var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() { playerPick('Kamień') });
pickPaper.addEventListener('click', function() { playerPick('Papier') });
pickScissors.addEventListener('click', function() { playerPick('Nożyce') });

var gameState = 'notStarted',
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

var newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');

function setGameElements() {
  	switch(gameState) {
    	case 'started':
        	newGameElem.style.display = 'none';
        	pickElem.style.display = 'block';
        	resultsElem.style.display = 'block';
      	break;

    	case 'ended':
        	newGameBtn.innerText = 'Zagraj jeszcze raz!';
        	newGameElem.style.display = 'block';
        	pickElem.style.display = 'none';
        	resultsElem.style.display = 'none';
        	break;
    	case 'notStarted':
    	default:
        	newGameElem.style.display = 'block';
        	pickElem.style.display = 'none';
        	resultsElem.style.display = 'none';
  }
}

setGameElements();

var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

function newGame() {
  	player.name = prompt('Please enter your name', 'imię gracza');
  		if (player.name) {
    		player.score = computer.score = 0;
    		gameState = 'started';
    		setGameElements();

    		playerNameElem.innerHTML = player.name;
    setGamePoints();
  }
}

function getComputerPick() {
    var possiblePicks = ['Kamień', 'Papier', 'Nożyce'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

function playerPick(playerPick) {
    var computerPick = getComputerPick();
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
}
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}


function checkRoundWinner(playerPick, computerPick) {
  	playerResultElem.innerHTML = computerResultElem.innerHTML = '';

 	var winnerIs = 'player';
    if (playerPick == computerPick) {
        winnerIs = 'noone';
    } else if (
       	(computerPick == 'Kamień' &&  playerPick == 'Nożyce') ||
        (computerPick == 'Nożyce' &&  playerPick == 'Papier') ||
        (computerPick == 'Papier' &&  playerPick == 'Kamień')) {
        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Wygrana";
        player.score++;
        setGamePoints();
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Wygrana";
        computer.score++;
        setGamePoints();
    }
}

function wygrana() {
	alert("Gratulacje! Wygrałeś!");
		newGameBtn.innerText = 'Jeszcze raz!';
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
}

function przegrana() {
	alert("Niestety przegrałeś");
		newGameBtn.innerText = 'Jeszcze raz!';
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
}

function sprawdzCzyWygrales() {
	if (player.score == 5) {
		playerPointsElem.innerHTML == "5";
		setTimeout(wygrana(), 1000);
		
	} else if (computer.score == 5) {
		computerPointsElem.innerHTML == "5";
		setTimeout(przegrana(), 1000);
	}
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();
    checkRoundWinner(playerPick, computerPick);
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    sprawdzCzyWygrales();
}




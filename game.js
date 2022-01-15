let dino = document.querySelector('.dino');
let obstacle = document.querySelector('.obstacle');
let score = document.querySelector('.score');
let ground = document.querySelector('.ground');
let playerScore = 0;
let scoreRun;
let scoreCount = function(){
	playerScore ++;
	score.innerHTML = `Score: <b>${playerScore}</b>`;
	if(playerScore == 20){
		document.querySelector('.container').classList.add('container-1');
		obstacle.classList.add('obs-1')
	}
}
window.addEventListener("keydown",function(key){
	if(key.code == 'Enter'){
		ground.classList.add("groundRun");
		obstacle.classList.add("obs");
		scoreRun = setInterval(scoreCount,300);	
		document.querySelector('.lose').style.display = 'none';
		document.querySelector('.cloud').style.visibility = 'visible';
	}
})
window.addEventListener("keydown",function(play){
	if(play.code == "Space"){		
		if(dino.classList != "dinoJump"){
			dino.classList.add("dinoJump");
			setTimeout(function(){
				dino.classList.remove("dinoJump");
			},450);
			
		}
	}
})

let lose  = setInterval(function(){
	let bot = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
	// console.log(bot)
	let left = parseInt(getComputedStyle(obstacle).getPropertyValue("left"));
	// console.log(left)
	if( bot <= 90  && left <= 65 && left >= 20){
		console.log("Game over");
		obstacle.classList.remove("obs");
		document.querySelector('.container').classList.remove('container-1');
		obstacle.classList.remove('obs-1')
		ground.classList.remove("groundRun");
		document.querySelector('.lose').style.display = 'block';
		document.querySelector('.cloud').style.visibility = 'hidden';
		document.querySelector('.result').innerHTML = `Result: ${playerScore}`;
		clearInterval(scoreRun);
		playerScore = 00;
		score.innerHTML = `Score : <b>${playerScore}</b>`;
		
		return;
	}
},20)


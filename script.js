const shi = document.getElementById('shi');
const fu = document.getElementById('fu');
const mi = document.getElementById('mi');
const player = document.getElementById('player');
const ia = document.getElementById('ia');
const command = document.getElementById('command');
const scorePlayer = document.getElementById('score-player');
const scoreIA = document.getElementById('score-ia');
const score = document.querySelector('.score');
const restart = document.getElementById('restart');

shi.addEventListener('click', () => play('shi'));
fu.addEventListener('click', () => play('fu'));
mi.addEventListener('click', () => play('mi'));

function play(playerChoix) {
    // mon code ici
    reset_animation();
    player.src = "img/" + playerChoix + ".png";
    player.classList.add("translate-left");
    const choix=['shi', 'fu', 'mi'];
    const index = Math.floor(Math.random()*choix.length);
    const selected = choix[index];
    console.log(selected);
    

    ia.src='img/' + selected + '.png';
    ia.classList.add("translate-right");
    ia.addEventListener('click', () => {
})

  let  currentPlayerScore = parseInt(scorePlayer.textContent);
  let currentIaScore = parseInt(scoreIA.textContent);

if ((playerChoix == 'shi' && selected == 'fu') 
|| (playerChoix == 'fu' && selected == 'mi') 
|| (playerChoix == 'mi' && selected == 'shi')) {
    console.log('j\'ai gagné');
    currentPlayerScore++;
    
    

} else if ((playerChoix == 'shi' && selected == 'mi') 
|| (playerChoix == 'fu' && selected == 'shi') 
|| (playerChoix == 'mi' && selected == 'fu')){
    console.log('j\'ai perdu');
    currentIaScore++;

} else if (playerChoix ==  selected) {
    console.log('égalité');
    currentPlayerScore++;
    currentIaScore++;

}

scoreIA.textContent = currentIaScore;
    scorePlayer.textContent = currentPlayerScore;
    
     if (currentIaScore == 3 || currentPlayerScore == 3) {
         command.classList.add('hidden');
         const messageElt = document.createElement('h3')
    
     if (currentIaScore == currentPlayerScore ) {
         messageElt.textContent = "Match nul";

     } else if (currentPlayerScore > currentIaScore) {

         messageElt.textContent = "Vous avez gagné";
     } else {
         messageElt.textContent = "Vous avez perdu";
     }
     score.insertAdjacentElement('afterend', messageElt);

     restart.classList.remove('hidden');
     
     restart.addEventListener('click', () => {
        restart.classList.add('hidden');
        command.classList.remove('hidden');
        scoreIA.textContent = 0;
        scorePlayer.textContent = 0;
        messageElt.remove();
     }), {once: true};

}
}

// if ((currentPlayerScore == 3) || (currentIaScore == 3)) {
//     command.classList.add("hidden");
//     const messageElt = document.createElement('h3');
//     if (currentPlayerScore == currentIaScore) {
//         messageElt.textContent = "Match Nul !";
//     } else if (currentPlayerScore > currentIaScore) {
//         messageElt.textContent = "Vous avez gangné !";
//     } else {
//         messageElt.textContent = "Vous avez perdu !";
//     }
//     score.insertAdjacentElement('afterend', messageElt);
// }


// shi.addEventListener('click', () => {    
//     reset_animation ();

//     console.log('shi')
//     player.src = "img/shi.png";
//     player.classList.add("translate-left");
//     const choix=['shi', 'fu', 'mi'];
//     const index = Math.floor(Math.random()*choix.length);
//     const selected = choix[index];
//     console.log(selected);
    


//     ia.src='img/' + selected + '.png';
//     ia.classList.add("translate-right");
//     ia.addEventListener('click', () => {
        
//     })
// });
// fu.addEventListener('click', () =>  {    
//     reset_animation();

//     console.log('fu')
//     player.src = "img/fu.png";
//     player.classList.add("translate-left");
//     const choix=['shi', 'fu', 'mi'];
//     const index = Math.floor(Math.random()*choix.length);
//     const selected = choix[index];
//     console.log(selected);
    


//     ia.src='img/' + selected + '.png';
//     ia.classList.add("translate-right");
//     ia.addEventListener('click', () => {
        
//     })
// });
// mi.addEventListener('click', () => {    
//     reset_animation();
   
//     console.log('mi')
//     player.src = "img/mi.png";
//     player.classList.add("translate-left");
//     const choix=['shi', 'fu', 'mi'];
//     const index = Math.floor(Math.random()*choix.length);
//     const selected = choix[index];
//     console.log(selected);


    
//     ia.src='img/' + selected + '.png';
//     ia.classList.add("translate-right");
//     ia.addEventListener('click', () => {
        
//     })
// });

function reset_animation () {
    ia.classList.remove('translate-left');
    ia.style.animation = 'none';
    ia.offsetHeight; /* trigger reflow */
    ia.style.animation = null; 
    player.classList.remove('translate-right');
    player.style.animation = 'none';
    player.offsetHeight; /* trigger reflow */
    player.style.animation = null; 
}




let words = [["Apple", "fruit, mostly green, sweet and sour taste"], ["lemon", "fruit, yellow color, sour taste"], ["mango", "fruit, mostly orange, sweet taste"], ["watermelon", "berry, green outside and red inside, sweet and juicy"]];



function startGame() {
    let randomWord = Math.floor(Math.random() * words.length);
    alert(words[randomWord][1]);
    let askAnswer = prompt("Guess the word from the hint");
    if (askAnswer === words[randomWord][0] ) {
        alert(`Right, its ${words[randomWord][0]}`);
    } else {
        alert("Wrong word!");
    }
}

startGame(words);

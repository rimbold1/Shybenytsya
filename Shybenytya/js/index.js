
let wordsArr = ["bread", "gamepad", "fish", "dog", "powerbank", "smartphone", "book", "elephant", "boat", "window", "javascript"];
let word = wordsArr[Math.floor(Math.random() * wordsArr.length)]; // random word chosen from array of words.
// console.log(word)

let answerArray = []; // Цей масив заповнюється символом нижнього підкреслення рівно на стільки, скільки в загаданого слова букв.
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = word.length; // кількість букв в загаданому слові.

while (remainingLetters > 0) {
    alert(answerArray.join(" "));

    let guess = prompt("Загадайде літеру, або натисніть cancel щоб зупинит гру.");

    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Будь-ласка введіть не більше 1 літери.")
    } else {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }  
        }
    }
}

alert(answerArray.join(" "));
alert("Хороша робота! Відповідь була " + word);
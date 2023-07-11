
let wordsArr = [["bread", "Food. Made from grain"], 
["gamepad", "Controll gadget for playing games."], 
["fish", "Animal. Loves water."], 
["dog", "Animal. Humans best friend"], 
["powerbank", "Thing that allow you to charge your smartphone."], 
["smartphone", "A thing that we use very often and carry it with us."], 
["book", "Paper media."], ["elephant", "Animal with large ears."], 
["boat", "Floating transport"], 
["window", "glassed barrier between house and outdoors"], 
["javascript", "a programming language"]];
let word = wordsArr[Math.floor(Math.random() * wordsArr.length)]; // random word chosen from array of words.

let answerArray = []; // Цей масив заповнюється символом нижнього підкреслення рівно на стільки, скільки в загаданого слова букв.
for (let i = 0; i < word[0].length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = word[0].length; // кількість букв в загаданому слові.
let attempts = 5;

while (remainingLetters > 0) {
    alert(`${answerArray.join(" ")} ${word[1]} кількість спроб: ${attempts}`);

    let guess = prompt("Загадайде літеру, або натисніть cancel щоб зупинит гру.");

    if (guess === null || guess === "") {
        alert("Гру припинено.");
        break;
    } else if (guess.length !== 1) {
        alert("Будь-ласка введіть не більше 1 літери.");
    } else {
        for (let j = 0; j < word[0].length; j++) {
            if (word[0][j] === guess.toLowerCase()) {
                answerArray[j] = guess.toLowerCase();
                remainingLetters--;
            }
        }
    }
}

if (answerArray.join("") === word[0]) {
    alert(answerArray.join(" "));
    alert("Хороша робота! Відповідь була " + word[0]);
}

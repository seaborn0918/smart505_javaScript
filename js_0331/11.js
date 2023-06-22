lotto = [];

for (let i = 0; i < 6; i++) {
    let number = Math.floor(Math.random() * 45) + 1;
    lotto.push(number);
    for (let j = 0; j < i; j++) {
        if (lotto[i] == lotto[j]) {
            lotto.pop();
            i--;
            break;
        }
    }
}

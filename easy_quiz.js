function longest_word(senetense) {
    var regex = new RegExp('[^A-Za-z\-]');
    var list_of_word = senetense.split(' ');
    var longest = '';
    list_of_word.forEach(word => {
        var raw_word = word.split(regex);
        var filtered_word = raw_word.filter(element => {
            return element != '';
        });
        filtered_word.forEach(w => {
            if (longest.length < w.length) {
                longest = w
            }
        });
    }); 
    return longest;
}

function sum_of_number(senetense) {
    var regex = new RegExp('[^0-9]');
    var total = 0;
    var raw_word = senetense.split(regex);
    var filtered_word = raw_word.filter(element => {
        return element != '';
    });
    filtered_word.forEach(w => {
       total += parseInt(w);
    });
    return total;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// readline.on('line', (input) => {
//     console.log(`Received: ${input}`);
// });

readline.question(`Welcome to simple-string-parsing-problem\nWhich option do you want?\n1 Longest String\n2 Sum number in sentense\n`, (choice) => {
    switch (choice) {
        case `1`:
            readline.question(`Please give me a sentense: `, (senetense) => {
                const longest = longest_word(senetense);
                console.log(`The longest word is ${longest}`);
                readline.close();
            });
            break;
        case `2`:
            readline.question(`Please give me a sentense: `, (senetense) => {
                const total = sum_of_number(senetense);
                console.log(`The sum of number is ${total}`);
                readline.close();
            });
            break;
        default:
            console.log('Invalid choice please try again later.')
            readline.close();
    }
});

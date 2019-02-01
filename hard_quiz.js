function sum_of_number(senetense, pattern) {
    var regex = new RegExp(`(${pattern})`);
    var matched_index = senetense.match(regex);
    var raw_word = senetense.split(regex);
    var counter = 0;
    var filtered_word = raw_word.filter(element => {
        return element != '';
    });
    filtered_word.forEach(w => {
        if (regex.test(w)) {
            counter += 1
        }
    });
    return { 
        counter: counter,
        index: (matched_index) ? matched_index.index : null
    };
}

function validate_proteins(pattern) {
    var regex = new RegExp('[^ACTG]');
    if (pattern.match(regex)) {
        return false;
    }
    return true;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`Prompt your Tandem Repeat pattern [hint: minimum length is 3 and maximum length is 10]:`, (pattern) => {
    if (pattern.length < 3 | pattern.length > 10 | !validate_proteins(pattern)) {
        console.log('Invalid pattern please try agian.');
        readline.close()
    } else {
        readline.question(`Please give me a Tandem Repeat: `, (senetense) => {
            const { counter, index } = sum_of_number(senetense, pattern);
            const result = `{${index}-${pattern}: ${counter}}`;
            console.log(result);
            readline.close();
        });
    }
});



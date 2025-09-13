console.log('problem solving question!')

function repetation(text) {
    text = text.split("");
    const uniqueV = new Set(text);
    let counter = 0;
    for (const letter of uniqueV) {
        if (text.includes(letter))
            counter++;
    }
    console.log(counter)
    return counter;
}

repetation('AAAABBBCCD')
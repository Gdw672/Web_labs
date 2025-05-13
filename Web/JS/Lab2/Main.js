function sumOfDigits(number) {
    return number
        .toString()
        .split('')
        .reduce((sum, digit) => sum + Number(digit), 0);
}

function combineChars(char1, char2, char3) {
    const result = char1 + char2 + char3;
    console.log(result);
}

function describeTown(townName, population, area) {
    console.log(`Town ${townName} has population of ${population} and area ${area} square km.`);
}

function calculator(num1, operator, num2) {
    let result;

    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    } else {
        console.log('Некорректный оператор');
        return;
    }

    console.log(result.toFixed(2));
}

function binaryToDecimal(binaryStr) {
    const decimal = parseInt(binaryStr, 2);
    console.log(decimal);
}

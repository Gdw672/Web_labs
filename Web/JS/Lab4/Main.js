function Min(a, b, c) {
    let min = a;
    if (b < min) min = b;
    if (c < min) min = c;
    return min;
}

function Substract (a, b, c) {
    let number = a + b - c;
     return number;
}

function printMatrix(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            row += n + ' ';
        }
        console.log(row.trim());
    }
}

function showProgressBar(progress) {
    if (progress % 10 !== 0 || progress < 0 || progress > 100) {
        console.log("Некорректное значение. Используйте числа от 0 до 100, кратные 10.");
        return;
    }

    const totalBlocks = 10;
    const filledBlocks = progress / 10;
    const emptyBlocks = totalBlocks - filledBlocks;

    const bar = "[" + "#".repeat(filledBlocks) + ".".repeat(emptyBlocks) + "]";

    console.log(bar + ` ${progress}%`);
}

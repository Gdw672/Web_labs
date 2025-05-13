function modifyArray(arr) {
    console.log("")
    const originalSum = arr.reduce((sum, num) => sum + num, 0);

    const newArr = arr.map((num, index) => {
        return num % 2 === 0 ? num + index : num - index;
    });

    const newSum = newArr.reduce((sum, num) => sum + num, 0);

    console.log("Новый массив:", newArr);
    console.log("Сумма исходного массива:", originalSum);
    console.log("Сумма измененного массива:", newSum);
}

function printCommonElements(arr1, arr2) {
    const set2 = new Set(arr2);

    const common = arr1.filter(item => set2.has(item));

    console.log("Общие элементы:", common.join(" "));
}

function rotateArray(arr, rotations) {
    const len = arr.length;
    if (len === 0) return arr;

    const actualRotations = rotations % len;

    const rotated = arr.slice(actualRotations).concat(arr.slice(0, actualRotations));

    console.log("Результат вращения:", rotated);
    return rotated;
}

function isMagicMatrix(matrix) {
    if (matrix.length === 0) return false;

    const rowCount = matrix.length;
    const colCount = matrix[0].length;

    const targetSum = matrix[0].reduce((sum, num) => sum + num, 0);

    for (let i = 0; i < rowCount; i++) {
        const rowSum = matrix[i].reduce((sum, num) => sum + num, 0);
        if (rowSum !== targetSum) {
            return false;
        }
    }

    for (let col = 0; col < colCount; col++) {
        let colSum = 0;
        for (let row = 0; row < rowCount; row++) {
            colSum += matrix[row][col];
        }
        if (colSum !== targetSum) {
            return false;
        }
    }

    return true;
}
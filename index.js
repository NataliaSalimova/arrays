// Задание 1

let array = [1, 20, 2, 19, 3, 18, 4, 17, 5, 16, 6, 15, 7, 14, 8, 13, 9, 12, 10, 11];
function getArray(array) {
    return array.filter(item => item > 8 && item % 3 === 0);
}

// Задание 2.

function getSum(array) {
    return array.reduce((sum, current) => sum + current, 0);
}

// Задание 3. переделать на sort

function sortArray(array) {
    return array.sort((a, b) => b - a);
}

// Задание 4

function getRandomIntInclusive() {
    const min = 1;
    const max = 50;
    const rand = min + Math.random() * (max + 1 - min);

    return Math.floor(rand);
}

function isContainsRandomValues(array) {
    const randomValue1 = getRandomIntInclusive();
    const randomValue2 = getRandomIntInclusive();

    return array.includes(randomValue1) && array.includes(randomValue2);
}

// Задание 5

function getMultiplyItemOfArray(array) {
    return array.map((item)=> item * 3)
}

// Задание 6.

function getTwoPrevAndTwoNextValues(array) {
    if (array.length < 5) return [];

    for (let i = 2; i < array.length - 2; i++) {
        if (array[i] % 2 === 0 && array[i] % 3 === 0) {
            const start = i - 2;
            const end = i + 3;

            let resultArray = array.slice(start, end);
            resultArray.splice(2 ,1);

            return resultArray;
        }
    }

    return [];
}
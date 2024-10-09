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

// Добавила проверку на равенство рандомных чисел

function isContainsRandomValues(array) {
    const randomValue1 = getRandomIntInclusive();
    const randomValue2 = getRandomIntInclusive();

    if (randomValue1 === randomValue2) {
        return array.includes(randomValue1);
    }

    return array.includes(randomValue1) && array.includes(randomValue2);
}

// Задание 5

function getMultiplyItemOfArray(array) {
    return array.map((item)=> item * 3)
}

// Задание 6.

// Изначально добавляла проверки, так как посчитала, что условие должно выполняться полностью (т.е. должен возвращаться
// массив из 4-х элементов). Передала.

function getTwoPrevAndTwoNextValues(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0 && array[i] % 3 === 0) {
            return array.slice(Math.max(i - 2, 0), i).concat(array.slice(i + 1, i + 3));
        }
    }
}

getTwoPrevAndTwoNextValues([7, 9, 18, 3, 4, 6, 9, 6, 5]);
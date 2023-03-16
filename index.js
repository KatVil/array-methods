const filterByAge = (el) => {
    return el.age < 50;
};

const filterByScore = (el) => {
    return el.score > 75;
};

const filterByServiceRecord = (el) => {
    return el.serviceRecord >= 5;
};

const sortByScore = (arr) => {
    let newArr = arr.slice();
    return newArr.sort(function (maxScore, minScore) {
        return minScore.score - maxScore.score;
    })
};

const getMeanAge = (arr) => {
    let sum = 0;
    for (let el of arr){
        sum += el.age;
    }
    return sum/arr.length;
};

const getMeanAgeReduce = (arr) => {
    let result = arr.reduce((acc, cur) => acc + cur.age, 0);
    return result / arr.length;
};

const getNamesOnly = (arr) => {
    return arr.name;
};

module.exports = {
filterByAge,
filterByScore,
filterByServiceRecord,
sortByScore,
getMeanAge,
getMeanAgeReduce,
getNamesOnly,
};

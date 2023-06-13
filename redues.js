const numbers = [10, 100, 20];

function sure(total, num) {
    return total + num;
}

document.getElementById("demo").innerHTML = numbers.reduce(sure);


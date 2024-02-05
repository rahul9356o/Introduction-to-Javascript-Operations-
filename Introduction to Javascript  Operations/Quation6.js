

function bodyMassIndex(weight, height) {

    height /= 100;

    return weight / (height * height);

}

const BMI = bodyMassIndex(50, 130);

console.log(BMI.toFixed(2));
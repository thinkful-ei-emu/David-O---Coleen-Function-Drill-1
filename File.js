function getYearOfBirth(age){
    let yearOfBirth = 2019 - age;
    return yearOfBirth;
}

function createGreeting(name, age){
    let yearOfBirth = getYearOfBirth(age);
    return `Hi, my name is ${name} and I am ${age} years old. I was born in ${yearOfBirth}.`;
}

createGreeting("Coleen", 26)
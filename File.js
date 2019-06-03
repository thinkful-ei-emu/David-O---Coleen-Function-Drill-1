function getYearOfBirth(age){
    let yearOfBirth = 2019 - age;
    return yearOfBirth;
}

function createGreeting(name, age){
  try{
    if (age <= -1){
      throw new Error("Age can not be negative");
    }
    if (name == undefined || age == undefined){
      throw new Error("Arguments not valid.");
    }
    if (name.typeof != "string" || age.typeof != "number" ){
      throw new Error("Input Types Not Valid");
    }

  }
  catch (e){
    return e.message;    
  }
    let yearOfBirth = getYearOfBirth(age);
    return `Hi, my name is ${name} and I am ${age} years old. I was born in ${yearOfBirth}.`;
}

createGreeting("Coleen", "ad" )

//same key value es5
// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

//to ES2015
function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }

  //computed property es5
// var favoriteNumber = 42;

// var myInstructor = {
//   firstName: "Colt"
// }

// myInstructor[favoriteNumber] = "That is my favorite!"

//to ES2015
let favoriteNumber = 42;

const myInstructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}

//object method ES5
// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName " + "says bye!";
//     }
//   }

//to ES2015
const instructor = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }

  //createAnimalFunc
const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"

function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}
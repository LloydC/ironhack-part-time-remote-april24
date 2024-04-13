// Objects Examples
let olympicRecords = {
    athletics100Men: 'Justin Gatlin',
    athleticsLongJumpMen: 'Mike Powel',
    swimming200Men: 'Michael Phelps',
    gymnasticMen: 'John Doe'
  };


olympicRecords.swimming400Men = 'Michael Phelps'; // Add the property to the object
// console.log('swimming400Men' in olympicRecords)
olympicRecords.athletics100Men = 'Usain Bolt';
console.log('olympicRecords', olympicRecords)

// typeof olympicRecords.gymnasticMen === 'undefined' --> property doesn't exist
// typeof olympicRecords.gymnasticMen === 'string' --> property does exist

console.log('typeof', typeof olympicRecords.gymnasticMen)

console.log('Object.keys(olympicRecords)', Object.keys(olympicRecords)); // returns an array of the keys for olympicRecords
console.log('Object.values(olympicRecords)', Object.values(olympicRecords)); // returns an array of values for olympicRecords

// Check if "Mike Powel" is within the list of athletes
// 1. Retrieve the list of athletes
const athletes = Object.values(olympicRecords) // --> ["..."]
// 2. Go through the list and check for the value "Mike Powel" to be there
const checkMikePowel = athletes.includes('Mike Powel')
console.log('Mike Powel is part of the list', checkMikePowel);

// Check if Usain Bolt is in the list
for(let key in olympicRecords) {
    // console.log(key); --> print all the keys in my object
    // console.log(olympicRecords[key]) // print all the values
    if(olympicRecords[key] === 'Usain Bolt'){
        console.log('Usain Bolt is part of the list :)')
    }
  }

  for(let athlete of athletes){
    console.log('athlete', athlete)
  }

  // Array examples

  const fruitOne = {
    fruitName: 'Mango',
    quantity: 6
  }

  const fruitTwo = {
    fruitName: 'Dragon fruit',
    quantity: 10
  }

  const fruitThree = {
    fruitName: 'Banana',
    quantity: 23
  }

  const fruitCart = [fruitOne, fruitTwo, fruitThree]
  console.log('fruitCart', fruitCart)
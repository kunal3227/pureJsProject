const name = "vishal"
const repoCount = 50

//console.log(name + repoCount);

console.log(`Hello my name is ${name} and my repocount is ${repoCount}.`);
const gameName = new String('MegaCraze')

// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.trim());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('C'));
console.log(gameName.toLowerCase());
const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-5,8)
console.log(anotherString);


const url = "https://anand.com%20kunal"
console.log(url.replace('%20','-'));
console.log(url.includes('kunal'));

console.log(gameName.split('a'));
console.log(gameName.normalize());

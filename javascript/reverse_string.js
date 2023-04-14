function reverseString(str) {
  // type your code here
  const reversedArray = [];
  if (str.length === 0 || str.length === 1) {
    return str;
  } else {
    for (let i = str.length - 1; i >= 0; i-- ) {
      reversedArray.push(str[i])
    }
  }
  return reversedArray.join("");
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
//takes an input of a string, starting from the last letter push each letter into a new string
// And a written explanation of your solution

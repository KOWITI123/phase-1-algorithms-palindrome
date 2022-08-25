function isPalindrome(word) {
  // Write your algorithm here
  const str = word.split("").reverse().join("");
  if(str=== word){
    return true
  }
  else {
    return false
  }
}

/* 
  Add your pseudocode here
*/
// function isPalindrome will our solution while the parametre will hold the string we are trying to test for

/*
  Add written explanation of your solution here
*/
//.split("")method will turn the string into an array, .reverse() will reverse the string, .join("") will convert the array back into a string

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(a) {
  const charsArray = ["a", "e", "i", "o", "u"];

  return a.reduce((acc, code) => {
    const chars = String.fromCharCode(code);
    if (charsArray.includes(chars)) {
      acc.push(chars);
    } else {
      acc.push(code);
    }

    return acc;
  }, []);
}

isVow([
  118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113, 120,
  106,
]);
isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]);

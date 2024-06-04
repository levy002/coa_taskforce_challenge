// Functionality for changing string chars to it's ASCII code
const changeCharToASCIICode = (string) => {
    return string.split('').map(char => char.charCodeAt(0)).join(' ');
};

// Functionality for reversing the string
const reverseString = (string) => {
  return string.split('').reverse().join('');
}

// Functionality for transforming the string depending to it's length
const stringTransform = (string) => {
    const stringLength = string.length;

  if(stringLength % 3 === 0 && stringLength % 5 === 0) {
    return changeCharToASCIICode(reverseString(string));
  } else if(stringLength % 3 === 0) {
    return reverseString(string);
  } else if(stringLength % 5 === 0){
    return changeCharToASCIICode(string);
  } else {
    return string;
  }
};

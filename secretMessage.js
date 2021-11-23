let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//Remove last element from array
secretMessage.pop();

//check length of the new array
console.log(secretMessage.length);

//Add to and program to the new array
secretMessage.push('to','Program');

//change the easily element to right
secretMessage[7]='right'

//remove element from the beginning of an array
secretMessage.shift()

//Add element Programming to the beginning of the array
secretMessage.unshift('Programming');

//array method to remove elements and add element
secretMessage.splice(6,5,'know,');

//print secret message with .join()
console.log(secretMessage.join(' '));
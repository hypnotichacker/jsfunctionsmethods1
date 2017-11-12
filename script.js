//Reverse String

function reverseString(str) {
  return str.split('').reverse().join('');

}

reverseString("hello");

//Factorizing a number


function factorialize(num) {
    var result = 1;
    for (var i=num; i >= 1; i--) {
    result *= i;
  }
   return result;
}

factorialize(5);

//Find largest word in a string

function findLongestWord(str) {
  strarr=str.split(' ');
  longestwordlength=0;
  for(var i=0; i<strarr.length; i++) {
    wordlen=strarr[i].length;
    if(wordlen>longestwordlength) {
      longestwordlength = wordlen;
    }
  }
  return longestwordlength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

//Title case a sentence


function titleCase(str) {
 array = str.split;

return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
 
}

titleCase("I'm a little tea pot");

//Return largest numbers in array

function largestOfFour(arr) {
  // You can do this!
var largestArray =[];
  for(var i=0; i<arr.length; i++) {
    var largestNumber=0;
      for(var j=0; j<arr.length; j++) {
        if (largestNumber<arr[i][j]) {
          largestNumber = arr[i][j];
        }
      }
    largestArray.push(largestNumber);
  }
    
  
  return largestArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//Confirm ending of string

unction confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var start = str.length-(target.length);
  if(str.substr(start,str.length) == target) {
     
  return true;
   }
  else {
    return false;
  }
}

confirmEnding("Bastian", "n");

//Repeat string


function repeatStringNumTimes(str, num) {
  // repeat after me
  var result;
  if (num > 0) {
   result = str.repeat(num);
    return result;
  }
  else {
  return "";
  }
}
repeatStringNumTimes("abc", 3);

//Mutations

function mutation(arr) {
  var word1 = arr[0].toLowerCase();
  var word2 = arr[1].toLowerCase();
  
  for (var i = 0; i < word2.length; i++) {
    var value = word1.indexOf(word2[i]);
    if (value === -1) {
      return false;
    }
   
  }
  return true;
}

mutation(["hello", "hey"]);

//Falsy remove

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
 return arr.filter(Boolean);
  
}

bouncer([7, "ate", "", false, 9]);

//Removes certain array elements

function destroyer(arr) {
  // Remove all the values
  var args = Array.from(arguments);
  //Array.from takes in arguments and turns them into one array
  
  //Below: 2 for loops iterating through different sections of args array
  for (var i = 0; i < args[0].length; i++) {
    for (var j =1; j < args.length; j++) {
  //during iterations through array sections, if loop discovers identical values between
  //array sections, those values will be deleted
      if (args[0][i] == args[j]) {
       delete args[0][i];
      }
      
    }
      
  }
  return args[0].filter(Boolean);
  //returns args in correct format by filtering out falsy values
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//Sum all numbers

function sumAll(arr) {
 
 var max = Math.max(arr[0], arr[1]);
 var min = Math.min(arr[0], arr[1]);
 var temp = 0;
  
 for (var i = min; i <= max; i++) {
   
 temp += i;
   
 }
  
 return temp;
}

sumAll([1, 4]);

//Missing letter function

function fearNotLetter(str) {
  
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  //create a string that stores the English alphabet
  alphabet=alphabet.split("");
  //split alphabet into letter character array
  str=str.split("");
  //split input string into a letter character array
  if(str[0]!='a') {
    return undefined;
  }
  //if our first letter is not an 'a' return undefined
  for (var i=0; i<str.length; i++) {
  
    if(str[i]!=alphabet[i]) {
      return alphabet[i];
   //if letters dont match for alphabet and string
   //return current alphabet letter
    }
  }
    
  return str;
  
}

fearNotLetter("abce");

//Array union function

unction uniteUnique(arr) {
  var placeholder = arr;
  //create duplicate array from original array
  for(var i=0; i<arguments.length; i++) {
  //iterates through the length of the arguments
  for(var j=0;j<arguments[i].length; j++){
    //iterates through current index value of the arguments
    if(placeholder.indexOf(arguments[i][j])===-1) {
      //check if array contains the value of arguments
      //returns -1 if it does not
      placeholder.push(arguments[i][j]);
      //add it to the end of placeholder array
    
      }
    
    }
  }
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//Convert HTML entities


function convertHTML(str) {
  // &colon;&rpar;
  //split string into character array
  var placeHolder = str.split("");
  //iterate through character array
  for(var i=0;i<placeHolder.length;i++) {
  //check current value of character
    switch(placeHolder[i]) {
  //if case is met replace with html entity
      case '&':
        placeHolder[i]='&amp;';
        break;
      case '<':
        placeHolder[i]='&lt;';
        break;
      case '>':
        placeHolder[i]='&gt;';
        break;
      case '"':
        placeHolder[i]='&quot;';
        break;
      case "'":
        placeHolder[i]='&apos;';
        break;
        
    }
  }
  //join char array back into string
  str=placeHolder.join("");
  
  return str;
}

convertHTML("Dolce & Gabbana");

//Return first element

function findElement(arr, func) {
  //filter through array adding only true values on on inputted function and setting to num
  var num = arr.filter(func);
  //checks if num has any true values
  if(num.length>1) {
  return num[0];
  }
  //returns undefined if entire array was false
  return undefined;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });








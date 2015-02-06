require('lambdajs').expose(global);
require('pointfree-fantasy').expose(global);
var _ = require('ramda')
var curry = _.curry
  

// Exercise 1
// split :: String -> String -> [String]
//==============

//+ words :: String -> [String]
var words = split(' ');

// Exercise 1a
// split :: String -> String -> [String]
//==============
//use map to make a new words fn that not only works on 1 string, but on an array of strings.
//+ words :: String -> [String]
//+ sentences :: [String] -> [[String]]
var sentences = _.map(words);

// var sentences = _.map(function(x){return words(x)})

// Exercise 2
// match :: Regex -> String -> Bool
//==============

//+ filterQs :: [String] -> [String]
var filterQs = filter(match(/q/i));

// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max

//+ _keepHighest :: Number -> Number -> Number
var _keepHighest = function(x,y){ return x >= y ? x : y; }; // <- leave be

//+ max :: [Number] -> Number
var max = reduce(_keepHighest, 0);


  // return reduce(function(acc, x){
  //   return _keepHighest(acc, x);
  // }, 0, xs);

  
// Bonus 1:
// ============
// wrap array's slice to be funcitonal and curried.
// //[1,2,3].slice(0, 2)
var slice = curry(function(ind1, ind2, array){
  return array.slice(ind1,ind2);
})


// Bonus 2:
// ============
// use slice to define a function "take" that takes n elements. make it's curried
var take = curry(function(ind2, array){
  return array.slice(0,ind2);
})

module.exports = { words: words,
                   sentences: sentences,
                   filterQs: filterQs,
                   max: max,
                   slice: slice,
                   take: take
                 } 

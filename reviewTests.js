//05 - Functions & Closure (functions.js)

/*// Given a function, return a new function will only run once, no matter how many times it's called
describe('once', function() {
  it('should only increment num one time', function() {
    var num = 0;
    var increment = once(function() {
      num++;
    });

    // run this function twice, but since it's a new function that's been modified by "once"
    // it will only run once and num won't be incremented again.
    increment();
    increment();
    increment();
    increment();

    expect(num).toEqual(1);
  });
});
*/

//Solution

function once(func){
    var toggle = 'off';
    return function(){
      if(toggle === 'off'){
        toggle = 'on'
        return func();
      }
    };
};

/******************************************************************************/
//05 - Functions & Closure (functions.js)

/*
#### Guest List Functions

The `guestListFns` function accepts two arguments:

- Guest List Array: This is the original guest list your superior gave you
- Secret Code: The secret code can be any JavaScript value

The `guestListFns` returns an array of functions.  Each function in the array
returned accepts a `Secret Code` as an argument.  When one of the functions in
the array is invoked with the proper secret code (the same code passed
to the `guestListFns`), it will return one of the guest's names in the original
Guest List Array.  The values in the functions can't be changed, so the guest names
can't be changed or manipulated from a corrupt individual! 



Example:

```javascript

var guestListFns = guestListFns(["Gabriel", "Ben", "Dan", "Griffin", "Cang", "Kate", "Chris"], 512);

var guest = guestListFns[1](512); // guest ==> "Guest-Ben";

*/

//Solution01
function guestListFns(gstListArr, code){
  var allGsts = [];

  for(var i = 0; i < gstListArr.length; i++){
    allGsts.push(function(j){
      return function(secretCode){
        if(secretCode === code){
          return gstListArr[j];
        } else {
          return 'Secret-Code: Invalid';
        }
      }
    }(i));
  }

  return allGsts;
}


//Solution02
function guestListFns(guests, secret){
  var result = [];
  var guest;

  var wrapper = function(secret, guest){
    return function(secretNum){
      if(secretNum === secret){
        return guest;
      } else {
        return 'Secret-Code: Invalid';
      }
    }
  };

  for(var i = 0; i < guests.length; i++){
    guest = guests[i];
    result.push(wrapper(secret, guest));
  };

  return result;
}

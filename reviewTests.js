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

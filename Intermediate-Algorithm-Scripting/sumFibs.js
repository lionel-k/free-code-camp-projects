/*

Sum All Odd Fibonacci Numbers


Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

As an example, passing 4 to the function; //should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.


*/


function sumFibs(num) {
  var a = 0, b = 1, f = 1;
  var sumOddFibs = f;
  for(var i = 2; f < num; i++) {
    f = a + b;
    a = b;
    b = f;
    if (((f % 2) !== 0) && (f <= num)) {
      sumOddFibs += f;
    }
  }
  console.log(sumOddFibs);
  return (sumOddFibs);
}


sumFibs(4); //should return 5
sumFibs(1); //should return a number.
sumFibs(1000); //should return 1785.
sumFibs(4000000); //should return 4613732.
sumFibs(4); //should return 5.
sumFibs(75024); //should return 60696.
sumFibs(75025); //should return 135721.



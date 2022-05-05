function area(l, w)  // exercise 1
{
    console.log(l  *  w);
}

area(3,4);



    function crazySum(a , b) // exercise 2
    {
        if (a == b)
         {
          return a+b
        }      
      else
      {
        return (a+b)*3;
      }
    }
      console.log(crazySum(3, 4));
       
      function crazyDiff(a)// exercise 3
      {

    if (a>19)
    {
        return (a-19)*3;
    }      
    else
    {
        let result = a-19
        if(result < 0) {

            result = result*-1
        }
        return result
    }

}
 console.log(crazyDiff(21), "crazyDiff");



 function boundary(x)// // exercise 4
{
if (x >= 20 && x <= 100 || x == 400)
    {
        return true;
    }      
else 
  {
    return false;
  }
}

  console.log(boundary(400));
  
  function  strivify(string) // exercise 5
  {
     if(string.toLowerCase().startsWith("strive"))
     {
        return string
     }
     else{
         return "Strive" + string
     } 
  }
  console.log(strivify("strivehello"));

  function check3and7(x) //exercise 6
  {
      if (x % 3 == 0 || x % 7 == 0) 
      {
        return true;
      } 
      else {
        return false;
      }
    }
    console.log(check3and7(12));

    function reverseString(str) {

        let result = '';
      
        for (let i = str.length - 1; i >= 0; i--) {
          result += str[i];
        }
        console.log(result)

        return result;
      }
      console.log(reverseString("hello world"))



    function capitalizeFirstLetter(string) { //exercise 8
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      
      console.log(capitalizeFirstLetter('foo'));



      function without_first_end(str) {//exercise 9
        return str.substring(1, str.length - 1);
      }
      console.log(without_first_end('sreeweta'));


      const giveMeRandom = function(n) {//exercise 10
        let arrWithNums = [];
        for (i = 0; i < n; i++) {
         arrWithNums.push(Math.floor(Math.random() * 10));
        }
        return arrWithNums;
      }
      console.log(giveMeRandom(6));
      
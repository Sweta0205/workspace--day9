var shoppingcart = [
    {id: 1, name: 'sweta', quantity: 200,price:200},
    {id: 2, name: 'sriramadasu' , quantity: 200, price:20},
    {id: 3, name: 'ssss' ,quantity:20 ,price:200},];
  

  function shoppingCartTotal()
  {
    let sum =0;
  
   for (let i=0; i<shoppingcart.length; i++)
    {
        console.log(shoppingcart[i].price);
        sum+=shoppingcart[i].price
      }  
      
      console.log(sum);
      return sum
    }
    console.log(shoppingCartTotal(sum))



    function addToShoppingCart(item)
    
    {
        shoppingcart.push(item)
        return shoppingCart
 
    }

    console.log(addToShoppingCart({id: 4, name: 'ta', quantity: 200}))
    var shoppingCart=[
        {id: 1, name: 'sweta', quantity: 200 , price:100},
            {id: 2, name: 'sriramadasu' , quantity: 200 , price:100},
            {id: 3, name: 'ssss' ,quantity:20 , price:100},];
            function maxShoppingCart
             var largest=0;
            {
        
            for (i=0; i<=largest;i++){
                if (shoppingCart>largest) {
                    var largest=shoppingCart[i];
                }
            }
            
            console.log(largest);
        
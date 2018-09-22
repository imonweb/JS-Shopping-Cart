// show cart

(function(){
  const cartInfo = document.getElementById('cart-info');
  const cart = document.getElementById('cart');

  cartInfo.addEventListener('click',function(){
    cart.classList.toggle('show-cart');
  });
})();

// add items to the cart
(function(){
  const cartBtn = document.querySelectorAll('.store-item-icon');

  cartBtn.forEach(function(btn){
    btn.addEventListener('click',function(event){
      // console.log(event.target);

      if(event.target.parentElement.classList.contains('store-item-icon')){
        // console.log(event.target.parentElement.parentElement);
        // console.log(event.target.parentElement.previousElementSibling);
        // console.log(event.target.parentElement.previousElementSibling.src);
        let fullPath = event.target.parentElement.previousElementSibling.src;
        // + 3 because img has 3 character string long.
        let pos = fullPath.indexOf('img') + 3;
        // console.log(pos);
        // console.log(fullPath);
        let partialPath = fullPath.slice(pos);
        // console.log(partialPath);
        const item = {};
        item.img = `img-cart${partialPath}`;

        // get the name
        let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
        // combined img and name
        item.name = name;

        // get the price
        let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
        // console.log(price);

        // remove the the dollar sign and space | Final Price
        let finalPrice = price.slice(1).trim();

        //successfully traversed the price (numeral only)
        // console.log(finalPrice);

        // img, name and price
        item.price = finalPrice;
        // console.log(item);


        // successfully traversed the name
        // console.log(name);

        // successfully traversed the image
        console.log(item);

        // create a div
        const cartItem = document.createElement('div');
              cartItem.classList.add(
                'cart-item',
                'd-flex',
                'justify-content-between',
                'text-capitalize','my-3'
              );

              cartItem.innerHTML =
        `  <!-- cart item -->
            <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
            <div class="item-text">
              <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
              <span>$</span>
              <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove">
              <i class="fas fa-trash"></i>
            </a>
          <!--end of  cart item -->`;

          /*  Select cart */
          const cart = document.getElementById('cart');
          const total = document.querySelector('.cart-total-container');

          cart.insertBefore(cartItem,total);
          alert('item added to the cart');
          showTotals();

      }
    });
  });

  // show total
  function showTotals(){
    const total = [];
    const items = document.querySelectorAll('.cart-item-price');

    items.forEach(function(item){
      total.push(parseFloat(item.textContent));
    });
    // console.log(total);

    const totalMoney = total.reduce(function(total,item){
      total += item;
      return total;
    },0);
    // console.log(totalMoney);

    const finalMoney = totalMoney.toFixed(2);
    // console.log(finalMoney);

    document.getElementById('cart-total').textContent = finalMoney;
    document.querySelector('.item-total').textContent = finalMoney;
    document.getElementById('item-count').textContent = total.length;



  }
})();

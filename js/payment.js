let add_cart = document.getElementsByClassName("btn-cart");
for (i = 0; i < add_cart.length; i++) {
    let add = add_cart[i];
    add.addEventListener("click", function (event) {

        let button = event.target;
        let product = button.parentElement.parentElement;
        let img = product.parentElement.getElementsByClassName("img-prd")[0].src;
        let title = product.parentElement.parentElement.getElementsByClassName("content-product-h3")[0].innerText;
        let price = product.parentElement.getElementsByClassName("price")[0].innerText;
        addItemToCart(title, price, img)
        // Khi thêm sản phẩm vào giỏ hàng thì sẽ hiển thị modal
        modal.style.display = "block";

        updatecart()
    })
}

function addItemToCart(title, price, img) {
    let cartRow = document.createElement('div');
    cartRow.classList.add('cart-row')
    let cartItems = document.getElementsByClassName('cart-items')[0];
    let cart_title = cartItems.getElementsByClassName('cart-item-title');
    // Nếu title của sản phẩm bằng với title mà bạn thêm vao giỏ hàng thì sẽ thông cho user.
    for (let i = 0; i < cart_title.length; i++) {
        if (cart_title[i].innerText === title) {
            alert('Sản Phẩm Đã Có Trong Giỏ Hàng')
            return
        }
    }

    cartRow.innerHTML = `
  <div class="cart-item cart-column">
      <img class="cart-item-image" src="${img}" width="100" height="100" alt="#">
      <span class="cart-item-title">${title}</span>  
  </div>
      <span class="cart-price cart-column">${price}</span>
  <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
      <button class="btn btn-danger" type="button">Xóa</button>
  </div>`
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function () {
        let button_remove = event.target;
        button_remove.parentElement.parentElement.remove()
        updatecart()
    })
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
        let input = event.target;
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        updatecart()
    })
}
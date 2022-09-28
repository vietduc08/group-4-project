// Modal
let modal = document.getElementById("myModal");
let btn = document.getElementById("cart");
let close = document.getElementsByClassName("close")[0];
let close_footer = document.getElementsByClassName("close-footer")[0];
let order = document.getElementsByClassName("order")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
close.onclick = function () {
    modal.style.display = "none";
}
close_footer.onclick = function () {
    modal.style.display = "none";
}
order.onclick = function () {
    alert("Cảm ơn bạn đã thanh toán đơn hàng")
}
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Xóa SP
let remove_cart = document.getElementsByClassName("btn-danger");
let i;
for (i = 0; i < remove_cart.length; i++) {
    let button = remove_cart[i];
    button.addEventListener("click", function () {
        let button_remove = event.target;
        button_remove.parentElement.parentElement.remove()
    })
}

// Cập nhật sản phẩm
// update cart
function updatecart() {
    let cart_item = document.getElementsByClassName("cart-items")[0];
    let cart_rows = cart_item.getElementsByClassName("cart-row");
    let total = 0;
    for (let i = 0; i < cart_rows.length; i++) {
        let cart_row = cart_rows[i];
        let price_item = cart_row.getElementsByClassName("cart-price ")[0];
        let quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0];
        let price = parseFloat(price_item.innerText);// chuyển một chuổi string sang number để tính tổng tiền.
        let quantity = quantity_item.value; // lấy giá trị trong thẻ input
        total = total + (price * quantity)
    }
    document.getElementsByClassName("cart-total-price")[0].innerText = total + '$'
    // Thay đổi text = total trong .cart-total-price. Chỉ có một .cart-total-price nên mình sử dụng [0].
}

// thay đổi số lượng sản phẩm
let quantity_input = document.getElementsByClassName("cart-quantity-input");
for (i = 0; i < quantity_input.length; i++) {
    let input = quantity_input[i];
    input.addEventListener("change", function (event) {
        let input = event.target;
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        updatecart()
    })
}

// Thêm vào giỏ
let add_cart = document.getElementsByClassName("btn-cart");
for (i = 0; i < add_cart.length; i++) {
    let add = add_cart[i];
    add.addEventListener("click", function (event) {

        let button = event.target;
        let product = button.parentElement;
        let img = product.getElementsByClassName("img-prd")[0].src;
        let title = product.getElementsByClassName("content-product-h3")[0].innerText;
        let price = product.getElementsByClassName("price")[0].innerText;
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
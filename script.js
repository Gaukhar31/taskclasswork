const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const mobileMenu = document.getElementById("mobile-menu");
const cartBtn = document.getElementById("cart-btn");
const cartCount = document.getElementById("cart-count");

const cartPanel = document.getElementById("cart-panel");
const cartList = document.getElementById("cart-list");
const cartTotal = document.getElementById("cart-total");

let total = 0;
const cartItems = {}; 

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
});

cartBtn.addEventListener("click", () => {
  cartPanel.classList.toggle("show");
});

document.querySelectorAll(".book button").forEach(btn => {
  btn.addEventListener("click", () => {
    const title = btn.dataset.title;
    const price = parseFloat(btn.dataset.price);

    if (cartItems[title]) {
      cartItems[title].days += 1;
      const days = cartItems[title].days;
      const cost = price * days;
      cartItems[title].liElement.textContent = `${title} - ${days} days - $${cost.toFixed(2)}`;
      total += price;
    } else {
      const li = document.createElement("li");
      li.textContent = `${title} - 1 day - $${price.toFixed(2)}`;
      cartList.appendChild(li);

      cartItems[title] = {
        days: 1,
        price: price,
        liElement: li
      };
      total += price;

      cartCount.textContent = Object.keys(cartItems).length;
    }

    cartTotal.textContent = total.toFixed(2);
  });
});
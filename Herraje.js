let carrito = [];
const carritoDiv = document.getElementById("carrito");
const listaCarrito = document.getElementById("lista-carrito");
const totalSpan = document.getElementById("total");
const cartCount = document.getElementById("cart-count");

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
}

function actualizarCarrito() {
  listaCarrito.innerHTML = "";
  let total = 0;
  carrito.forEach((item, index) => {
    total += item.precio;
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
    const btn = document.createElement("button");
    btn.textContent = "x";
    btn.style.marginLeft = "10px";
    btn.onclick = () => eliminarDelCarrito(index);
    li.appendChild(btn);
    listaCarrito.appendChild(li);
  });
  totalSpan.textContent = total.toFixed(2);
  cartCount.textContent = carrito.length;
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

function toggleCart() {
  carritoDiv.style.display = carritoDiv.style.display === "flex" ? "none" : "flex";
}

function procederPago() {
  carritoDiv.style.display = "none";
  document.getElementById("pago").style.display = "block";
}

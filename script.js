const products = document.getElementById("products");
const carts = document.getElementById("carts");

console.log(carts);

const data = [
  { id: 1, name: "Adidas", price: 100, count: 0 },
  { id: 2, name: "Puma", price: 200, count: 0 },
  { id: 3, name: "Reebok", price: 300, count: 0 },
];

const productData = () => {
  products.innerHTML = "";
  data.forEach((ele) => {
    const div = document.createElement("div");
    div.innerHTML = `
     <p>${ele.name}</p>
     <p>${ele.price}</p>
     <section class="buttonGroup">
        <span class="sub">-</span>
        <span id="${ele.id}">${ele.count}</span>
        <span class="add">+</span>
     </section>
     `;
    products.appendChild(div);
  });

  activeEvent();
};

const updateData = () => {
  if (carts.innerHTML == "") {
    carts.innerHTML = `<p>Cart is empty</p>`;
  } else {
    var totalAmt = 0;
    carts.innerHTML = "";
    data.forEach((ele) => {
      if (ele.count != 0) {
        const div = document.createElement("div");
        div.innerHTML = `
              <span>${ele.name}</span>
              <span>Rs ${ele.count} x</span>
              <span>${ele.price * ele.count}</span>
              `;

        totalAmt += ele.price * ele.count;

        carts.appendChild(div);
      }
    });

    console.log(totalAmt);

    let total = document.createElement("p");
    total.innerHTML = `Total : ${totalAmt}`;
    total.classList.add("total");
    carts.appendChild(total);
  }
};

updateData();

const activeEvent = () => {
  document.querySelectorAll(".buttonGroup").forEach((ele, index) => {
    ele.addEventListener("click", (e) => {
      console.log(e);
      if (e.srcElement.classList.value == "add") {
        data[index].count += 1;
      } else if (e.srcElement.classList.value == "sub") {
        if (data[index].count == 0) {
          data[index].count = 0;
        } else {
          data[index].count -= 1;
        }
      }

      updateData();
      productData();
    });
  });
};

document.onload = productData();

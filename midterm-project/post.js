async function display() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    let displayData = "";
    for (let i = 0; i < 72; i++) {
      const value = data[i];
      displayData += createProductHTML(value);
    }
    const productsContainer = document.querySelector(".products-container");
    if (productsContainer) {
      productsContainer.innerHTML = displayData;
    }
    const allProducts = document.querySelectorAll(".product");
    const searchBar = document.getElementById("SearchBar");
    searchBar.addEventListener("input", () => handleSearch(searchBar));
    allProducts.forEach((item) => {
      item.addEventListener("click", handleProductClick);
    });
  } catch (error) {
    console.log(error);
  }
}

function createProductHTML(value) {
  return `
    <div class="product">
      <a href="${value.url}" target="_blank">
        <img src="${value.thumbnailUrl}" alt="${value.title}" title="${value.title}">
      </a>
      <a href="#" class="product-link" data-postid="${value.id}" data-title="${value.title}">${value.title}</a>
    </div>
  `;
}

function handleSearch(searchBar) {
  const searchText = searchBar.value.toLowerCase().trim();
  const allProducts = document.querySelectorAll(".product");
  allProducts.forEach((product) => {
    const title = product.querySelector(".product-link").getAttribute("data-title").toLowerCase();
    if (title.includes(searchText)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

function handleProductClick(event) {
  event.preventDefault();
  const postId = this.querySelector(".product-link").getAttribute("data-postid");
  console.log(`Clicked Post ID: ${postId}`);
  localStorage.setItem("postId", postId);
  window.location.href = "details.html";
}

let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

display();

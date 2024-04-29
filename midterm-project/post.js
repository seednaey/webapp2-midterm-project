
async function display() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/photos");
      const data = await response.json();
      let displayData = "";
      for (let i = 0; i < 44; i++) {
        const value = data[i];
        displayData += `
          <div class="product">
            <a href="${value.url}" target="_blank">
              <img src="${value.thumbnailUrl}" alt="${value.title}" title="${value.title}">
            </a>
            <a href="#" class="url" data-postid="${value.id}" data-title="${value.title}">${value.title}</a>
          </div>
        `;
      }

      const productsContainer = document.querySelector(".products-container");
      if (productsContainer) {
        productsContainer.innerHTML = displayData;
      }
  
      const allProducts = document.querySelectorAll(".product");
      const searchBar = document.getElementById("SearchBar");
      SearchBar.addEventListener("input", () => {
        const searchText = SearchBar.value.toLowerCase().trim();
        allProducts.forEach((product) => {
          const title = product.querySelector(".url").getAttribute("data-title").toLowerCase();
          if (title.includes(searchText)) {
            product.style.display = "block";
          } else {
            product.style.display = "none";
          }
        });
      });
  
      allProducts.forEach((item) => {
        item.addEventListener("click", (event) => {
          event.preventDefault();
          const postId = item.querySelector(".url").getAttribute("data-postid");
          console.log(`Clicked Post ID: ${postId}`);
          localStorage.setItem("postId", postId);
          window.location.href = "details.html";
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
  
  display();


const search = () => {
  const searchbox = document.getElementById("search").value.toUpperCase();
  const products = document.querySelectorAll(".box");
  // Iterate over each product
  products.forEach(item => {
    // Get the first h1 element within the product
    let match = item.getElementsByTagName('h3')[0];
    if (match) {
      let textvalue = match.textContent || match.innerHTML;
      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    }
  });
};
// Attach the search function to the input element
document.getElementById('search').addEventListener('keyup', search);
if (!localStorage.getItem("isLoggedIn")) {
  // If not logged in, redirect to Login.html
  window.location.href = "./Login/Login.html";
}

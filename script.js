const accessKey = "-lQpEo23VPzvGaG2QRR1gnPL3zrNV0Z5ia-vyg4tHqw";

const searchForm = document.getElementById("Search-form");
const searchBox = document.getElementById("Search-box");
const searchResult = document.getElementById("Search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImage() {
  keyword = searchBox.value;

  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);

  if (!response.ok) {
    console.log("Error:", response.status);
    return;
  }

  const data = await response.json();

  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });
  showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImage();
  searchResult.innerHTML = "";

  const results = data.results;

  searchResult.innerHTML = ""; // 👈 ADD THIS LINE

  results.forEach((result) => {
    const img = document.createElement("img");
    img.src = result.urls.small;
    searchResult.appendChild(img);
  });
});

showMoreBtn.addEventListener("click", () => {
  page++;
  searchImage();
});

const BASE_URL = "http://localhost:3000/films";
// This Function updates the content on the Page
function updatePageInfo(movieName) {
  document.getElementById("poster").src = movieName.poster;
  document.getElementById("title").textContent = movieName.title;
  document.getElementById(
    "runtime"
  ).textContent = `${movieName.runtime} minutes`;
  document.getElementById("film-info").textContent = movieName.description;
  document.getElementById("showtime").textContent = movieName.showtime;
  document.getElementById("ticket-num").textContent = movieName.tickets_sold;
}
fetch(BASE_URL)
  .then((response) => response.json())
  .then((data) => {
    updatePageInfo(data[0]);

    const filmsList = document.getElementById("films");
    data.forEach((movie) => {
      const listItem = document.createElement("li");
      listItem.classList.add("film", "item");
      listItem.textContent = movie.title;
      listItem.addEventListener("click", function () {
        updatePageInfo(movie);
      });
      filmsList.appendChild(listItem);
    });
  })
  .catch((error) => console.error("Error fetching movies:", error));

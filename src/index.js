const BASE_URL = "http://localhost:3000/films";
// This Function updates the content on the Page
function updatePageInfo(movieName) {
  // Updates the Image based on the movie picked
  document.getElementById("poster").src = movieName.poster;
  document.getElementById("poster").alt = movieName.title;
  // Updates the Title based on the movie picked
  document.getElementById("title").textContent = movieName.title;
  // Updates the runTime based on the movie picked
  document.getElementById(
    "runtime"
  ).textContent = `${movieName.runtime} minutes`;
  // Updates the filmInfo based on the movie picked
  document.getElementById("film-info").textContent = movieName.description;
  // Updates the showtime based on the movie picked
  document.getElementById("showtime").textContent = movieName.showtime;
  //  Shows the ticket number available based on the movie picked
  document.getElementById("ticket-num").textContent = movieName.tickets_sold;

  const extraContent = document.querySelector("#delete-button");
  extraContent.innerText = "Delete";
  extraContent.className = "ui orange button";

  extraContent.addEventListener("click", () => {
    removeMovie(movieName.id);
  });

  function removeMovie(movieId) {
    fetch(`http://localhost:3000/films/${movieId}`, {
      method: "DELETE",
    });
  }
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

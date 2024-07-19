document.addEventListener("DOMContentLoaded", () => {
    const movies = [
        {
            title: "Kabir Singh",
            poster: "poster1.jpg",
            description: "I'm not a rebel without a cause, Sir… nor a murderer with a hand-blade",
            trailer: "https://www.youtube.com/watch?v=RiANSSgCuJk"
        },
        {
            title: "3 Idiots",
            poster: "poster2.jpeg",
            description: "Don't be Stupid. Be an I.D.I.O.T.",
            trailer: "https://www.youtube.com/watch?v=K0eDlFX9GMc"
        },
		{
		    title: "Munna Bhai MBBS",
            poster: "poster3.jpg",
            description: "Jadoo ki jhappi",
            trailer: "https://www.youtube.com/watch?v=6f-EaUWCua0"
		}
		
        // Add more movies as needed
    ];

    const movieList = document.getElementById("movie-list");
    const searchInput = document.getElementById("search");

    function displayMovies(movies) {
        movieList.innerHTML = "";
        movies.forEach(movie => {
            const movieCard = document.createElement("div");
            movieCard.className = "movie-card";

            movieCard.innerHTML = `
                <img src="${movie.poster}" alt="${movie.title}">
                <h2>${movie.title}</h2>
                <p>${movie.description}</p>
                <a href="${movie.trailer}" target="_blank">Watch Trailer</a>
            `;

            movieList.appendChild(movieCard);
        });
    }

    searchInput.addEventListener("input", () => {
        const searchText = searchInput.value.toLowerCase();
        const filteredMovies = movies.filter(movie => 
            movie.title.toLowerCase().includes(searchText)
        );
        displayMovies(filteredMovies);
    });

    // Display all movies initially
    displayMovies(movies);
});

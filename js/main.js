//Global variables
let activeInfoWindow;
let idForSearch;
let OMDBUrl;
let youtubeTrailerId;

//Marker list for movies (to go inside the init map function):
let markers = [/*
                Template
                {
                    coords: { lat: , lng:  },
                    content: `<h3>FilmTitle</h3>
                    <p>Location info</p>
                    <p id='IMDB' style='display:none'>IMDbID</p>
                    `
                },*/
    {
        coords: { lat: 53.1171605, lng: -8.0269183 },
        content: `<h3>Garage</h3>
                    <p>Rathcabbin and other midland locations</p>
                    <p id='IMDB' style='display:none'>tt0878674</p>
                    `,
    },
    {
        coords: { lat: 52.976212, lng: -9.4210975 },
        content: `<h3>Harry Potter and the Half-Blood Prince</h3>
                    <p>Cliffs of Moher</p>
                    <p id='IMDB' style='display:none'>tt0417741</p>
                    `
    },
    {
        coords: { lat: 51.7712833, lng: -10.5449314 },
        content: `<h3>Star Wars: Episode VII - The Force Awakens</h3>
                    <p>Skellig Michael</p>
                    <p id='IMDB' style='display:none'>tt2488496</p>
                    `,
    },
    {
        coords: { lat: 52.402581, lng: -6.356075 },
        content: `<h3>Saving Private Ryan</h3>
                    <p>Curracloe</p>
                    <p id='IMDB' style='display:none'>tt0120815</p>
                    `,
    },
    {
        coords: { lat: 53.1291441, lng: -6.7076051 },
        content: `<h3>Black '47</h3>
                    <p>Harristown House</p>
                    <p id='IMDB' style='display:none'>tt3208026</p>
                    `,
    },
    {
        coords: { lat: 53.1829611, lng: -6.1812657 },
        content: `<h3>Barry Lyndon</h3>
                    <p>Powerscourt House</p>
                    <p id='IMDB' style='display:none'>tt0072684</p>
                    `,
    },
    {
        coords: { lat: 51.9114852, lng: -8.4817243 },
        content: `<h3>The Young Offenders</h3>
                    <p>Cork city and county and Atlantic coastline</p>
                    <p id='IMDB' style='display:none'>tt4714568</p>
                    `,
    },
    {
        coords: { lat: 53.16136749421548, lng: -6.8475166851461395 },
        content: `<h3>Braveheart</h3>
                    <p>The Curragh and other locations</p>
                    <p id='IMDB' style='display:none'>tt0112573</p>
                    `
    },
    {
        coords: { lat: 53.3416958, lng: -6.3113977 },
        content: `<h3>The Italian Job</h3>
                    <p>Kilmainham Gaol</p>
                    <p id='IMDB' style='display:none'>tt0064505</p>
                    `
    },
    {
        coords: { lat: 52.9734372, lng: -9.4395077 },
        content: `<h3>The Princess Bride</h3>
                    <p>Cliffs of Moher</p>
                    <p id='IMDB' style='display:none'>tt0093779</p>
                    `
    },
    {
        coords: { lat: 52.3768769, lng: -7.9362685 },
        content: `<h3>Excalibur</h3>
                    <p>Cahir Castle</p>
                    <p id='IMDB' style='display:none'>tt0082348</p>
                    `
    },
    {
        coords: { lat: 53.1199899, lng: -9.7644271 },
        content: `<h3>Man of Aran</h3>
                    <p>Inis Mor</p>
                    <p id='IMDB' style='display:none'>tt0025456</p>
                    `
    },
    {
        coords: { lat: 53.1368991, lng: -6.3187548 },
        content: `<h3>P.S. I Love You</h3>
                    <p>Sally Gap, Wicklow, Dublin</p>
                    <p id='IMDB' style='display:none'>tt0431308</p>
                    `
    },
    {
        coords: { lat: 51.8156968, lng: -9.8769218 },
        content: `<h3>The Lobster</h3>
                    <p>Parknasilla Resort</p>
                    <p id='IMDB' style='display:none'>tt3464902</p>
                    `
    },
    {
        coords: { lat: 51.953549, lng: -7.8460878 },
        content: `<h3>Moby Dick</h3>
                    <p>Youghal</p>
                    <p id='IMDB' style='display:none'>tt0049513</p>
                    `
    },
    {
        coords: { lat: 53.3437935, lng: -6.2545716 },
        content: `<h3>Ek Tha Tiger</h3>
                    <p>Trinity College, Dublin City</p>
                    <p id='IMDB' style='display:none'>tt2016894</p>
                    `
    },
    {
        coords: { lat: 52.5022462, lng: -6.5683317 },
        content: `<h3>Brooklyn</h3>
                    <p>Enniscorthy</p>
                    <p id='IMDB' style='display:none'>tt2381111</p>
                    `
    },
    {
        coords: { lat: 52.1406436, lng: -10.2802415 },
        content: `<h3>Ryan's Daughter</h3>
                    <p>Dingle</p>
                    <p id='IMDB' style='display:none'>tt0066319</p>
                    `
    },
    {
        coords: { lat: 53.0110258, lng: -8.9972987 },
        content: `<h3>The Silver Branch</h3>
                    <p>The Burren</p>
                    <p id='IMDB' style='display:none'>tt7468070</p>
                    `
    },
    {
        coords: { lat: 53.5955947, lng: -9.7018873 },
        content: `<h3>The Field</h3>
                    <p>Leenaun</p>
                    <p id='IMDB' style='display:none'>tt0099566</p>
                    `
    },
    {
        coords: { lat: 53.2949432, lng: -9.6973137 },
        content: `<h3>The Guard</h3>
                    <p>Lettermore</p>
                    <p id='IMDB' style='display:none'>tt1540133</p>
                    `
    },
    {
        coords: { lat: 53.5408714, lng: -9.2903042 },
        content: `<h3>The Quiet Man</h3>
                    <p>Cong and other nearby locations</p>
                    <p id='IMDB' style='display:none'>tt0045061</p>
                    `
    },
    {
        coords: { lat: 51.9457143, lng: -9.1714211 },
        content: `<h3>The Wind That Shakes The Barley</h3>
                    <p>Ballyvourney and around</p>
                    <p id='IMDB' style='display:none'>tt0460989</p>
                    `
    }
];
function initMap() {
    let options = {
        zoom: 7,
        center: {
            lat: 52.9462449, lng: -8.3522866
        },
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.TERRAIN //Source: https://stackoverflow.com/questions/8607036/google-maps-v3-terrain-view-by-default
    }


    let map = new google.maps.Map(document.getElementById("map"), options);

    //Loop through to get info for all markers and run addMarker function for each one  
    for (i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }
    //Add marker
    function addMarker(props) {
        let infowindow = new google.maps.InfoWindow({ content: props.content });
        let marker = new google.maps.Marker({
            position: props.coords,
            map: map,
        });
        if (props.iconImage) {                          //Can probably take this out
            marker.setIcon(props.iconImage);
        }
        marker.addListener("click", function () {
            if (activeInfoWindow) { activeInfoWindow.close(); } // Only open one infowindow at a time
            infowindow.open(map, marker);
            activeInfoWindow = infowindow;
            loadMovieDetails();
        });
    }

}
//Get movie details from OMDB API and call functions to populate HTML
function loadMovieDetails() {
    google.maps.event.addListener(activeInfoWindow, 'domready', function () {
        let idForSearch = document.getElementById("IMDB").innerHTML;
        let OMDBUrl = "https://www.omdbapi.com/?i=" + idForSearch + "&apikey=e3028bad";
        let jsonData;
        //console.log(idForSearch);
        //console.log(OMDBUrl);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let data = this.responseText;
                let jsonData = JSON.parse(data);
                let movieArray = Object.entries(jsonData);
                //console.log(movieArray);
                console.log(jsonData);
                buildOutTable(jsonData);
                buildOutPosterDiv(jsonData);
                buildOutTrailerDiv(idForSearch);
            };
        }
        xhttp.open("GET", OMDBUrl, true);
        xhttp.send();

    });
}

// Use the movie details returned by loadMovieDetails() to populate HTML table
function buildOutTable(movie) {
    document.getElementById("movie-details").innerHTML =
        `
                <table class="table">
        <tr>
            <td>Title</td>
            <td>${movie.Title}</td>
        </tr>
        <tr>
            <td>Genre</td>
            <td>${movie.Genre}</td>
        </tr>
        <tr>
            <td>Released</td>
            <td>${movie.Released}</td>
        </tr>
        <tr>
            <td>Director</td>
            <td>${movie.Director}</td>
        </tr>
        <tr>
            <td>Plot</td>
            <td>${movie.Plot}</td>
        </tr>
        <tr>
            <td>Runtime</td>
            <td>${movie.Runtime}</td>
        </tr>
        <tr>
            <td>Written By</td>
            <td>${movie.Writer}</td>
        </tr>
        <tr>
            <td>Starring</td>
            <td>${movie.Actors}</td>
        </tr>

        <tr>
            <td>Awards</td>
            <td>${movie.Awards}</td>
        </tr>

        <tr>
            <td>Production Company</td>
            <td>${movie.Production}</td>
        </tr>

        <tr>
            <td>Box Office</td>
            <td>${movie.BoxOffice}</td>
        </tr>

        <tr>
            <td>IMDb Rating</td>
            <td>${movie.imdbRating}</td>
        </tr>
    </table>
                `
}

// Use the movie details returned by loadMovieDetails() to populate the poster div 
function buildOutPosterDiv(movie) {
    document.getElementById("movie-poster").innerHTML =
        `<img src=${movie.Poster}/>`
}



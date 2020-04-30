 function add()
        {
        let input = document.querySelector('#input').value;
        
        document.querySelector('#result').innerHTML = input;
        }

function saveEdits() {
 //get edible element
 var editElem = document.getElementById("edit");
 
 //get edited content
 var userVersion= editElem.innerHTML;
 
 //store local
 localStorage.userEdits = userVersion;

 document.getElementById("update").innerHTML = "Edits Saved!";
}

function saveMovies() {
 //get edible element
 var Movies = document.getElementById("edit_movies");
 
 //get edited content
 var userMovies= Movies.innerHTML;
 
 //store local
 localStorage.userMov = userMovies;

 document.getElementById("update").innerHTML = "Edits Saved!";
}

function saveMusic() {
 //get edible element
 var Music = document.getElementById("music");
 
 //get edited content
 var userMusic= Music.innerHTML;
 
 //store local
 localStorage.userMusic = userMusic;

 document.getElementById("update").innerHTML = "Edits Saved!";
}




function checkEdits() {
 //find if the user had saved edits
 if(localStorage.userEdits!= null)
 document.getElementById("edit").innerHTML = localStorage.userEdits
}

function checkMovies() {
 //find if the user had saved edits - Movies
 if(localStorage.userMov!= null)
 document.getElementById("edit_movies").innerHTML = localStorage.userMov
}


function checkMusic() {
 //find if the user had saved edits - Movies
 if(localStorage.userMusic!= null)
 document.getElementById("music").innerHTML = localStorage.userMusic
}


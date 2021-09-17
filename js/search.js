
const search = document.getElementById("search");
search.addEventListener("keyup", searchFilter);

function searchFilter() {
    let x = search.value.toLowerCase();

    let photos = document.getElementsByClassName("photo");

    for (i = 0; i < photos.length; i++ ) { 
        var cap = photos[i].getAttribute("data-caption").toLowerCase();
        if (cap.includes(x)) {
            photos[i].classList.add("show");
            photos[i].classList.remove("hide");
        } else {
            photos[i].classList.add("hide");
            photos[i].classList.remove("show");
        }
    }
}




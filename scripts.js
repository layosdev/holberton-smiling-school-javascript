$(document).ready(() => {
    function loader() {
        let div = document.getElementById("loader");
        let carousel = document.getElementById("carouselExampleControls");

        setTimeout(() => {
            div.classList.add("loader");
            carousel.classList.add("d-none");
        }, 0);
    }

    function unloader() {
        let div = document.getElementById("loader");
        let carousel = document.getElementById("carouselExampleControls");

        setTimeout(() => {
            div.classList.remove("loader");
            carousel.classList.remove("d-none");
        }, 2000);
    }

    function quotes() {
        let principalDiv = document.getElementById("carouselSpace");
        let active = 'active'
        let inactive = 'inactive'
        loader();
        $.ajax({
            url: "https://smileschool-api.hbtn.info/quotes",
            type: "GET",
            dataType: "json",
            success: function (json) {
                console.log(json);
                json.forEach((element) => {
                    $("#carouselSpace").append(`
                        <div id="carouselItem" class="carousel-item ${element.id === 1 ? active : inactive}">
                            <div class="carousel-item-info d-flex">
                                    <img class="d-block carousel__img mr-3" src="${element.pic_url}" alt="First slide">
                                    <div class="info pb-5">
                                        <p class="mt-4">${element.text}</p>
                                        <p class="font-weight-bolder mb-0">${element.name}</p>
                                        <p class="font-weight-light">${element.title}</p>
                                    </div>
                            </div>
                        </div>`);
                });
            },
            error: function (xhr, status) {
                alert("Error");
            },
        });
        unloader();
    }
    quotes();
});

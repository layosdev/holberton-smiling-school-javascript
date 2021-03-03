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

    function loader2() {
        let div = document.getElementById("loader2");
        let carousel = document.getElementById("carousel2ExampleControls");

        setTimeout(() => {
            div.classList.add("loader2");
            carousel.classList.add("d-none");
        }, 0);
    }

    function unloader2() {
        let div = document.getElementById("loader2");
        let carousel = document.getElementById("carousel2ExampleControls");

        setTimeout(() => {
            div.classList.remove("loader2");
            carousel.classList.remove("d-none");
        }, 2000);
    }

    function loader3() {
        let div = document.getElementById("loader3");
        let carousel = document.getElementById("carousel3ExampleControls");

        setTimeout(() => {
            div.classList.add("loader");
            carousel.classList.add("d-none");
        }, 0);
    }

    function unloader3() {
        let div = document.getElementById("loader3");
        let carousel = document.getElementById("carousel3ExampleControls");

        setTimeout(() => {
            div.classList.remove("loader");
            carousel.classList.remove("d-none");
        }, 2000);
    }

    function quotes() {
        let principalDiv = document.getElementById("carouselSpace");
        let active = "active";
        let inactive = "inactive";
        loader();
        $.ajax({
            url: "https://smileschool-api.hbtn.info/quotes",
            type: "GET",
            dataType: "json",
            success: function (json) {
                // console.log(json);
                json.forEach((element) => {
                    $("#carouselSpace").append(`
                        <div id="carouselItem" class="carousel-item ${
                            element.id === 1 ? active : inactive
                        }">
                            <div class="carousel-item-info d-flex">
                                    <img class="d-block carousel__img mr-3" src="${
                                        element.pic_url
                                    }" alt="First slide">
                                    <div class="info pb-5">
                                        <p class="mt-4">${element.text}</p>
                                        <p class="font-weight-bolder mb-0">${
                                            element.name
                                        }</p>
                                        <p class="font-weight-light">${
                                            element.title
                                        }</p>
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
    function quotes() {
        let principalDiv = document.getElementById("carouselSpace");
        let active = "active";
        let inactive = "inactive";
        loader();
        $.ajax({
            url: "https://smileschool-api.hbtn.info/quotes",
            type: "GET",
            dataType: "json",
            success: function (json) {
                // console.log(json);
                json.forEach((element) => {
                    $("#carouselSpace").append(`
                        <div id="carouselItem" class="carousel-item ${
                            element.id === 1 ? active : inactive
                        }">
                            <div class="carousel-item-info d-flex">
                                    <img class="d-block carousel__img mr-3" src="${
                                        element.pic_url
                                    }" alt="First slide">
                                    <div class="info pb-5">
                                        <p class="mt-4">${element.text}</p>
                                        <p class="font-weight-bolder mb-0">${
                                            element.name
                                        }</p>
                                        <p class="font-weight-light">${
                                            element.title
                                        }</p>
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
    function videos() {
        let principalDiv = document.getElementById("videosSpace");
        let active = "active";
        let inactive = "inactive";
        loader2();6
        $.ajax({
            url: "https://smileschool-api.hbtn.info/popular-tutorials",
            type: "GET",
            dataType: "json",
            success: function (json) {
                // console.log(json);
                for (const element of json) {                    
                    if (element.id >= 5) {
                        break;
                    }
                    // console.log(element);
                    $("#videosSpace").append(`
                        <div class="video-item video-item1 d-flex flex-column">
                            <div class="videoThumbmail d-flex justify-content-center align-items-center">
                                <img class="videoThumbmail-item" src="${element.thumb_url}" alt="Play">
                                <img class="w-25 videoThumbmail-play" src="./assets/images/play.png" alt="Play">
                            </div>
                            <div class="videoInfo text-left">
                                <h3 class="font-weight-bolder form-control-sm align-self-start mb-0">${element.title}</h3>
                                <p class="ml-2 text-white-70 mt-0">${element["sub-title"]}</p>
                                <div class="videoUserInfo d-flex mb-2 justify-content-start align-items-center">
                                    <img class="videoUserInfoPhoto" src="${element.author_pic_url}" alt="Photo">
                                    <h4 class="videoUserInfoName mt-2 ml-3 text-primary font-weight-bold">${element.author}</h4>
                                </div>
                                <div class="videoCalification d-flex justify-content-between align-items-center">
                                    <div class="stars d-flex">
                                        <img class="star mr-1" src="./assets/images/star_on.png" alt="star">
                                        <img class="star mr-1" src="./assets/images/star_on.png" alt="star">
                                        <img class="star mr-1" src="./assets/images/star_on.png" alt="star">
                                        <img class="star mr-1" src="./assets/images/star_on.png" alt="star">
                                        <img class="star mr-1" src="./assets/images/star_off.png" alt="star">
                                    </div>
                                    <p class="mt-3 text-primary font-weight-bold">${element.duration}</p>
                                </div>
                            </div>
                        </div>`);
                };
            },
            error: function (xhr, status) {
                alert("Error");
            },
        });
        unloader2();
    }
    function videos2() {
        let principalDiv = document.getElementById("videosSpace2");
        let active = "active";
        let inactive = "inactive";
        loader3();
        $.ajax({
            url: "https://smileschool-api.hbtn.info/popular-tutorials",
            type: "GET",
            dataType: "json",
            success: function (json) {
                // console.log(json);
                for (const element of json) {                    
                    if (element.id >= 5) {
                        break;
                    }
                    // console.log(element);
                    $("#videosSpace2").append(`
                        <div class="video-item video-item1 d-flex flex-column">
                            <div class="videoThumbmail d-flex justify-content-center align-items-center">
                                <img class="videoThumbmail-item" src="${element.thumb_url}" alt="Play">
                                <img class="w-25 videoThumbmail-play" src="./assets/images/play.png" alt="Play">
                            </div>
                            <div class="videoInfo text-left">
                                <h3 class="font-weight-bolder form-control-sm align-self-start mb-0">${element.title}</h3>
                                <p class="ml-2 text-white-70 mt-0">${element["sub-title"]}</p>
                                <div class="videoUserInfo d-flex mb-2 justify-content-start align-items-center">
                                    <img class="videoUserInfoPhoto" src="${element.author_pic_url}" alt="Photo">
                                    <h4 class="videoUserInfoName mt-2 ml-3 text-primary font-weight-bold">${element.author}</h4>
                                </div>
                                <div class="videoCalification d-flex justify-content-between align-items-center">
                                    <div class="stars d-flex">
                                        <img class="star mr-1" src="./assets/images/star_on.png" alt="star">
                                        <img class="star mr-1" src="./assets/images/star_on.png" alt="star">
                                        <img class="star mr-1" src="./assets/images/star_on.png" alt="star">
                                        <img class="star mr-1" src="./assets/images/star_on.png" alt="star">
                                        <img class="star mr-1" src="./assets/images/star_off.png" alt="star">
                                    </div>
                                    <p class="mt-3 text-primary font-weight-bold">${element.duration}</p>
                                </div>
                            </div>
                        </div>`);
                };
            },
            error: function (xhr, status) {
                alert("Error");
            },
        });
        unloader3();
    }
    quotes();
    videos();
    videos2();
});

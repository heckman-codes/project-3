$(document).ready(function () {
    $('#sign-in-button').on('click', function (e) {
        e.preventDefault();

        const userData = {
            email: $('#username-input')
                .val()
                .trim(),
            password: $('#password-input')
                .val()
                .trim()
        };

        console.log(userData)

        $.ajax({
            method: 'POST',
            url: '/api/user/login',
            data: userData
        }).then(function (res) {
            console.log(res)
            window.location.replace("/");
        })

        console.log("successful")
    });

    $("#logout-btn").on("click", function () {
        $.ajax({
            method: "GET",
            url: "/api/user/logout"
        }).then(function (res) {
            console.log("successfully logged out.")
            window.location.replace("/");

        })
    })

    $(".remove-pet").on("click", function () {
        var dataID = {
            id: $(this).data("id")
        }

        var id = $(this).data("id");

        $.ajax({
            method: "DELETE",
            url: "/api/remove/pet/" + id,
            data: dataID
        }).then(function (res) {
            console.log("successfully removed pet.")
            window.location.replace("/account");
        })
    })

    $("#shelter-contact-btn").on("click", function () {
        $(".contact-container").css("display", "block");
    })
});
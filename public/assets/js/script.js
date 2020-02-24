$(document).ready(() => {
    const burgerTextEl = $("#addBurgerText")
        // burgerTextEl.focus();
    $("#addBurgerBtn").on("click", (event) => {
        event.preventDefault();
        const burgerName = $("#addBurgerText").val().trim();
        $.ajax("/api/burgers", {
            type: "POST",
            data: { burger: burgerName },
            success: (resp) => {
                location.reload();
                console.log("Added with id: " + resp.id);
            },
            error: (err) => {
                console.log(err);
            }
        });
    });

    $(".eatMe").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        $.ajax(`/api/burgers/${id}/true`, {
            type: "PUT",
            success: (resp) => {
                location.reload();
                console.log("Server response: " + resp);
            }

        });
    });

    $(".remake").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        $.ajax(`/api/burgers/${id}/false`, {
            type: "PUT",
            success: (resp) => {
                location.reload();
                console.log("Server response: " + resp);
            }

        });
    });

    $(".fa-trash-alt").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        $.ajax(`/api/burgers/${id}`, {
            type: "DELETE",
            success: (resp) => {
                location.reload();
                console.log("Server response: " + resp);
            }

        });
    });
});
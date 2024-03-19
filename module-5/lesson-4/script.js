$(".btn-danger").on("click", () => {
    $(".card").hide();
    deferred.notify();
});

$(".btn-success").bind("click", () => {
    $(".card").hide();
});

$(".input").on("click", () => {
    $(this).fade();
});

fetch("https://jsonplaceholder.typicode.com/todos")
.then((response) => response.json())
.then((res) => {
    console.log(res);
    res.forEach((el) => {
        $(".list")
        .animate(
            {
                opacity: 1,
                height: "100vh",
            },
            100,
            function () {
                console.log("success");
            }
        )
        .append(`<div class="shadow p-2 my-2 border">${el.userId} ${el.title}</div>`)
    });
});

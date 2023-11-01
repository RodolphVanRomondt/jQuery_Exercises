$(function () {
    console.log("Let’s get ready to party with jQuery!");

    $("article img").addClass("image-center");

    $("p").get(-1).remove();

    $("#title").css("font-size", Math.floor(Math.random() * 100));

    $("ol").append("<li>I Am What I Am</li>");

    $("aside").html("<p><strong>Sorry!</strong></p>");

    $("html").on("mouseup", "input", function () {
        let [Input1, Input2, Input3] = $("input");
        $("body").css("background-color", "rgb(" + Input1.value + "," + Input2.value + "," + Input3.value + ")");
    });

    $("body").on("click", "img", function () {
        this.remove();
    });
});

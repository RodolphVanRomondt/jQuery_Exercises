$("body").on("click", "button", function (e) {
    e.preventDefault();

    let movie = $("input").eq(0).val();
    let rating = $("input").eq(1).val();

    if (movie.length < 2 || rating < 0 || rating > 10) {
        return;
    }

    const tr = $("<tr>");
    const btn = $("<input type='submit' id='btn' value='X'>");

    tr.append(`<td>${movie}</td><td>${rating}</td>`);
    tr.append(btn);
    $("table").append(tr).removeClass("hide");;

    $("input").eq(0).val("");
    $("input").eq(1).val(0);

    $("table").on("click", "#btn", function () {
        $(this).parent().remove();

        if ($("table").find("td").length === 0) {
            $("table").addClass("hide");
        }
    });
});
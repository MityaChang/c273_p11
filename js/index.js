$(document).ready(function () {
    var review = JSON.parse(localStorage.getItem("review"));
    var msg = "";
    for (var i = 0; i < review.length; i++){
        var movie = review[i];
        msg += "<div class='panel'>"
        + "<div class='panel-header'>"
                + movie.Title
                + "</div>"
                + "<div class='panel-body'>"
                + "<blockquote class='blockquote mb-0'>"
                + "<p>" + movie.Plot + "</p>"
                + "</blockquote>"
                + "</div>"
                + "</div><br/>";
    }
    $("#contents").html(msg);
});
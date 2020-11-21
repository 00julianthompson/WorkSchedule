$(document).ready(function () {

    localStorage.setItem(time, text);

    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    $(".saveBtn").on("click", function () {
       
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");


        localStorage.setItem(time, text);
}

  
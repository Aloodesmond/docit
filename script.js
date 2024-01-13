$(document).ready(function() {
// function to display document before upload
$("input.documents").change(function(){
    var file = this.files[0];
    var url = url.createObjectURL(file);
    $(this).closest(".row").find(".preview_doc").attr("src", url);
});

// function to insert data into a database
$("#insertform").on("submit", function(e){
    $("#inputbtn").attr("disabled", "disabled");
    e.preventDefault();
    $.ajax({
        url: "server.php?action=insertData",
        type: "POST",
        data: new FormData(this),
        contentType: false,
        cache: false,
        processData: false,
        success: function(response) {
            var response =JSON.parse(response);
        }
    })
})
});
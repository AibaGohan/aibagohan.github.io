$(document).ready(function() {
    $('#fileInput').on('change', function(event) {
        var file = event.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#imagePreview').html('<img src="' + e.target.result + '" alt="Image Preview">');
                $('#imageLink').html('<a href="' + e.target.result + '" target="_blank">' + e.target.result + '</a>');
            }
            reader.readAsDataURL(file);
        }
    });
});

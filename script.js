
// document.getElementById('thalaForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent default form submission
//     var inputText = document.getElementById('textInput').value.trim().toLowerCase(); // Get input value and remove leading/trailing spaces
//     var wordCount = inputText.split(/\s+/).length; // Count the number of words

//     // Check if the input text is either 7 words long, or if it's exactly 7 characters long, or if it's a number that sums up to 7
//     if (wordCount === 7 || inputText.length === 7 || (!isNaN(inputText) && eval(inputText.split('').join('+')) === 7)) {
//         alert('Thala for a Reason!');
//     } else {
//         alert('No Thala for you!');
//     }
// });

//----------------------new down------------------------/./

document.getElementById('thalaForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    var inputText = document.getElementById('textInput').value.trim().toLowerCase(); // Get input value and remove leading/trailing spaces
    var wordCount = inputText.split(/\s+/).length; // Count the number of words

    // Check if the input text is either 7 words long, or if it's exactly 7 characters long, or if it's a number that sums up to 7
    if (wordCount === 7 || inputText.length === 7 || (!isNaN(inputText) && eval(inputText.split('').join('+')) === 7)) {
        // Show the "Thala for a Reason" modal
        var videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
        videoModal.show();

        // Play the video when the modal is shown
        videoModal._element.addEventListener('shown.bs.modal', function () {
            document.getElementById('video').play();
        });

        // Pause the video when the modal is hidden
        videoModal._element.addEventListener('hidden.bs.modal', function () {
            document.getElementById('video').pause();
        });
    } else {
        // Show the "No Thala for you!" modal
        var noThalaModal = new bootstrap.Modal(document.getElementById('noThalaModal'));
        noThalaModal.show();

        // Play the video when the modal is shown
        noThalaModal._element.addEventListener('shown.bs.modal', function () {
            document.getElementById('noThalaVideo').play();
        });

        // Pause the video when the modal is hidden
        noThalaModal._element.addEventListener('hidden.bs.modal', function () {
            document.getElementById('noThalaVideo').pause();
        });
    }
});


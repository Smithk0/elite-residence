$(document).ready(function () {
  var currentIndex = 0;

  // Show the image preview modal
  function showImagePreview(index) {
    $("#imagePreviewModal").fadeIn();
    currentIndex = index;
    updateImagePreview();
    $("body").addClass("modal-open");
  }

  // Update the image preview based on the current index
  function updateImagePreview() {
    var imagePath = $(".listing-content-image").eq(currentIndex).attr("src");
    $(".image-preview").attr("src", imagePath);
  }

  // Hide the image preview modal
  function hideImagePreview() {
    $("#imagePreviewModal").fadeOut();
    $("body").removeClass("modal-open");
  }

  // Navigate to the previous image
  function prevImage() {
    currentIndex = (currentIndex - 1 + $(".listing-content-image").length) % $(".listing-content-image").length;
    updateImagePreview();
  }

  // Navigate to the next image
  function nextImage() {
    currentIndex = (currentIndex + 1) % $(".listing-content-image").length;
    updateImagePreview();
  }

  // Attach click event handlers
  $(".listing-content-image").click(function () {
    var index = $(this).index(".listing-content-image");
    showImagePreview(index);
  });

  $(".close-button").click(function () {
    hideImagePreview();
  });

  $(".prev-button").click(function () {
    prevImage();
  });

  $(".next-button").click(function () {
    nextImage();
  });

  // Disable background scroll when the modal is open
  $("body").on("keydown", function (e) {
    if ($("#imagePreviewModal").is(":visible")) {
      e.preventDefault();
    }
  });
});

export const handleImageSize = (image, file) => {
  [file.width, file.height] = [image.width, image.height];
  if (image.height > image.width) {
    $("#dj-image").addClass("dj-image-tall");
    // let fig = $("<figure class='img-wrap'></figure>");
    $(".img-wrap").css("backgroundImage", `url(${image.src})`);
  } else {
    $("#dj-image").removeClass("dj-image-tall");
    $(".img-wrap").css("backgroundImage", "none");
  }
}
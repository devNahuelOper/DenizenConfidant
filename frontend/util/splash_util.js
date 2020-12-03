export const secretHover = () => {
  $(".denizen-confidant")
    .on("mouseover", () => {
      $(".denizen-confidant").attr("id", `bg${Math.floor(Math.random() * 10)}`);
    })
    .on("mouseout", () => {
      $(".denizen-confidant").attr("id", "bgnone");
    });
};

let searched = document.querySelector(".search");
const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

function handleSubmit(e) {
  e.preventDefault();
  const apiKey = "563492ad6f91700001000001320cc39e78714ab1b2d56bd33d6eaae4";
  const url = `https://api.pexels.com/v1/search/?per_page=1&query=${this.value}`;
  axios
    .get(url, {
      headers: {
        Authorization: apiKey,
      },
    })
    .then((response) => {
      const createImg = document.createElement("img");
      const imageSource = response.data.photos[0].src.landscape;
      createImg.src = imageSource;
      createImg.className = "img-src";
      const element = document.getElementById("section");
      element.appendChild(createImg);
    });
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
searched.addEventListener("search", handleSubmit);

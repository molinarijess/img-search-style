let searched = document.querySelector(".search");

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
      createImg.class = "img-src";
      document.body.appendChild(createImg);
    });
}

searched.addEventListener("search", handleSubmit);

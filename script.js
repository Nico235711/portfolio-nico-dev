const socialLinks = [
  {
    img: "svg/github.svg",
    alt: "Icono de Github"
  }
]

document.addEventListener("DOMContentLoaded", () => {
  const $socialLinks = document.getElementById("social-links")
  $socialLinks.innerHTML = socialLinks.map(({ img, alt }) => {
    return 
      `<a href="#" target="_blank">
        <img src="images/${img} alt="${alt}">
      </a>`
  })
})

// {/* <a
//               href="https://github.com"
//               target="_blank"
//               class="button button-outline button-icon"
//             > */}
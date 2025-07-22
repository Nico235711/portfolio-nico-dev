document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })

  // Contact Form Submission (simulated)
  const contactForm = document.getElementById("contact-form")
  const formMessage = document.getElementById("form-message")
  const submitButton = contactForm.querySelector('button[type="submit"]')

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    submitButton.textContent = "Summoning..."
    submitButton.disabled = true
    formMessage.textContent = ""

    const formData = new FormData(contactForm)
    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Form submission:", { name, email, message })

    formMessage.textContent = "Your plea has been heard by the Oracle! Expect a divine response soon."
    contactForm.reset()
    submitButton.textContent = "Send Divine Message"
    submitButton.disabled = false
  })

  // Theme Toggle (Light/Dark Mode)
  const themeToggle = document.getElementById("theme-toggle")
  const body = document.body

  // Check for saved theme preference or default to dark
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme) {
    body.classList.add(savedTheme)
  } else {
    // Default to dark mode for God of War theme
    body.classList.add("dark-mode")
  }

  themeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode")
      body.classList.add("light-mode")
      localStorage.setItem("theme", "light-mode")
    } else {
      body.classList.remove("light-mode")
      body.classList.add("dark-mode")
      localStorage.setItem("theme", "dark-mode")
    }
  })
})

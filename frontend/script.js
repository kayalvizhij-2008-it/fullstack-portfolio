const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const contactData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  try {

    const response = await fetch("https://fullstack-portfolio-b6b0.onrender.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contactData)
    });

    const data = await response.json();

    alert(data.message);

    form.reset();

  } catch (error) {

    alert("Something went wrong");

  }
});
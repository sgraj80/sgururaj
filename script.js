const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  const currentTime = new Date().toLocaleTimeString();

  form.reset();

  alert(`Form submitted successfully at ${currentTime}`);
});

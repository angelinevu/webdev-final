function sendEmail() {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    emailjs.init("gRuiSgaLLhl-mMn1R");
    emailjs
      .send("service_s6mgzd6", "template_qveni25", {
        name: form.elements["name"].value,
        date: new Date().toLocaleString(),
        email: form.elements["email"].value,
        notes: form.elements["notes"].value,
      })
      .then(() => {
        alert("Email sent successfully!");
        form.reset();
      })
      .catch((error) => {
        alert("Failed to send email. Please try again later.");
        console.error("EmailJS error:", error);
      });
  });
}

sendEmail();

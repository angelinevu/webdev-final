function sendEmail() {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    EMAILJS_SDK_KEY = "gRuiSgaLLhl-mMn1R";
    EMAILJS_SERVICE_ID = "service_s6mgzd6";
    EMAILJS_TEMPLATE_ID = "template_qveni25";

    emailjs.init(EMAILJS_SDK_KEY);
    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
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

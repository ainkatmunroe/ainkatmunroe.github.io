const contactForm = document.getElementById("cta-signup-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
        e.preventDefault(); 
    const name = contactForm.name.value;
    const email = contactForm.email.value;
    const phone = contactForm.phone.value;
    const subject = contactForm.subject.value;
    const message = contactForm.message.value;
    var params = {
        name : name,
        email : email,
        phone : phone,
        subject : subject,
        message : message,
    }
        emailjs.send("100b5c8d-f192c4cb", "template_9cue60p", params) 
      .then((message) => {
        console.log(message);
        document.getElementById("cta-signup-form").reset(); 
        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  });
}

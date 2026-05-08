"use client";

export default function ContactForm() {

  const handleSubmit = (event: any) => {

    event.preventDefault();

    const nameInput =
      document.getElementById("name") as HTMLInputElement;

    const emailInput =
      document.getElementById("email") as HTMLInputElement;

    const messageInput =
      document.getElementById("message") as HTMLTextAreaElement;

    const result =
      document.getElementById("result");

    if (
      !nameInput.value ||
      !emailInput.value ||
      !messageInput.value
    ) {

      if (result) {
        result.textContent =
          "Please fill all fields.";
        result.className = "error";
      }

      return;
    }

    if (!emailInput.value.includes("@")) {

      if (result) {
        result.textContent =
          "Enter a valid email.";
        result.className = "error";
      }

      return;
    }

    if (result) {
      result.textContent =
        "Form submitted successfully!";
      result.className = "success";
    }

    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="contact-form"
    >

      <label htmlFor="name">
        Name
      </label>

      <input
        id="name"
        type="text"
        placeholder="Your name"
      />

      <label htmlFor="email">
        Email
      </label>

      <input
        id="email"
        type="email"
        placeholder="Your email"
      />

      <label htmlFor="message">
        Message
      </label>

      <textarea
        id="message"
        placeholder="Write your message"
      />

      <button type="submit">
        Submit
      </button>

      <p id="result"></p>
    </form>
  );
}
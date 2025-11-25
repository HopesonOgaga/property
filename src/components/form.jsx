import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Form() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r3aixbk",     // ← Replace
        "template_iht741k",    // ← Replace
        formRef.current,
        "SGuFAOwx5VAUXx2LS"      // ← Replace
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset(); // Clear form
        },
        (error) => {
          console.error("Email sending error:", error);
          alert("Failed to send message. Check console.");
        }
      );
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="flex flex-col gap-6 p-6 md:p-10 bg-white shadow-xl rounded-xl border border-gray-200"
    >
      {/* Name Fields */}
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#0A3D62]"
          required
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#0A3D62]"
          required
        />
      </div>

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#0A3D62]"
        required
      />

      {/* Message */}
      <div>
        <label className="block mb-2 font-medium">Your message</label>
        <textarea
          name="message"
          rows="5"
          placeholder="Write your message..."
          className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#0A3D62]"
          required
        ></textarea>
      </div>

      {/* Checkbox */}
      <div className="flex items-start gap-3">
        <input type="checkbox" name="consent" className="h-5 w-5 accent-[#0A3D62]" />
        <p className="text-sm opacity-80">
          I declare that I have obtained my client's authorization for their
          data to be used within the scope of ATP*.
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-[#0A3D62] text-white py-3 rounded-md hover:bg-[#082f4a] transition-colors"
      >
        Submit
      </button>
    </form>
  );
}

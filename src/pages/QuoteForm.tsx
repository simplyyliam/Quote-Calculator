import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

function QuoteForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function sendEmail(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      alert("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  const handleExit = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-xl p-8 md:p-10 border border-neutral-800 rounded-2xl shadow-lg space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">
            Request a Consultation
          </h1>
          <p className="text-sm text-neutral-400">
            Tell us what you’re looking for and we’ll get back to you shortly.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-6"
        >
          <div className="space-y-2">
            <label className="block text-sm font-medium">Your Name</label>
            <input
              type="text"
              name="user_name"
              className="w-full px-4 py-2 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
              required
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Email Address</label>
            <input
              type="email"
              name="user_email"
              className="w-full px-4 py-2 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="john@example.com"
              required
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows={5}
              className="w-full px-4 py-2 border border-neutral-700 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Let us know what you're looking for..."
              required
              disabled={loading}
            />
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={handleExit}
              className="px-4 py-2 text-sm border border-neutral-700 cursor-pointer rounded-lg hover transition"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white cursor-pointer rounded-lg transition disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Request"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default QuoteForm;

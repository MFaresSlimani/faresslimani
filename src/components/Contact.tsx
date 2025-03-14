
import { useState } from "react";
import { cn } from "@/lib/utils";
import AnimatedText from "./ui/AnimatedText";
import { Github, Linkedin, Mail, Phone, MessageSquare } from "lucide-react";

interface ContactProps {
  className?: string;
}

const Contact = ({ className }: ContactProps) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // This is a placeholder for form submission
    // In a real implementation, you would send this data to a server
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Thank you for your message! I'll get back to you soon.");
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      setTimeout(() => {
        setSubmitMessage("");
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className={cn("section-padding bg-surface-1", className)}>
      <div className="container mx-auto">
        <AnimatedText text="Get In Touch" className="section-title text-center" />
        <AnimatedText
          text="Let's discuss your project or research collaboration"
          className="section-subtitle text-center mx-auto"
          delay={200}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="text-text-secondary mb-8">
              Feel free to reach out to me directly or fill out the contact form. I'm always open to
              discussing new projects, research opportunities, or potential collaborations.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-accent-blue mr-4 mt-1" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+213558139901"
                    className="text-text-secondary hover:text-accent-blue transition-colors"
                  >
                    +213 558 139 901
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-5 h-5 text-accent-blue mr-4 mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:faresslimani0@gmail.com"
                    className="text-text-secondary hover:text-accent-blue transition-colors"
                  >
                    faresslimani0@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MessageSquare className="w-5 h-5 text-accent-blue mr-4 mt-1" />
                <div>
                  <h4 className="font-medium">Social Profiles</h4>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="https://github.com/faresS69"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent-blue transition-colors"
                      aria-label="GitHub profile"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="https://linkedin.com/in/faresslimani01"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent-blue transition-colors"
                      aria-label="LinkedIn profile"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 glass-card p-6">
              <h4 className="text-xl font-semibold mb-4">What I can help with</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-accent-blue mr-2">•</span>
                  <span>Flutter mobile app development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-blue mr-2">•</span>
                  <span>AI and machine learning research collaboration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-blue mr-2">•</span>
                  <span>Technical education and workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-blue mr-2">•</span>
                  <span>Data visualization and analysis</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="glass-card p-8">
              <div className="mb-6">
                <label htmlFor="name" className="block text-text-secondary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/70 border border-surface-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-text-secondary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/70 border border-surface-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-text-secondary mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/70 border border-surface-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/70 border border-surface-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue/50 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full px-6 py-3 bg-accent-blue text-white rounded-lg transition-all",
                  isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-accent-blue/90"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitMessage && (
                <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

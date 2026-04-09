import { Mail, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:sartajhamid561@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-14">
      <div className="max-w-2xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <Mail className="text-primary" size={24} />
          <h2 className="font-heading text-3xl font-700">Get In Touch</h2>
        </div>
        <form onSubmit={handleSubmit} className="card-glass rounded-2xl p-8 space-y-5">
          <div>
            <label className="block text-sm font-mono text-muted-foreground mb-2">Your Name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-mono text-muted-foreground mb-2">Your Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-mono text-muted-foreground mb-2">Message</label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-600 hover:opacity-90 transition-opacity"
          >
            <Send size={16} />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

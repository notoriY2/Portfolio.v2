import { useState, type FormEvent } from 'react';
import { useTheme } from '../context/ThemeContext';
import {
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  Download,
} from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FieldValidation {
  name: 'valid' | 'error' | 'untouched';
  email: 'valid' | 'error' | 'untouched';
  subject: 'valid' | 'error' | 'untouched';
  message: 'valid' | 'error' | 'untouched';
}

const SOCIALS = [
  {
    icon: Github,
    href: 'https://github.com/notoriY2',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/mosa-potsane-b029b7214/',
    label: 'LinkedIn',
  },
];

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateField(
  field: keyof FormState,
  value: string
): 'valid' | 'error' {
  if (field === 'email') {
    return validateEmail(value) ? 'valid' : 'error';
  }

  return value.trim().length >= 2 ? 'valid' : 'error';
}

export default function Contact() {
  const { isDark } = useTheme();

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [validation, setValidation] = useState<FieldValidation>({
    name: 'untouched',
    email: 'untouched',
    subject: 'untouched',
    message: 'untouched',
  });

  const monoFont = {
    fontFamily: "'Courier New', monospace",
  };

  const handleChange = (
    field: keyof FormState,
    value: string
  ) => {
    setForm(prev => ({
      ...prev,
      [field]: value,
    }));

    if (submitError) {
      setSubmitError(false);
    }

    if (validation[field] !== 'untouched') {
      setValidation(prev => ({
        ...prev,
        [field]: validateField(field, value),
      }));
    }
  };

  const handleBlur = (field: keyof FormState) => {
    setValidation(prev => ({
      ...prev,
      [field]: validateField(field, form[field]),
    }));
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const newValidation: FieldValidation = {
      name: validateField('name', form.name),
      email: validateField('email', form.email),
      subject: validateField('subject', form.subject),
      message: validateField('message', form.message),
    };

    setValidation(newValidation);

    const allValid = Object.values(newValidation).every(
      value => value === 'valid'
    );

    if (!allValid) return;

    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const response = await fetch(
        'https://formspree.io/f/xqpkrvbo',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
          body: new FormData(e.currentTarget),
        }
      );

      if (response.ok) {
        setSubmitted(true);

        setForm({
          name: '',
          email: '',
          subject: '',
          message: '',
        });

        setValidation({
          name: 'untouched',
          email: 'untouched',
          subject: 'untouched',
          message: 'untouched',
        });

        setTimeout(() => {
          setSubmitted(false);
        }, 6000);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const borderClass = (
    state: 'valid' | 'error' | 'untouched'
  ) => {
    if (state === 'valid') {
      return 'border-[#CE9635] shadow-[0_0_8px_rgba(206,150,53,0.2)]';
    }

    if (state === 'error') {
      return 'border-red-500 shadow-[0_0_8px_rgba(239,68,68,0.2)]';
    }

    return isDark
      ? 'border-white/10'
      : 'border-black/10';
  };

  const inputStyle = {
    backgroundColor: isDark
      ? 'rgba(18,18,18,0.6)'
      : 'rgba(245,245,245,0.5)',
    color: isDark ? '#e5e5e5' : '#1a1a1a',
  };

  return (
    <section
      id="contact"
      className="pt-20 sm:pt-28 lg:pt-32 pb-[60px]"
      style={{
        backgroundColor: isDark ? '#000000' : '#ffffff',
        marginTop: '-10px',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p
            className="text-base sm:text-sm tracking-widest uppercase text-[#CE9635] mb-4"
            style={monoFont}
          >
            Get In Touch
          </p>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{
              color: isDark ? '#e5e5e5' : '#1a1a1a',
              ...monoFont,
            }}
          >
            Let's Connect
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: contact details */}
          <div className="flex flex-col gap-8">
            <div>
              <h3
                className="text-xl sm:text-2xl font-bold tracking-tight mb-2"
                style={{
                  color: isDark ? '#e5e5e5' : '#1a1a1a',
                  ...monoFont,
                }}
              >
                Mosa Potsane
              </h3>

              <p className="text-base leading-relaxed" style={{ color: isDark ? '#a3a3a3' : '#525252' }}>
  Open to internship and junior developer roles. If you're hiring or
  scouting talent, I'd love to hear from you.
</p>
            </div>

            <div className="flex flex-col gap-5">
              <a
                href="mailto:mosapotsane700@gmail.com"
                className="flex items-start gap-4 group w-fit"
              >
                <Mail
                  size={20}
                  className="text-[#CE9635] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200"
                />

                <div>
                  <p
                    className={`text-base sm:text-sm font-semibold tracking-wide group-hover:text-[#CE9635] transition-colors ${
                      isDark
                        ? 'text-neutral-200'
                        : 'text-neutral-900'
                    }`}
                    style={monoFont}
                  >
                    Email
                  </p>

                  <p
                    className={`text-base sm:text-sm mt-1 group-hover:text-[#CE9635] transition-colors ${
                      isDark
                        ? 'text-neutral-400'
                        : 'text-neutral-600'
                    }`}
                  >
                    mosapotsane700@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+27635035882"
                className="flex items-start gap-4 group w-fit"
              >
                <Phone
                  size={20}
                  className="text-[#CE9635] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200"
                />

                <div>
                  <p
                    className={`text-base sm:text-sm font-semibold tracking-wide group-hover:text-[#CE9635] transition-colors ${
                      isDark
                        ? 'text-neutral-200'
                        : 'text-neutral-900'
                    }`}
                    style={monoFont}
                  >
                    Phone
                  </p>

                  <p
                    className={`text-base sm:text-sm mt-1 group-hover:text-[#CE9635] transition-colors ${
                      isDark
                        ? 'text-neutral-400'
                        : 'text-neutral-600'
                    }`}
                  >
                    +27 63 503 5882
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 w-fit">
                <MapPin
                  size={20}
                  className="text-[#CE9635] flex-shrink-0 mt-0.5"
                />

                <div>
                  <p
                    className={`text-base sm:text-sm font-semibold tracking-wide ${
                      isDark
                        ? 'text-neutral-200'
                        : 'text-neutral-900'
                    }`}
                    style={monoFont}
                  >
                    Location
                  </p>

                  <p
                    className={`text-base sm:text-sm mt-1 ${
                      isDark
                        ? 'text-neutral-400'
                        : 'text-neutral-600'
                    }`}
                  >
                    Colesberg, Northern Cape, South Africa
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              {SOCIALS.map(social => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded border transition-all duration-300 hover:bg-[#CE9635] hover:border-[#CE9635] hover:text-white group"
                    style={{
                      borderColor: isDark
                        ? 'rgba(206,150,53,0.3)'
                        : 'rgba(206,150,53,0.4)',
                      color: isDark
                        ? '#a3a3a3'
                        : '#525252',
                    }}
                    aria-label={social.label}
                  >
                    <Icon
                      size={20}
                      className="group-hover:text-white transition-colors"
                    />
                  </a>
                );
              })}
            </div>

            <div
              className="p-6 rounded-lg border"
              style={{
                backgroundColor: 'rgba(206,150,53,0.06)',
                borderColor: isDark
                  ? 'rgba(206,150,53,0.25)'
                  : 'rgba(206,150,53,0.3)',
              }}
            >
              <h4
                className="font-semibold mb-2"
                style={{
                  color: isDark ? '#e5e5e5' : '#1a1a1a',
                }}
              >
                Availability
              </h4>

              <p className="text-sm mb-4" style={{ color: isDark ? '#a3a3a3' : '#525252' }}>
  Actively looking for internships and entry-level developer roles —
  happy to jump on a call to discuss fit.
</p>

              <a
                href="/assets/Potsane-Resume.pdf"
                download="Potsane-Resume.pdf"
                className="inline-flex items-center gap-2 text-[#CE9635] hover:text-[#C04D30] font-medium transition-colors text-base sm:text-sm"
              >
                <Download size={16} />
                Download My Resume
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div>
            {submitted ? (
              <div
                className="rounded-lg border p-8 text-center flex flex-col items-center gap-4 animate-fade-in"
                style={{
                  backgroundColor: isDark
                    ? 'rgba(18,18,18,0.6)'
                    : 'rgba(245,245,245,0.5)',
                  borderColor: '#CE9635',
                }}
              >
                <CheckCircle
                  size={48}
                  className="text-[#CE9635]"
                />

                <h3
                  className="text-xl font-bold"
                  style={{
                    color: isDark
                      ? '#e5e5e5'
                      : '#1a1a1a',
                    ...monoFont,
                  }}
                >
                  Message Sent
                </h3>

                <p
                  className="text-base sm:text-sm"
                  style={{
                    color: isDark
                      ? '#a3a3a3'
                      : '#525252',
                  }}
                >
                  Thanks for reaching out — I'll get back to you
                  soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
                noValidate
              >
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{
                      color: isDark
                        ? '#a3a3a3'
                        : '#525252',
                      ...monoFont,
                    }}
                  >
                    Name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    disabled={isSubmitting}
                    value={form.name}
                    onChange={e =>
                      handleChange('name', e.target.value)
                    }
                    onBlur={() => handleBlur('name')}
                    placeholder="Your name"
                    autoComplete="name"
                    className={`w-full px-4 py-3 rounded border text-base sm:text-sm outline-none transition-all duration-300 disabled:opacity-50 ${borderClass(
                      validation.name
                    )}`}
                    style={inputStyle}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{
                      color: isDark
                        ? '#a3a3a3'
                        : '#525252',
                      ...monoFont,
                    }}
                  >
                    Email
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    disabled={isSubmitting}
                    value={form.email}
                    onChange={e =>
                      handleChange('email', e.target.value)
                    }
                    onBlur={() => handleBlur('email')}
                    placeholder="your@email.com"
                    autoComplete="email"
                    className={`w-full px-4 py-3 rounded border text-base sm:text-sm outline-none transition-all duration-300 disabled:opacity-50 ${borderClass(
                      validation.email
                    )}`}
                    style={inputStyle}
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-subject"
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{
                      color: isDark
                        ? '#a3a3a3'
                        : '#525252',
                      ...monoFont,
                    }}
                  >
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    disabled={isSubmitting}
                    value={form.subject}
                    onChange={e =>
                      handleChange('subject', e.target.value)
                    }
                    onBlur={() => handleBlur('subject')}
                    placeholder="Role you're hiring for"
                    className={`w-full px-4 py-3 rounded border text-base sm:text-sm outline-none transition-all duration-300 disabled:opacity-50 ${borderClass(
                      validation.subject
                    )}`}
                    style={inputStyle}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{
                      color: isDark
                        ? '#a3a3a3'
                        : '#525252',
                      ...monoFont,
                    }}
                  >
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    disabled={isSubmitting}
                    value={form.message}
                    onChange={e =>
                      handleChange('message', e.target.value)
                    }
                    onBlur={() => handleBlur('message')}
                    placeholder="Tell me about the role and your team..."
                    rows={5}
                    className={`w-full px-4 py-3 rounded border text-base sm:text-sm outline-none transition-all duration-300 resize-none disabled:opacity-50 ${borderClass(
                      validation.message
                    )}`}
                    style={inputStyle}
                  />
                </div>

                {/* Formspree error */}
                {submitError && (
                  <p
                    className="text-base sm:text-sm text-red-500"
                    role="alert"
                  >
                    Something went wrong sending your message —
                    please try again or email me directly.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded font-semibold tracking-wide text-white bg-[#CE9635] hover:shadow-[0_0_20px_rgba(206,150,53,0.4)] disabled:bg-neutral-600 disabled:hover:shadow-none transition-all duration-300 mt-2"
                  style={monoFont}
                >
                  <Send
                    size={18}
                    className={
                      isSubmitting
                        ? 'animate-pulse'
                        : ''
                    }
                  />

                  {isSubmitting
                    ? 'Sending...'
                    : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
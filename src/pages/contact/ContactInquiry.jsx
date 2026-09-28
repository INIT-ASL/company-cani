// src/pages/contact/ContactInquiry.jsx
import { useState } from 'react';
import PageHeader from '../../components/ui/PageHeader';
import SEO from '../../components/common/SEO';
import { Send, CheckCircle2, AlertCircle, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { submitInquiry } from '../../services/inquiryService';

export default function ContactInquiry() {
  const { language, t } = useLanguage();

  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
    _hp: '', // Honeypot field (hidden from real users, filled by bots)
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);
  const [serverError, setServerError] = useState('');

  const topicsList = t('contact.inquiry.topics') || [];

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = t('contact.inquiry.errors.nameRequired');
    if (!form.email.trim()) {
      errs.email = t('contact.inquiry.errors.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = t('contact.inquiry.errors.emailInvalid');
    }
    if (!form.message.trim()) errs.message = t('contact.inquiry.errors.messageRequired');
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      const response = await submitInquiry(form);
      setSubmissionResult(response);
      setSubmitted(true);
    } catch (err) {
      setServerError(
        err.message ||
          (language === 'en'
            ? 'An error occurred while transmitting your inquiry. Please try again.'
            : 'Terjadi kendala saat mengirim pesan Anda. Silakan coba kembali.')
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const inputStyle = (fieldName) =>
    `w-full px-3.5 py-2.5 bg-white border text-xs sm:text-sm rounded-[2px] transition-colors focus:outline-none ${
      errors[fieldName]
        ? 'border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50/30'
        : 'border-slate-300 focus:border-[#C0392B] focus:ring-1 focus:ring-[#C0392B]'
    }`;

  return (
    <>
      <SEO
        title={t('contact.inquiry.headerTitle')}
        description={t('contact.inquiry.headerDesc')}
      />
      <PageHeader
        breadcrumbs={[
          { label: t('nav.contact'), to: '/contact/info' },
          { label: t('contact.inquiry.headerTitle') },
        ]}
        kicker={language === 'en' ? 'COMMERCIAL INQUIRY' : 'PENGAJUAN KERJASAMA & SEWA'}
        title={t('contact.inquiry.headerTitle')}
        description={t('contact.inquiry.headerDesc')}
      />

      <section className="py-14 bg-white border-b border-slate-200 min-h-[65vh]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            /* Success Confirmation State */
            <div className="bg-[#F4F6F8] border border-slate-200 rounded-[3px] p-8 sm:p-12 text-center shadow-xs">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-[2px] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <div className="font-mono text-xs font-bold uppercase text-[#C0392B] tracking-widest mb-1">
                {submissionResult?.referenceId || 'TRANSMISSION CONFIRMED'}
              </div>

              <h2 className="text-xl sm:text-2xl font-bold font-display text-[#1E2A3A] mb-3">
                {t('contact.inquiry.successTitle')}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg mx-auto mb-8 font-sans">
                {(t('contact.inquiry.successMessage') || '')
                  .replace('{name}', form.name)
                  .replace('{email}', form.email)}
              </p>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setForm({
                    name: '',
                    company: '',
                    email: '',
                    phone: '',
                    topic: '',
                    message: '',
                    _hp: '',
                  });
                  setErrors({});
                }}
                className="inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#96281B] text-white px-6 py-2.5 rounded-[2px] text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <span>{t('contact.inquiry.btnAnother')}</span>
              </button>
            </div>
          ) : (
            /* Inquiry Form Card */
            <div className="bg-[#F4F6F8] border border-slate-200 rounded-[3px] p-6 sm:p-10 shadow-xs">
              <div className="mb-8 border-b border-slate-200 pb-4">
                <h2 className="font-display font-bold text-xl text-[#1E2A3A] mb-1">
                  {t('contact.inquiry.formTitle')}
                </h2>
                <p className="text-xs text-slate-500 font-sans">
                  {t('common.allFieldsRequired')}
                </p>
              </div>

              {serverError && (
                <div className="mb-6 p-3.5 bg-red-50 border border-red-200 rounded-[2px] flex items-start gap-2.5 text-xs text-red-700">
                  <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                  <span>{serverError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Anti-spam honeypot (Invisible to real users, catches bots) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={form._hp}
                    onChange={handleChange('_hp')}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1E2A3A] uppercase tracking-wider mb-1">
                      {t('contact.inquiry.nameLabel')} <span className="text-[#C0392B]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder={t('contact.inquiry.namePlaceholder')}
                      value={form.name}
                      onChange={handleChange('name')}
                      className={inputStyle('name')}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-sans">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1E2A3A] uppercase tracking-wider mb-1">
                      {t('contact.inquiry.companyLabel')}
                    </label>
                    <input
                      type="text"
                      placeholder={t('contact.inquiry.companyPlaceholder')}
                      value={form.company}
                      onChange={handleChange('company')}
                      className={inputStyle('company')}
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1E2A3A] uppercase tracking-wider mb-1">
                      {t('contact.inquiry.emailLabel')} <span className="text-[#C0392B]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder={t('contact.inquiry.emailPlaceholder')}
                      value={form.email}
                      onChange={handleChange('email')}
                      className={inputStyle('email')}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-sans">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1E2A3A] uppercase tracking-wider mb-1">
                      {t('contact.inquiry.phoneLabel')}
                    </label>
                    <input
                      type="tel"
                      placeholder={t('contact.inquiry.phonePlaceholder')}
                      value={form.phone}
                      onChange={handleChange('phone')}
                      className={inputStyle('phone')}
                    />
                  </div>
                </div>

                {/* Inquiry Topic */}
                <div>
                  <label className="block text-xs font-semibold text-[#1E2A3A] uppercase tracking-wider mb-1">
                    {t('contact.inquiry.topicLabel')}
                  </label>
                  <select
                    value={form.topic}
                    onChange={handleChange('topic')}
                    className={`${inputStyle('topic')} cursor-pointer`}
                  >
                    <option value="">{t('contact.inquiry.topicDefault')}</option>
                    {topicsList.map((top) => (
                      <option key={top} value={top}>
                        {top}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#1E2A3A] uppercase tracking-wider mb-1">
                    {t('contact.inquiry.messageLabel')} <span className="text-[#C0392B]">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder={t('contact.inquiry.messagePlaceholder')}
                    value={form.message}
                    onChange={handleChange('message')}
                    className={`${inputStyle('message')} resize-y`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-sans">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C0392B] hover:bg-[#96281B] active:bg-[#782015] text-white px-8 py-3 rounded-[2px] font-semibold text-xs tracking-wider uppercase transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-xs"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>{t('common.sending')}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t('contact.inquiry.submitBtn')}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

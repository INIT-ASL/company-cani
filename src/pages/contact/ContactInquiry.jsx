// src/pages/contact/ContactInquiry.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../../components/ui/PageHeader';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function ContactInquiry() {
  const { t } = useLanguage();

  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const topicsList = t('contact.inquiry.topics') || [];

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = t('contact.inquiry.errors.nameRequired');
    if (!form.email.trim()) e.email = t('contact.inquiry.errors.emailRequired');
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = t('contact.inquiry.errors.emailInvalid');
    if (!form.message.trim()) e.message = t('contact.inquiry.errors.messageRequired');
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    if (errors[field]) setErrors({ ...errors, [field]: '' });
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 transition-all ${
      errors[field]
        ? 'border-red-300 focus:ring-red-100 bg-red-50'
        : 'border-slate-200 focus:ring-[#C0392B]/10 focus:border-[#C0392B] bg-white'
    }`;

  const successMsg = (t('contact.inquiry.successMessage') || '')
    .replace('{name}', form.name)
    .replace('{email}', form.email);

  return (
    <>
      <PageHeader
        breadcrumb={t('contact.inquiry.breadcrumb')}
        title={t('contact.inquiry.headerTitle')}
        description={t('contact.inquiry.headerDesc')}
      />

      <section className="py-12 bg-[#F4F6F8] min-h-[60vh]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl border border-green-100 p-10 text-center shadow-sm"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              </div>
              <h2 className="text-xl font-bold text-[#1E2A3A] mb-2">
                {t('contact.inquiry.successTitle')}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {successMsg}
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: '', company: '', email: '', phone: '', topic: '', message: '' });
                }}
                className="inline-flex items-center gap-2 bg-[#C0392B] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#922B21] transition-colors"
              >
                {t('contact.inquiry.btnAnother')}
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8"
            >
              <h2 className="font-bold text-[#1E2A3A] text-xl mb-1">
                {t('contact.inquiry.formTitle')}
              </h2>
              <p className="text-slate-400 text-sm mb-6">
                {t('common.allFieldsRequired')}
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1E2A3A] mb-1.5">
                      {t('contact.inquiry.nameLabel')} <span className="text-[#C0392B]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder={t('contact.inquiry.namePlaceholder')}
                      value={form.name}
                      onChange={handleChange('name')}
                      className={inputClass('name')}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1E2A3A] mb-1.5">
                      {t('contact.inquiry.companyLabel')}
                    </label>
                    <input
                      type="text"
                      placeholder={t('contact.inquiry.companyPlaceholder')}
                      value={form.company}
                      onChange={handleChange('company')}
                      className={inputClass('company')}
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1E2A3A] mb-1.5">
                      {t('contact.inquiry.emailLabel')} <span className="text-[#C0392B]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder={t('contact.inquiry.emailPlaceholder')}
                      value={form.email}
                      onChange={handleChange('email')}
                      className={inputClass('email')}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1E2A3A] mb-1.5">
                      {t('contact.inquiry.phoneLabel')}
                    </label>
                    <input
                      type="tel"
                      placeholder={t('contact.inquiry.phonePlaceholder')}
                      value={form.phone}
                      onChange={handleChange('phone')}
                      className={inputClass('phone')}
                    />
                  </div>
                </div>

                {/* Topic */}
                <div>
                  <label className="block text-xs font-semibold text-[#1E2A3A] mb-1.5">
                    {t('contact.inquiry.topicLabel')}
                  </label>
                  <select
                    value={form.topic}
                    onChange={handleChange('topic')}
                    className={inputClass('topic') + ' cursor-pointer'}
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
                  <label className="block text-xs font-semibold text-[#1E2A3A] mb-1.5">
                    {t('contact.inquiry.messageLabel')} <span className="text-[#C0392B]">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder={t('contact.inquiry.messagePlaceholder')}
                    value={form.message}
                    onChange={handleChange('message')}
                    className={inputClass('message') + ' resize-none'}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-[#C0392B] text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-[#922B21] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      {t('common.sending')}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {t('contact.inquiry.submitBtn')}
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}

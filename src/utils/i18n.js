// src/utils/i18n.js

/**
 * Returns localized string from an object with { en, id } or returns the value if already string.
 * @param {string | object | null | undefined} field
 * @param {string} [lang='en']
 * @returns {string}
 */
export function getLocalized(field, lang = 'en') {
  if (field == null) return '';
  if (typeof field === 'object') {
    return field[lang] ?? field.en ?? field.id ?? '';
  }
  return String(field);
}

/**
 * Returns secondary language string (opposite of active language).
 * @param {string | object | null | undefined} field
 * @param {string} [lang='en']
 * @returns {string}
 */
export function getSecondaryLocalized(field, lang = 'en') {
  if (field == null) return '';
  if (typeof field === 'object') {
    const secondary = lang === 'en' ? 'id' : 'en';
    return field[secondary] ?? field[lang] ?? '';
  }
  return '';
}

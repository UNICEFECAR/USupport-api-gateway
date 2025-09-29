import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const en = require('./en.json');
const hy = require('./hy.json');
const kk = require('./kk.json');
const ru = require('./ru.json');
const pl = require('./pl.json');
const ro = require('./ro.json');
const uk = require('./uk.json');

const translations = {
  hy,
  en,
  kk,
  ru,
  uk,
  pl,
  ro,
};

/**
 *
 * @param {string} key the key of the translation
 * @param {string} language the alpha2 code of the language
 * @returns {string} the translated string
 */
export function t(key, language = 'en') {
  // Make sure the language exists and if not return the default language
  if (!Object.keys(translations).includes(language)) {
    return translations['en'][key];
  }
  return translations[language][key];
}

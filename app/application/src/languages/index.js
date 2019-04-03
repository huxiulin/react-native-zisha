/**
 * 多语言调用
 */

import Lang from 'react-native-i18n';
import en from './locales/en';
import zh from './locales/zh';

Lang.fallbacks = true;
Lang.defaultLocale = 'zh';
Lang.translations = {
    en,
    zh,
};
let currentLocale = Lang.defaultLocale;
try {
    let sysSelectedLocale = (Lang.currentLocale()).split('-')[0];
    if (typeof Lang.translations[sysSelectedLocale] != 'undefined') {
        currentLocale = sysSelectedLocale;
    }
} catch (error) {
}
Lang.currentSelectedLocale = currentLocale;
export default Lang;
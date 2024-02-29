import dot from 'dot-object';

import en from './en';
import pt from './pt';
import de from './de';

const languages = { en: dot.dot(en), pt: dot.dot(pt), de: dot.dot(de) };

export default languages;

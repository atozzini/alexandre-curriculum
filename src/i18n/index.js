import dot from 'dot-object';

import en from './en';
import pt from './pt';
import de from './de';
import it from './it';

const languages = { en: dot.dot(en), pt: dot.dot(pt), de: dot.dot(de), it: dot.dot(it) };

export default languages;

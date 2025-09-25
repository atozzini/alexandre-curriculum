// pages/index.js
import Resume from '../src/containers/Resume/Resume';
import customTheme from '../src/theme'; // importa o seu tema customizado

export default function Home() {
  return <Resume customTheme={customTheme} />;
}

import React from 'react';
import './App.css';

import adjectives from './data/adjectives';
import nouns from './data/nouns';
import separators from './data/separators';

const CHAR_UNDERSCORE = '_';
const CHAR_SPACE      = ' ';

/**
 * Replace spaces with underscores if a string contains both.
 * @param {String} text
 */
const checkForConsistentSpacing = (text, search, replace) => {
  if (/\s/.test(text) && /_/.test(text)) {
    text = text.replace(new RegExp(search, 'g'), replace);
  }
  return text;
}

/**
 * Generate an elite hacker name.
 */
const generateHackerName = () => {
  const adjective  = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun       = nouns[Math.floor(Math.random() * nouns.length)];
  const separator  = separators[Math.floor(Math.random() * separators.length)];
  const hackerName = checkForConsistentSpacing(`${adjective}${separator}${noun}`, CHAR_SPACE, CHAR_UNDERSCORE);
  return hackerName;
}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          &gt; your new hacker name is...
        </p>
        <p className="Text-hacker-name">
          {generateHackerName()}
        </p>
        <p className="Text-source-code">
          <a href="https://github.com/shadforth/hacker-name-generator">Source code on GitHub</a>
        </p>
      </header>
    </div>
  );
}

export default App;

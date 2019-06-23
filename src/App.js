import React from 'react';
import './App.css';

const adjectives = [
  'Raz0r',
  'Stealthy',
  'Wir3d',
  'Strange',
  'Sk1nny',
  'Gr3y',
  'R3d',
  'Angry',
  'S0ft',
  'Str0ng',
  'Hidd3n',
  'Sneaky',
  'K3yb0ard',
  'H0tcak3',
  'S3xy',
  'D0ct0r',
  'Mist3r',
  'M1ssy',
  'Zer0',
  'Secr3t',
  'L1ght',
  'He4vy',
  'Tr0ubled',
  'Sp1cy',
  'St4ck Trace',
  'Netw0rk',
  'Cut3',
  'W0rri3d',
  'Mast3r',
  'L4dy',
  'Hairy',
  'Cuddly',
  'Zuckerb3rg\'s',
  'Qu33n Elizab3th\'s'
];

const nouns = [
  'Intrud3r',
  'N1nja',
  'Spy',
  'Pr0be',
  'Sh0pp1ng Tr0lley',
  'Sn4ke',
  'Thief',
  'Muff1n',
  'Bunny',
  '0ni0n',
  'Cupc4ke',
  'Dr0ne',
  'Myst',
  'Cabbage',
  'Warri0r',
  'Ph4nt0m',
  'Expl0it',
  'Null P0int3r Excepti0n',
  'L0v3',
  'Disast3r',
  'M4chin3',
  'Andr0id',
  'Dr01d',
  'Phr34k',
  'Ang3l',
  'Ag3nt',
  'Gh0st',
  'Shad0w',
  'Buff3r Overfl0w',
  'Scr1pt K1tty',
  'Cucumb3r',
  'D0nut',
  'Wir3',
  'P0tat0',
  'Girl',
  'Be4r',
  'Sn0rlax',
  'St3ve J0bs'
];

const separators = [
  ' ',
  ' ',
  '_'
];

const generateHackerName = () => {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const separator = separators[Math.floor(Math.random() * separators.length)];
  return `${adjective}${separator}${noun}`
}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p className="text-normal">
          > your new hacker name is...
        </p>
        <p className="text-hacker-name">
          {generateHackerName()}
        </p>
        <p className="text-source-code">
          <a href="https://github.com/shadforth/hacker-name-generator">Source code on GitHub</a>
        </p>
      </header>
    </div>
  );
}

export default App;

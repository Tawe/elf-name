import React, {useState} from 'react';
import './App.css';
import {getElfName} from './elfNameUtils';

const months = [
  {
    month: 'january',
    names:['Sugar-Cookies', 'Angel-Pants', 'Sugar Plum', 'Frost-Feet']
  },
  {
    month: 'february',
    names:['Jingle Bells', 'Floppy-Feet', 'Rum-Balls', 'Sugar-Loaf']
  },
  {
    month: 'march',
    names:['Snowflake', 'Plum-Pants', 'Giggle Pants', 'Snowbells']
  },
  {
    month: 'april',
    names:['Candy Cane', 'McJingles', 'Sleighbells', 'Yule-Sprinkles']
  },
  {
    month: 'may',
    names:['Peartree', 'Peppermint', 'Sparkle Pants', 'Jingle-Hop', 'Hollyspring']
  },
  {
    month: 'june',
    names:['Merry Dancer', 'Toe-Bells', 'McRibbon', 'Snowybottom']
  },
  {
    month: 'july',
    names:['Fruitcake', 'Superplum', 'Twinkle Toes', 'Rosey-Cheeks']
  },
  {
    month: 'august',
    names:['Happy Feet', 'Sugar-Socks', 'Candy Canes', 'Jazzy-Hands']
  },
  {
    month: 'september',
    names:['Sugar-Plums', 'Pickel-Pants', 'Sugarplum-Fairy', 'Gingersnap']
  },
  {
    month: 'october',
    names:['Jolly-Drawers', 'Sparkley-Toes', 'Sparkle Toes', 'Fluffernut']
  },
  {
    month: 'november',
    names:['Silly Giggles', 'Monkey-Buns', 'Sleigh-Bells']
  },
  {
    month: 'december',
    names:['Snowman-Nose', 'Pointy-Toes', 'Jolly-Jingles']
  }
]
const letters = [
    {
      letter:'a',
      names:['Perky', 'Happy', 'Adventurous', 'Gumball']
    },
    {
      letter:'b',
      names:['Sparky', 'Bouncy', 'Jingle', 'Lollipop']
    },
    {
      letter:'c',
      names:['Snow', 'Peppy', 'Cuddly', 'Bubbly']
    },
    {
      letter:'d',
      names:['Dainty', 'Winter', 'Cranberry', 'Grumpy']
    },
    {
      letter:'e',
      names:['Jangle', 'Squeezy', 'Energetic', 'Tumbles']
    },
    {
      letter:'f',
      names:['Fearless', 'Jingle', 'Sunny', 'Giggles']
    },
    {
      letter:'g',
      names:['Merry', 'Winter', 'Flaky', 'Cocoa']
    },
    {
      letter:'h',
      names:['Tootsie', 'Spanky', 'Humble', 'Brandy']
    },
    {
      letter:'i',
      names:['Kringle', 'Peppermint', 'Innocent', 'Naughty']
    },
    {
      letter:'j',
      names:['Puddin', 'Figgy', 'Jumpy', 'Bossy']
    },
    {
      letter:'k',
      names:['Cookie', 'Glitter', 'Kindhearted', "Ol'"]
    },
    {
      letter:'l',
      names:['Tinker', 'Tinsel', 'Lively', 'Crusty']
    },
    {
      letter:'m',
      names:['Twinkle', 'Winter', 'Mighty', 'Busy']
    },
    {
      letter:'n',
      names:['Buddy', 'Twinkle', 'Nimble', 'Shiny']
    },
    {
      letter:'o',
      names:['Elfie', 'Garland', 'Outgoing', 'Zippy']
    },
    {
      letter:'p',
      names:['Jingle', 'Icy', 'Playful', 'Fancy']
    },
    {
      letter:'q',
      names:['Snowflake', 'Ralphie', 'Quick', 'Gumbo']
    },
    {
      letter:'r',
      names:['Jolly', 'Holly', 'Rosy', 'Salty']
    },
    {
      letter:'s',
      names:['Elvis', 'Cheeky', 'Stampy', 'Toothy']
    },
    {
      letter:'t',
      names:['Sugarplum', 'Vanilla', 'Thoughtful', 'Dancy']
    },
    {
      letter:'u',
      names:['Peaches', 'Nipper', 'Unique', 'Prancy']
    },
    {
      letter:'v',
      names:['Gingerbread', 'Flashy', 'Very Nice', 'Limber']
    },
    {
      letter:'w',
      names:['Frisbee', 'Frosty', 'Wiggly', 'Dandy']
    },
    {
      letter:'x',
      names:['Evergreen', 'Berry', 'Special']
    },
    {
      letter:'y',
      names:['Pinky', 'Sprinkle', 'Youthful', 'Snappy']
    },
    {
      letter:'z',
      names:['Tinsel', 'Star', 'Zesty', 'Swanky']
    }
]

function App() {
  const [elfName, setElfName] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('a');
  const [selectedMonth, setSelectedMonth] = useState('january');

  const handleGenerate = () => {
    const name = getElfName(selectedLetter, selectedMonth, months, letters);
    setElfName(name);
  };

  const handleShareTwitter = () => {
    const text = `My elf name is ${elfName}! 🎄 Find yours at:`;
    const url = window.location.href;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank', 'width=550,height=420');
  };

  const handleShareLinkedIn = () => {
    const url = window.location.href;
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, '_blank', 'width=550,height=420');
  };

  const monthOptions = months.map(({month}) => (
    <option key={month} value={month}>{month}</option>
  ));
  const letterOptions = letters.map(({letter}) => (
    <option key={letter} value={letter}>{letter}</option>
  ));

  return (
     <main className="App" role="main">
        <div className="wrapper">
          <header>
            <h1>🎄 Hit Submit to see your Elf Name 🎄</h1>
          </header>
          <section aria-label="Elf name result">
            <div className="nameDiv" role="status" aria-live="polite">
              {elfName || ''}
            </div>
          </section>
          <form onSubmit={(e) => { e.preventDefault(); handleGenerate(); }} aria-label="Elf name generator form">
            <div>
              <label htmlFor="letter-select">Select the first letter of your first name</label>
              <select 
                id="letter-select"
                value={selectedLetter} 
                onChange={(e) => setSelectedLetter(e.target.value)}
                className="select-dropdown"
                aria-label="First letter of your first name"
              >
                {letterOptions}
              </select>
            </div>
            <div>
              <label htmlFor="month-select">Select the Month you were born in</label>
              <select 
                id="month-select"
                value={selectedMonth} 
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="select-dropdown"
                aria-label="Month you were born"
              >
                {monthOptions}
              </select>
            </div>
            <button type="submit" onClick={handleGenerate}>Submit</button>
          </form>
          {elfName && (
            <section className="share-buttons" aria-label="Share your elf name">
              <button 
                onClick={handleShareTwitter} 
                className="share-button share-twitter"
                aria-label="Share on Twitter"
              >
                Share on Twitter
              </button>
              <button 
                onClick={handleShareLinkedIn} 
                className="share-button share-linkedin"
                aria-label="Share on LinkedIn"
              >
                Share on LinkedIn
              </button>
            </section>
          )}
      </div>
    </main>
  );
}

export default App;

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

  const monthOptions = months.map(({month}) => (
    <option key={month} value={month}>{month}</option>
  ));
  const letterOptions = letters.map(({letter}) => (
    <option key={letter} value={letter}>{letter}</option>
  ));

  return (
     <div className="App">
        <div className="wrapper">
          <h1>Hit Submit to see your Elf Name</h1>
          <div className="nameDiv">{elfName || ''}</div>
          <div>
            <label>Select the first letter of your first name</label>
            <select 
              value={selectedLetter} 
              onChange={(e) => setSelectedLetter(e.target.value)}
              className="select-dropdown"
            >
              {letterOptions}
            </select>
          </div>
          <div>
            <label>Select the Month you were born in</label>
            <select 
              value={selectedMonth} 
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="select-dropdown"
            >
              {monthOptions}
            </select>
          </div>
          <button onClick={handleGenerate}>Submit</button>
      </div>
    </div>
  );
}

export default App;

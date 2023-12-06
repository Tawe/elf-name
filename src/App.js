import React, {useState, useRef} from 'react';
import './App.css';

const months = [
  {
    month: 'january',
    names:['Sugar-Cookies', 'Angel-Pants', 'Sugar Plum', 'Frost-Feet']
  },
  {
    month: 'feburary',
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


const getName = (month, letter)=> {
  const monthObj = months.filter(monthArr => monthArr.month === month)[0]
  const letterObj = letters.filter(letterArr => letterArr.letter === letter)[0]
  
  const monthName = monthObj.names[Math.floor(Math.random()*monthObj.names.length)]
  const letterName = letterObj.names[Math.floor(Math.random()*letterObj.names.length)]

  return `${letterName} ${monthName}`;
}


const dropDownStyles = {
  textTransform: 'capitalize'
}

function App() {
  const [name, setName] =  useState(0)
  const handleClick = () =>{
    const letter = letterSelect.current
    const month = monthSelect.current
    const name = getName(month.options[month.selectedIndex].value, letter.options[letter.selectedIndex].value)
    setName(name);
  }
  const monthOptions = months.map(({month}) => <option key={month}>{month}</option>)
  const letterOptions = letters.map(({letter}) => <option key={letter}>{letter}</option>)
  const letterSelect = useRef();
  const monthSelect = useRef();

  return (
     <div className="App">
        <div className="wrapper">
          <h1>Hit Submit to see your Elf Name</h1>
          <div className="nameDiv">{name ? name : ''}</div>
          <div>
            <label>Select the first letter of your first name</label>
            <select ref={letterSelect} style={dropDownStyles}>{letterOptions}</select>
          </div>
          <div>
            <label>Select the Month you where born in</label>
            <select ref={monthSelect} style={dropDownStyles}>{monthOptions}</select>
          </div>
          <button onClick={()=>handleClick()}>Submit</button>
      </div>
    </div>
  );
}

export default App;

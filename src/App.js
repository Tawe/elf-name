import React, {useState, useRef} from 'react';
import './App.css';

const months = [
  {
    month: 'january',
    names:['Sugar-Cookies', 'Angel-Pants', 'Sugar Plum']
  },
  {
    month: 'feburary',
    names:['Jingle Bells', 'Floppy-Feet', 'Rum  -Balls']
  },
  {
    month: 'march',
    names:['Snowflake', 'Plum-Pants', 'Giggle Pants']
  },
  {
    month: 'april',
    names:['Candy Cane', 'McJingles', 'Sleighbells']
  },
  {
    month: 'may',
    names:['Peartree', 'Peppermint', 'Sparkle Pants']
  },
  {
    month: 'june',
    names:['Merry Dancer', 'Toe-Bells', 'McRibbon']
  },
  {
    month: 'july',
    names:['Fruitcake', 'Superplum', 'Twinkle Toes']
  },
  {
    month: 'august',
    names:['Happy Feet', 'Sugar-Socks', 'Candy Canes']
  },
  {
    month: 'september',
    names:['Sugar-Plums', 'Pickel-Pants', 'Sugarplum-Fairy']
  },
  {
    month: 'october',
    names:['Jolly-Drawers', 'Sparkley-Toes', 'Sparkle Toes']
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
      names:['Perky', 'Happy', 'Adventurous']
    },
    {
      letter:'b',
      names:['Sparky', 'Bouncy', 'Jingle']
    },
    {
      letter:'c',
      names:['Snow', 'Peppy', 'Cuddly']
    },
    {
      letter:'d',
      names:['Dainty', 'Winter', 'Cranberry']
    },
    {
      letter:'e',
      names:['Jangle', 'Squeezy', 'Energetic']
    },
    {
      letter:'f',
      names:['Fearless', 'Jingle', 'Sunny']
    },
    {
      letter:'g',
      names:['Merry', 'Winter', 'Flaky']
    },
    {
      letter:'h',
      names:['Tootsie', 'Spanky', 'Humble']
    },
    {
      letter:'i',
      names:['Kringle', 'Peppermint', 'Innocent']
    },
    {
      letter:'j',
      names:['Puddin', 'Figgy', 'Jumpy']
    },
    {
      letter:'k',
      names:['Cookie', 'Glitter', 'Kindhearted']
    },
    {
      letter:'l',
      names:['Tinker', 'Tinsel', 'Lively']
    },
    {
      letter:'m',
      names:['Twinkle', 'Winter', 'Mighty']
    },
    {
      letter:'n',
      names:['Buddy', 'Twinkle', 'Nimble']
    },
    {
      letter:'o',
      names:['Elfie', 'Garland', 'Outgoing']
    },
    {
      letter:'p',
      names:['Jingle', 'Icy', 'Playful']
    },
    {
      letter:'q',
      names:['Snowflake', 'Ralphie', 'Quick']
    },
    {
      letter:'r',
      names:['Jolly', 'Holly', 'Rosy']
    },
    {
      letter:'s',
      names:['Elvis', 'Cheeky', 'Stampy']
    },
    {
      letter:'t',
      names:['Sugarplum', 'Vanilla', 'Thoughtful']
    },
    {
      letter:'u',
      names:['Peaches', 'Nipper', 'Unique']
    },
    {
      letter:'v',
      names:['Gingerbread', 'Flashy', 'Very Nice']
    },
    {
      letter:'w',
      names:['Frisbee', 'Frosty', 'Wiggly']
    },
    {
      letter:'x',
      names:['Evergreen', 'Berry', 'Special']
    },
    {
      letter:'y',
      names:['Pinky', 'Sprinkle', 'Youthful']
    },
    {
      letter:'z',
      names:['Tinsel', 'Star', 'Zesty']
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
  );
}

export default App;

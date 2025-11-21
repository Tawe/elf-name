// Pure helper function for generating elf names
export const getElfName = (letter, month, months, letters) => {
  const monthObj = months.find(m => m.month === month);
  const letterObj = letters.find(l => l.letter === letter);
  
  if (!monthObj || !letterObj) {
    return '';
  }
  
  const monthName = monthObj.names[Math.floor(Math.random() * monthObj.names.length)];
  const letterName = letterObj.names[Math.floor(Math.random() * letterObj.names.length)];

  return `${letterName} ${monthName}`;
};


const makeItFunny = (str, n) => {
    let i = 0;
    let result = '';
    while (i < str.length) {
      const current = str[i];
      if ((i + 1) % n === 0) {
        result = `${result}${current.toUpperCase()}`;
      } else {
        result = `${result}${current}`;
      }
      i++;
    }
  
    return result;
  };

const text = 'I never look back';
// Каждый третий элемент
console.log(makeItFunny(text, 3)); // 'I NevEr LooK bAck'

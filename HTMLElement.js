const HTMLElement = (text) => {
  let openingTags = text.match(/<\w+>/g)
  let closingTags = text.match(/(<\/\w+>)/g).reverse();
  let strObj = {
    '<div>': '</div>',
    '<p>': '</p>',
    '<i>': '</i>',
    '<p>': '</p>',
    '<em>': '</em>',
    '<b>': '</b>',
  };
  
  const max = Math.max(openingTags.length, closingTags.length);
  
  for (let i = 0; i < max; i++) {
    if (strObj[openingTags[i]] !== closingTags[i]) {
      return (openingTags[i] || closingTags[i]).replace(/<|>/g, '');
    }
  }

  return true;
}

var text = "<div>asd</div><p><em><b>wololo wololo2 wololo3</i></em></p>";

console.log(HTMLElement(text));  
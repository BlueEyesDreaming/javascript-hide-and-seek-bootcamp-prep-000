 function getFirstSelector(selector) {
   return document.querySelector(selector)
 }

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function deepestChild() {
  return document.getElementById('grand-node').querySelector('div div div div div')
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i=0; i <lis.length; i++) {
    const int = parseInt(lis[i], 10)
    // lis[i].innerHTML = (i + n).toString()

  // for (let i=0; i <lis.length; i++) {
  //   const int = parseInt(lis[i], 10) + n
  //   lis[i].innerHTML = int.toString()

  }
  return lis
}

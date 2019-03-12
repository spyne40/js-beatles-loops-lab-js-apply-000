// add solution here



function theBeatlesPlay(musicians, instruments) {
  var sentences =[];
  var len = musicians.length;
  for (var i = 0; i < len; i++) { 
    sentences.push(musicians[i] + " plays " + instruments[i]);
  }
  return sentences;
}

function johnLennonFacts(facts) {
<<<<<<< HEAD
  var sentences =[];
  var len = facts.length;
  var i = 0; 
  while (i < len) {
    sentences.push(facts[i] + "!!!");
  i++;
  }
  return sentences;
}

function iLoveTheBeatles(number) {
  var sentences =[];
  do {
    sentences.push(`I love the Beatles!`);
    number++;
  }
  while (number<15);
  return sentences;
}
=======
  var len = facts.len;
  while (var i = 0; i < len; i++) {
    facts[i]=+"!!!"
  }
  return facts  
}

>>>>>>> 259bb458033b3388f22a2e93c272acb5344c7279

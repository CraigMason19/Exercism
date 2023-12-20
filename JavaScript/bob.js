const hey = (message) => {
  message = message.trim();
  
  // Deal with Whitespaces 
  if(/(\\[ntr])|\s{3,}/g.test(message) || message === '') {
    return "Fine. Be that way!";
  }

  // Lowercase all the anocronyms in the string
  const anocronyms = ['OK', 'DMV'];
  let newMessage = message;
  
  anocronyms.forEach((a) => {
    newMessage = newMessage.replace(a, a.toLowerCase());
  }); 
  
  // Capital letters with question mark
  if(/[A-Z]+[?]$/g.test(newMessage)) {
    return "Calm down, I know what I'm doing!";
  }
  
  // Capital letters
  if(/[A-Z]{2,}/g.test(newMessage)) {
    return "Whoa, chill out!";
  }

  // Ends in a question mark
  if(/\?$/g.test(newMessage)) {
    return "Sure.";
  }

  return "Whatever."
};

const messages = [
  'Hey Bob, fancy going for tea?',
  'STOP DOING THAT!',
];

messages.forEach(message => {
  console.log(hey(message));
});

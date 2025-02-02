```
const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
  const message = userInput.value;
  chatLog.innerHTML += `<p>You: ${message}</p>`;
  userInput.value = '';
  const response = `AI: ${message}`;
  chatLog.innerHTML += `<p>${response}</p>`;
});

userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendButton.click();
  }
});

function getIntent(message) {
  const tokens = tokenize(message);
  const intent = getIntentFromTokens(tokens);
  return intent;
}

function getResponse(intent) {
  const response = generateResponse(intent);
  return response;
}

function tokenize(message) {
  const tokens = message.split(' ');
  return tokens;
}

function getIntentFromTokens(tokens) {
  const intent = tokens[0];
  return intent;
}

function generateResponse(intent) {
  const response = `AI: ${intent}`;
  return response;
}
```

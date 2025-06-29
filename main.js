const chatLog = document.querySelector('.chat-log');
const userInput = document.querySelector('#user-input');
const sendButton = document.querySelector('#send-button');

sendButton.addEventListener('click', () => {
    const userMessage = userInput.value.trim();
    if (userMessage !== '') {
      const chatMessage = document.createElement('div');
      chatMessage.classList.add('chat-message');
      chatMessage.textContent = userMessage;
      chatLog.appendChild(chatMessage);
    // Process user message and respond
    const response = getResponse(userMessage);
    const responseMessage = document.createElement('div');
    responseMessage.classList.add('chat-message');
    responseMessage.textContent = response;
    chatLog.appendChild(responseMessage);
  }
});
   


function getResponse(userMessage) {
    // Simple chatbot logic
    if (userMessage.toLowerCase().includes('hello')) {
      return 'Hello! How can I assist you today?';
    } else if (userMessage.toLowerCase().includes('help')) {
      return 'I can help you with basic conversations. What do you need help with?';
    } else {
      return 'I didn\'t understand that. Can you please rephrase?';
    }
}  
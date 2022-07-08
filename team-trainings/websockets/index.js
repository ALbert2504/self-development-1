const $sendBtn = document.getElementById('send');
const $messages = document.getElementById('messages');
const $messageBox = document.getElementById('messageBox');

let ws;

function showMessage(message) {
  const m = document.createElement('p');
  m.innerHTML = `\n\n${message}`;
  $messages.appendChild(m);
  $messages.scrollTop = $messages.scrollHeight;
  $messageBox.value = '';
}

function init() {
  if (ws) {
    ws.onerror = ws.onopen = ws.onclose = null;
    ws.close();
  }

  ws = new WebSocket('ws://localhost:6969');
  ws.onopen = () => {
    console.log('Connection opened');
  };
  ws.onmessage = ({data}) => {
    console.log(data);
    // showMessage(data);

    const fr = new FileReader();

    fr.addEventListener('load', (e) => {
      console.log(e);
      showMessage(e.target.result);
    });
    fr.readAsText(data);
  };

  ws.onclose = () => {
    ws = null;  
  };

  $sendBtn.addEventListener('click', () => {
    if (!ws) {
      showMessage("No WebSocket connection");
      return;
    }

    console.log($messageBox.value);
    ws.send($messageBox.value);
    showMessage($messageBox.value);
  });
}

init();
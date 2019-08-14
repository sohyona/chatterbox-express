// eslint-disable-next-line
// const Message = document.querySelector(".messageBox");
// const Username = document.querySelector(".userName")
// const Text = document.querySelector(".text");
// const Date = document.querySelector(".date");

const app = {
  roomListArr: [],

  server: 'http://localhost:3000/classes/messages',

  addMessage: function (DATA) {
    // console.log(DATA);
    let messageBox = document.createElement ('div');
    messageBox.className = 'messageBox';
    messageBox.id = DATA.id;
    messageBox.setAttribute ('data-room', DATA.roomname);
    this.roomListArr.push (DATA.roomname);

    let userName = document.createElement ('div');
    userName.className = 'userName';
    userName.innerText = DATA.username;
    messageBox.insertAdjacentElement ('beforeend', userName);

    let text = document.createElement ('div');
    text.className = 'text';
    text.innerText = DATA.text;
    messageBox.insertAdjacentElement ('beforeend', text);

    let date = document.createElement ('div');
    date.className = 'date';
    date.innerText = DATA.roomname;
    messageBox.insertAdjacentElement ('beforeend', date);

    const chats = document.querySelector ('#chats');
    chats.insertAdjacentElement ('afterbegin', messageBox);
  },

  init: function (DATA) {
    for (let message in DATA) {
      app.addMessage (DATA[message]);
    }
  },

  fetch: function (callback) {
    fetch (this.server).then (response => response.json ()).then (response => {
      callback (response);
    });
  },

  send: function (message) {
    fetch (this.server, {
      method: 'POST',
      body: JSON.stringify (message),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then (response => {
        return response.json ();
      });

    // send 후에 window.fetch 가 있어야함
  },

  clearMessages: function () {
    document.querySelector ('#chats').innerText = '';
  },

  getRoomList: function () {
    // console.log(Object.getOwnPropertyNames(this.roomListObj))
    return this.roomListArr;
  },

  renderMessage: function (message) {
    this.addMessage (message);
  },

  postEvent: function () {
    var messageValue = document.getElementById ('text').value;
    // console.log (messageValue);
    var message = {
      username: 'Jono',
      text: 'Do my bidding!',
      roomname: 'codestates',
    };
    // console.log (this, this.send);
    this.send (message);
    setTimeout (function () {
      window.fetch (app.server).then (res => res.json ()).then (res => {
        // 서버에 요구한다.
        // console.log ('res', res);
        app.init (res.results);
      });
    }, 500);
  },
};

fetch (app.server).then (res => res.json ()).then (res => {
  // 서버에 요구한다.
  app.init (res.results);
});


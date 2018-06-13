function MessageOnPrivate(result) {

  if (isInScriptProperties(result)) {

    CheckMessageOnPrivate(result);

  } else if (result.message.text == '/start') {

    // keep chat_id for promotion or send news or other
    setInScriptProperties(result);


    //send welcome message to user
    var textMessage = new TextMessage(
      chat_id = result.message.chat.id + '',
      text = 'welcome to our robot'
    );
    sendTextMessage(textMessage);

  } else {
    var textMessage = new TextMessage(
      chat_id = result.message.chat.id + '',
      text = 'click /start to use this bot'
    );
    sendTextMessage(textMessage);
  }
}

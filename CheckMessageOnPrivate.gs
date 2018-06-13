function CheckMessageOnPrivate(result) {
  if (isTextMessage(result)) {

    var msg = new TextMessage(
      chat_id = result.message.chat.id + '',
      text = 'your message is text'
    );
    sendTextMessage(msg);
    // do something else

  } else if (isAudioMessage(result)) {

    var msg = new TextMessage(
      chat_id = result.message.chat.id + '',
      text = 'your message is audio'
    );
    sendTextMessage(msg);
    // do something else

  } else if (isStickerMessage(result)) {

    var msg = new TextMessage(
      chat_id = result.message.chat.id + '',
      text = 'your message is sticker'
    );
    sendTextMessage(msg);
    // do something else

  } else if (isVideoMessage(result)) {

    var msg = new TextMessage(
      chat_id = result.message.chat.id + '',
      text = 'your message is video'
    );
    sendTextMessage(msg);
    // do something else

  } else if (isPhotoMessage(result)) {

    var msg = new TextMessage(
      chat_id = result.message.chat.id + '',
      text = 'your message is photo'
    );
    sendTextMessage(msg);
    // do something else

  } else if (isDocumentMessage(result)) {

    var msg = new TextMessage(
      chat_id = result.message.chat.id + '',
      text = 'your message is document'
    );
    sendTextMessage(msg);
    // do something else

  } else if (isGameMessage(result)) {

    var msg = new TextMessage(
      chat_id = result.message.chat.id + '',
      text = 'your message is game'
    );
    sendTextMessage(msg);
    // do something else

  } else if (isVoiceMessage(result)) {

    var msg = new TextMessage(
      chat_id = result.message.chat.id + '',
      text = 'your message is voice'
    );
    sendTextMessage(msg);
    // do something else

  }
}
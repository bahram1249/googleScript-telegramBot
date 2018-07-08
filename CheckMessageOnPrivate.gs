function CheckMessageOnPrivate(result) {
  if (isTextMessage(result)) {

    var msg = {
      chat_id : String(result.message.chat.id),
      text : 'Your Message Is Text'
    }
    sendTextMessage(msg);
    // do something else

  } else if (isAudioMessage(result)) {

    var msg = {
      chat_id: String(result.message.chat.id),
      text: 'Your Message Is Audio'
    }

    sendTextMessage(msg);
    // do something else

  } else if (isStickerMessage(result)) {

    var msg = {
      chat_id: String(result.message.chat.id),
      text: 'Your Message Is Sticker'
    }

    sendTextMessage(msg);
    // do something else

  } else if (isVideoMessage(result)) {

    var msg = {
      chat_id: String(result.message.chat.id),
      text: 'Your Message Is Video'
    }

    sendTextMessage(msg);
    // do something else

  } else if (isPhotoMessage(result)) {

    var msg = {
      chat_id: String(result.message.chat.id),
      text: 'Your Message Is Photo'
    }

    sendTextMessage(msg);
    // do something else

  } else if (isDocumentMessage(result)) {

    var msg = {
      chat_id: String(result.message.chat.id),
      text: 'Your Message Is Document'
    }

    sendTextMessage(msg);
    // do something else

  } else if (isGameMessage(result)) {

    var msg = {
      chat_id: String(result.message.chat.id),
      text: 'Your Message Is Game'
    }
    sendTextMessage(msg);
    // do something else

  } else if (isVoiceMessage(result)) {

    var msg = {
      chat_id: String(result.message.chat.id),
      text: 'Your Message Is Voice'
    }
    sendTextMessage(msg);
    // do something else

  }
}
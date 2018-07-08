function isStickerMessage(result) {
  if (result.message.sticker) {
    return true;
  }
  return false;
}

/*
  chat_id
  sticker
  disable_notification
  reply_to_message_id
  reply_markup
*/

function sendSticker(stickerMessage) {

  var params = {
    method: 'POST',
    //muteHttpExceptions:true,
    escaping: true,
    payload: stickerMessage
  }

  try {

    var sendMessageResponce = UrlFetchApp.fetch(url + '/sendSticker', params);

    var result = JSON.parse(sendMessageResponce.getContentText()).result;
    Logger.log(result);

  } catch (e) {

    // send error to save error

  };
}
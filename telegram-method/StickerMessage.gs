function isStickerMessage(result){
    if(result.message.sticker){
      return true;
    }
    return false;
}

function StickerMessage(chat_id, sticker, disable_notification, reply_to_message_id, reply_markup){
  this.chat_id = chat_id;
  this.sticker = sticker;
  this.disable_notification = disable_notification;
  this.reply_to_message_id = reply_to_message_id;
  this.reply_markup = reply_markup;
}

function sendSticker(stickerMessage) {

  var params = {
    method: 'POST',
    //muteHttpExceptions:true,
    escaping: true,
    payload: { chat_id: stickerMessage.chat_id, sticker: stickerMessage.sticker }
  }

  if (stickerMessage.caption) {
    params.payload.caption = stickerMessage.caption;
  }
  if (stickerMessage.parse_mode) {
    params.payload.parse_mode = stickerMessage.parse_mode;
  }
  if(stickerMessage.reply_to_message_id){
    params.payload.reply_to_message_id = reply_to_message_id;
  }
  if (stickerMessage.disable_notification) {
    params.payload.disable_notification = stickerMessage.disable_notification;
  }
  if (stickerMessage.reply_markup) {
    params.payload.reply_markup = stickerMessage.reply_markup;
  }

  try {

    var sendMessageResponce = UrlFetchApp.fetch(url + '/sendSticker', params);

    var result = JSON.parse(sendMessageResponce.getContentText()).result;
    Logger.log(result);

  } catch (e) {

    // send error to save error

  };
}
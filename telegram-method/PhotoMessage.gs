function isPhotoMessage(result){
  if(result.message.photo){
    return true;
  }
  return false;
}

/*
parse_mode = Markdown or HTML
*/

function PhotoMessage(chat_id, photo, caption, parse_mode, disable_notification, reply_to_message_id, reply_markup){
  this.chat_id = chat_id;
  this.photo = photo;
  this.caption = caption;
  this.parse_mode = parse_mode;
  this.disable_notification = disable_notification;
  this.reply_to_message_id = reply_to_message_id;
  this.reply_markup = reply_markup;
}

// send text message
function sendPhoto(photoMessage) {

  var params = {
    method: 'POST',
    //muteHttpExceptions:true,
    escaping: true,
    payload: { chat_id: photoMessage.chat_id, photo: photoMessage.photo }
  }

  if (photoMessage.caption) {
    params.payload.caption = photoMessage.caption;
  }
  if (photoMessage.parse_mode) {
    params.payload.parse_mode = photoMessage.parse_mode;
  }
  if (photoMessage.disable_notification) {
    params.payload.disable_notification = photoMessage.disable_notification;
  }
  if (photoMessage.reply_to_message_id) {
    params.payload.reply_to_message_id = photoMessage.reply_to_message_id;
  }
  if (photoMessage.reply_markup) {
    params.payload.reply_markup = JSON.stringify(photoMessage.reply_markup);
  }


  try {

    var sendMessageResponce = UrlFetchApp.fetch(url + '/sendPhoto', params);

    var result = JSON.parse(sendMessageResponce.getContentText()).result;
    Logger.log(result);

  } catch (e) {

    // send error to save error

  };


}
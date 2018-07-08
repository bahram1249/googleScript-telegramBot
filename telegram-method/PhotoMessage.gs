function isPhotoMessage(result) {
  if (result.message.photo) {
    return true;
  }
  return false;
}

/*
parse_mode = Markdown or HTML
*/

/*
  photoMessage Object:
  chat_id
  photo
  caption
  parse_mode
  disable_notification
  reply_to_message_id
  reply_markup
*/


// send text message
function sendPhoto(photoMessage) {

  var params = {
    method: 'POST',
    //muteHttpExceptions:true,
    escaping: true,
    payload: photoMessage
  }

  try {

    var sendMessageResponce = UrlFetchApp.fetch(url + '/sendPhoto', params);

    var result = JSON.parse(sendMessageResponce.getContentText()).result;
    Logger.log(result);

  } catch (e) {

    // send error to save error

  };


}
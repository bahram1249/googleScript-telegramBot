function isTextMessage(result) {
  if (result.message.text) {
    return true;
  }
  return false;
}


/*
parse_mode = Markdown or HTML
*/

/*
  textMessage Object:
  chat_id
  text
  reply_to_message_id
  parse_mode
  reply_markup
  disable_web_page_preview
  disable_notification
*/

// send text message
function sendTextMessage(textMessage) {

  var params = {
    method: 'POST',
    //muteHttpExceptions:true,
    escaping: true,
    payload: textMessage
  }

  try {

    var sendMessageResponce = UrlFetchApp.fetch(url + '/sendMessage', params);

    var result = JSON.parse(sendMessageResponce.getContentText()).result;
    Logger.log(result);

  } catch (e) {

    Logger.log(e);
    // send error to save error

  };


}


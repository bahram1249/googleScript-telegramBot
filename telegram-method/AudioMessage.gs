function isAudioMessage(result) {
  if (result.message.audio) {
    return true;
  }
  return false;
}

/*
parse_mode = Markdown or HTML
*/

/*
  audioMessage Object :
  chat_id
  audio
  parse_mode
  caption
  duration
  performer
  title
  disble_notification
  reply_to_message_id
  reply_markup
*/

function sendAudio(audioMessage) {

  var params = {
    method: 'POST',
    //muteHttpExceptions:true,
    escaping: true,
    payload: audioMessage
  }

  try {

    var sendMessageResponce = UrlFetchApp.fetch(url + '/sendAudio', params);

    var result = JSON.parse(sendMessageResponce.getContentText()).result;
    Logger.log(result);

  } catch (e) {

    // send error to save error

  };


}

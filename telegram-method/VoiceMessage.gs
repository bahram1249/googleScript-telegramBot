function isVoiceMessage(result) {
  if (result.message.voice) {
    return true;
  }
  return false;
}

/*
  voiceMessage Object:
  chat_id
  voice
  caption
  parse_mode
  duration
  disable_notification
  reply_to_message_id
  reply_markup
*/

function sendVoice(voiceMessage) {

  var params = {
    method: 'POST',
    //muteHttpExceptions:true,
    escaping: true,
    payload: voiceMessage
  }

  try {

    var sendMessageResponce = UrlFetchApp.fetch(url + '/sendVoice', params);

    var result = JSON.parse(sendMessageResponce.getContentText()).result;
    Logger.log(result);

  } catch (e) {

    // send error to save error

  };
}
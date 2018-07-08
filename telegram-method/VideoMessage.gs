function isVideoMessage(result) {
  if (result.message.video) {
    return true;
  }
  return false;
}

/*
parse_mode = Markdown or HTML
*/

/*
  videoMessage Object:
  chat_id
  video
  duration
  width
  height
  caption
  parse_mode
  supports_streaming
  disable_notification
  reply_to_message_id
  reply_markup
*/

// send video message
function sendVideo(videoMessage) {

  var params = {
    method: 'POST',
    //muteHttpExceptions:true,
    escaping: true,
    payload: videoMessage
  }

  try {

    var sendMessageResponce = UrlFetchApp.fetch(url + '/sendVideo', params);

    var result = JSON.parse(sendMessageResponce.getContentText()).result;
    Logger.log(result);

  } catch (e) {

    // send error to save error

  };


}
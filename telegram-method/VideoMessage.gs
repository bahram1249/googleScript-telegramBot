function isVideoMessage(result) {
  if (result.message.video) {
    return true;
  }
  return false;
}

/*
parse_mode = Markdown or HTML
*/

function VideoMessage(chat_id, video, duration, width, height, caption, parse_mode, supports_streaming, disable_notification, reply_to_message_id, reply_markup) {
  this.chat_id = chat_id;
  this.video = video;
  this.duration = duration;
  this.width = width;
  this.height = height;
  this.caption = caption;
  this.parse_mode = parse_mode;
  this.supports_streaming = supports_streaming;
  this.disable_notification = disable_notification;
  this.reply_to_message_id = reply_to_message_id;
  this.reply_markup = reply_markup;
}

// send video message
function sendVideo(videoMessage) {

  var params = {
    method: 'POST',
    //muteHttpExceptions:true,
    escaping: true,
    payload: { chat_id: videoMessage.chat_id, video: videoMessage.video }
  }

  if (videoMessage.duration) {
    params.payload.duration = videoMessage.duration;
  }
  if (videoMessage.width) {
    params.payload.width = videoMessage.width;
  }
  if (videoMessage.height) {
    params.payload.height = videoMessage.height;
  }
  if (videoMessage.caption) {
    params.payload.caption = videoMessage.caption;
  }
  if (videoMessage.parse_mode) {
    params.payload.parse_mode = videoMessage.parse_mode;
  }
  if (videoMessage.supports_streaming) {
    params.payload.supports_streaming = videoMessage.supports_streaming;
  }
  if (videoMessage.reply_to_message_id) {
    params.payload.reply_to_message_id = videoMessage.reply_to_message_id;
  }
  if (videoMessage.disable_notification) {
    params.payload.disable_notification = videoMessage.disable_notification;
  }
  if (videoMessage.reply_markup) {
    params.payload.reply_markup = JSON.stringify(videoMessage.reply_markup);
  }

  try {

    var sendMessageResponce = UrlFetchApp.fetch(url + '/sendVideo', params);

    var result = JSON.parse(sendMessageResponce.getContentText()).result;
    Logger.log(result);

  } catch (e) {

    // send error to save error

  };


}
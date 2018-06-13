function isVoiceMessage(result){
  if(result.message.voice){
    return true;
  }
  return false;
}

function VoiceMessage(chat_id, voice, caption, parse_mode, duration, disable_notification, reply_to_message_id, reply_markup){
  this.chat_id = chat_id;
  this.voice = voice;
  this.caption = caption;
  this.parse_mode = parse_mode;
  this.duration = duration;
  this.disable_notification = disable_notification;
  this.reply_to_message_id = reply_to_message_id;
  this.reply_markup = reply_markup;
}

function sendVoice(voiceMessage) {

  var params = {
    method: 'POST',
    //muteHttpExceptions:true,
    escaping: true,
    payload: { chat_id: voiceMessage.chat_id, voice: voiceMessage.voice }
  }

  if (voiceMessage.caption) {
    params.payload.caption = voiceMessage.caption;
  }
  if (voiceMessage.parse_mode) {
    params.payload.parse_mode = voiceMessage.parse_mode;
  }
  if (voiceMessage.duration) {
    params.payload.duration = voiceMessage.duration;
  }
  if (voiceMessage.disable_notification) {
    params.payload.disable_notification = voiceMessage.disable_notification;
  }
  if (voiceMessage.reply_to_message_id) {
    params.payload.reply_to_message_id = voiceMessage.reply_to_message_id;
  }
  if (voiceMessage.reply_markup) {
    params.payload.reply_markup = voiceMessage.reply_markup;
  }

  try {

    var sendMessageResponce = UrlFetchApp.fetch(url + '/sendVoice', params);

    var result = JSON.parse(sendMessageResponce.getContentText()).result;
    Logger.log(result);

  } catch (e) {

    // send error to save error

  };
}
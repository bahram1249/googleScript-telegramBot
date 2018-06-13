function isAudioMessage(result){
  if(result.message.audio){
    return true;
  }
  return false;
}

/*
parse_mode = Markdown or HTML
*/

function AudioMessage(chat_id , audio, caption, parse_mode, duration, performer, title, disable_notification, reply_to_message_id, reply_markup){
  this.chat_id = chat_id;
  this.audio = audio;
  this.parse_mode = parse_mode || 'Markdown';
  this.caption = caption;
  this.duration = duration;
  this.performer = performer;
  this.title = title;
  this.disable_notification = disable_notification;
  this.reply_to_message_id = reply_to_message_id;
  this.reply_markup = reply_markup;
}

function sendAudio(audioMessage){

  var params = {
    method: 'POST',
    //muteHttpExceptions:true,
    escaping: true,
    payload:{chat_id:audioMessage.chat_id,audio:audioMessage.audio}
  }

  if(audioMessage.parse_mode){
    params.payload.parse_mode = audioMessage.parse_mode;
  }
  if(audioMessage.caption){
    params.payload.caption = audioMessage.caption;
  }
  if(audioMessage.duration){
    params.payload.duration = audioMessage.duration;
  }
  if(audioMessage.performer){
    params.payload.performer = audioMessage.performer;
  }
  if(audioMessage.title){
    params.payload.title = audioMessage.title;
  }
  if(audioMessage.disable_notification){
    params.payload.disable_notification = audioMessage.disable_notification;
  }
  if(audioMessage.reply_to_message_id){
    params.payload.reply_to_message_id = audioMessage.reply_to_message_id;
  }
  if(audioMessage.reply_markup){
    params.payload.reply_markup = JSON.stringify(audioMessage.reply_markup);
  }


  try{

    var sendMessageResponce = UrlFetchApp.fetch(url + '/sendAudio', params);

    var result = JSON.parse(sendMessageResponce.getContentText()).result;
    Logger.log(result);

  }catch(e){

    // send error to save error

  };


}

function isTextMessage(result){
  if(result.message.text){
    return true;
  }
  return false;
}


/*
parse_mode = Markdown or HTML
*/

function TextMessage(chat_id , text, parse_mode, disable_notification, reply_to_message_id, disable_web_page_preview,reply_markup){
  this.chat_id = chat_id;
  this.text = text;
  this.reply_to_message_id = reply_to_message_id;
  this.parse_mode = parse_mode || 'Markdown';
  this.reply_markup = reply_markup;
  this.disable_web_page_preview = disable_web_page_preview;
  this.disable_notification = disable_notification;
}

// send text message
function sendTextMessage(textMessage){

  var params = {
    method: 'POST',
    //muteHttpExceptions:true,
    escaping: true,
    payload:{chat_id:textMessage.chat_id,text:textMessage.text}
  }
  
  if(textMessage.parse_mode){
    params.payload.parse_mode = textMessage.parse_mode;
  }
  if(textMessage.reply_to_message_id){
    params.payload.reply_to_message_id = textMessage.reply_to_message_id;
  }
  if(textMessage.reply_markup){
    params.payload.reply_markup = JSON.stringify(textMessage.reply_markup);
  }
  if(textMessage.disable_web_page_preview){
    params.payload.disable_web_page_preview = textMessage.disable_web_page_preview;
  }
  if(textMessage.disable_notification){
    params.payload.disable_notification = textMessage.disable_notification;
  }
  
  try{
  
    var sendMessageResponce = UrlFetchApp.fetch(url + '/sendMessage', params);
    
    var result = JSON.parse(sendMessageResponce.getContentText()).result;
    Logger.log(result);
    
  }catch(e){
  
    // send error to save error
    
  };
  

}


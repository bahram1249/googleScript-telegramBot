function isDocumentMessage(result){
  if(result.message.document){
    return true;
  }
  return false;
}

/*
parse_mode = Markdown or HTML
*/

function DocumentMessage(chat_id, document, caption, parse_mode, disable_notification, reply_to_message_id, reply_markup){
  this.chat_id = chat_id;
  this.document = document;
  this.caption = caption;
  this.parse_mode = parse_mode || 'Markdown';
  this.disable_notification = disable_notification;
  this.reply_to_message_id = reply_to_message_id;
  this.reply_markup = reply_markup;
}

function sendDocument(documentMessage){

    var params = {
    method: 'POST',
    //muteHttpExceptions:true,
    escaping: true,
    payload:{chat_id:documentMessage.chat_id,document:documentMessage.document}
  }
  
  if(documentMessage.caption){
    params.payload.caption = documentMessage.caption;
  }
  if(documentMessage.parse_mode){
    params.payload.parse_mode = documentMessage.parse_mode;
  }
  if(documentMessage.disable_notification){
    params.payload.disable_notification = documentMessage.disable_notification;
  }
  if(documentMessage.reply_to_message_id){
    params.payload.reply_to_message_id = documentMessage.reply_to_message_id;
  }
  if(documentMessage.reply_markup){
    params.payload.reply_markup = documentMessage.reply_markup;
  }
  
  try{
  
    var sendMessageResponce = UrlFetchApp.fetch(url + '/sendDocument', params);
    
    var result = JSON.parse(sendMessageResponce.getContentText()).result;
    Logger.log(result);
    
  }catch(e){
  
    // send error to save error
    
  };
}
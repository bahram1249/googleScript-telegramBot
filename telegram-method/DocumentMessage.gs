function isDocumentMessage(result) {
  if (result.message.document) {
    return true;
  }
  return false;
}

/*
parse_mode = Markdown or HTML
*/

/*
  documentMessage Object :
  chat_id
  document
  caption
  parse_mode
  disable_notification
  reply_to_message_id
  reply_markup
*/

function sendDocument(documentMessage) {

  var params = {
    method: 'POST',
    //muteHttpExceptions:true,
    escaping: true,
    payload: documentMessage
  }

  try {

    var sendMessageResponce = UrlFetchApp.fetch(url + '/sendDocument', params);

    var result = JSON.parse(sendMessageResponce.getContentText()).result;
    Logger.log(result);

  } catch (e) {

    // send error to save error

  };
}
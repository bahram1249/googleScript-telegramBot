function doPost(e) {
  var result = JSON.parse(e.postData.contents);

  var scriptProperties = PropertiesService.getScriptProperties();
  scriptProperties.setProperty('1', JSON.stringify(result));

  var textMessage = {
    chat_id : String(result.message.chat.id),
    text : JSON.stringify(result)
  };
  sendTextMessage(textMessage);


  if (isPrivateMessage(result)) {

    var msg = {
      chat_id: String(result.message.chat.id),
      text: 'Is Private Message'
    }
    sendTextMessage(msg);
    
    MessageOnPrivate(result);

  } else if (isGroupMessage(result)) {

    var msg = {
      chat_id: String(result.message.chat.id),
      text: 'Is Group Message'
    }

    sendTextMessage(msg);
    // do some thing else

  } else if (isSuperGroupMessage(result)) {

    var msg = {
      chat_id: String(result.message.chat.id),
      text: 'Is Super Group Message'
    }

    sendTextMessage(msg);
    // do some thing else

  } else if (isChannelMessage(result)) {

    var msg = {
      chat_id: String(result.message.chat.id),
      text: 'Is Channel Message'
    }


    sendTextMessage(msg);
    // do some thing else

  }

}

function doGet(e) {

  //return HtmlService.createHtmlOutput(JSON.stringify(e));
  return HtmlService.createHtmlOutput("<html><head><title>telegram responce</title><script>window.close();</script></head><body><h1>hello world</h1></body></html>")
}


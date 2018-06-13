function isInUserPropeties(result) {
  var userProperties = PropertiesService.getUserProperties();
  if (userProperties.getProperty(result.message.chat.id + '')) {
    return true;
  }
  return false;
}

function isInScriptProperties(result) {
  var scriptProperties = PropertiesService.getScriptProperties();
  if (scriptProperties.getProperty(result.message.chat.id + '')) {
    return true;
  }
  return false;
}


// keep chat_id telegram
function setInScriptProperties(result) {
  var scriptProperties = PropertiesService.getScriptProperties();
  scriptProperties.setProperty(result.message.chat.id + '', JSON.stringify(result.message.chat));
}


// send keyboard message
function doTest() {
  var array = [];
  var reply_markup = { "keyboard": [[{ "text": "secondsKeyboard" }]] };

  /*var reply_markup = {
    "inline_keyboard":[[{
      "text":"inline_keyboard",
      "url":"https://google.com"
    }]]}
    */
  /*var reply_markup = {
    "inline_keyboard":[[{
      "text":"inline_keyboard",
      "callback_data":"myCallBackData"
    }]]}*/

  var textMessage = new TextMessage(
    chat_id = 74345873 + '',
    text = 'bahram',
    reply_to_message_id = null,
    parse_mode = 'HTML',
    reply_markup = reply_markup,
    disable_notification = false,
    disable_web_page_preview = true
  );
  sendTextMessage(textMessage);
}


// remove keyboard with one messge
function removeKeyboard(txt) {
  var reply = {
    "remove_keyboard": true,
    "selective": true
  };
  var textMessage = new TextMessage(
    chat_id = 74345873 + '',
    text = txt,
    parse_mode = null,
    disable_notification = null,
    reply_to_message_id = null,
    disable_web_page_preview = null,
    reply_markup = reply
  );
  sendTextMessage(textMessage);
}

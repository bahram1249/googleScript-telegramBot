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

  var textMessage = {
    chat_id : String(74345873),
    text: 'bahram',
    parse_mode : 'MarkDown',
    reply_markup : JSON.stringify(reply_markup)
  }

  sendTextMessage(textMessage);
}

function testing() {
  removeKeyboard('remove');
}
// remove keyboard with one messge
function removeKeyboard(txt) {
  var reply = {
    "remove_keyboard": true,
    "selective": true
  };

  var textMessage = {
    chat_id: String(74345873),
    text: txt,
    reply_markup: JSON.stringify(reply)
  };

  sendTextMessage(textMessage);
}

var token = "Your Token Bot";
var url = "https://api.telegram.org/bot" + token;
var webUrlApp = 'Your Publish Web Url';

function getMe() {
  var responce = UrlFetchApp.fetch(url + "/getMe");
  Logger.log(responce.getContentText());
}

function getUpdates() {
  var responce = UrlFetchApp.fetch(url + "/getUpdates");
  Logger.log(responce.getContentText());
}

function setWebhook() {
  var responce = UrlFetchApp.fetch(url + "/setWebhook?url=" + webUrlApp);
  Logger.log(responce.getContentText());
}

function getWebhookInfo() {
  var responce = UrlFetchApp.fetch(url + "/getWebhookInfo");
  Logger.log(responce.getContentText());
}
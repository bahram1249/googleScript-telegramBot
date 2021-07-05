# googleScript-telegramBot
create a telegram bot with google script use web service api

# how we use it ?
- upload all files to your project (google script)
- open the Config.gs file and set your token , set webUrlApp ==> publish your project as web app and make the public link project , copy the url to webUrlApp
- run setWebhook function manually then see the logger script
- send message to your bot and enjoyed !!

# when new message send to bot
open index.gs file then see doPost function , when new message send it to your bot , telegram with webhook use http post send it data to your webUrlapp and doPost function run it !

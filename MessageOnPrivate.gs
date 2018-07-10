function MessageOnPrivate(result){

  if (isInScriptProperties(result)){

      CheckMessageOnPrivate(result);
      
    }else if(result.message.text == '/start'){

      // keep chat_id for promotion or send news or other
      setInScriptProperties(result);
      
      
      //send welcome message to user
      var textMessage = {
          chat_id : String(result.message.chat.id),
          text : 'Welcome To Our Robot'
      };
      sendTextMessage(textMessage);
      
    }else{
      var textMessage = {
        chat_id : String(result.message.chat.id),
        text : 'Click /start To Use This Bot'
      };
      sendTextMessage(textMessage);
    }
}

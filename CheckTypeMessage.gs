function isPrivateMessage(result) {
  if (result.message.chat.type == "private") {
    return true;
  }
  return false;
}

function isGroupMessage(result) {
  if (result.message.chat.type == "group") {
    return true;
  }
  return false;
}

function isSuperGroupMessage(result) {
  if (result.message.chat.type == "supergroup") {
    return true;
  }
  return false;
}

function isChannelMessage(result) {
  if (result.message.chat.type == "channel") {
    return true;
  }
  return false;
}
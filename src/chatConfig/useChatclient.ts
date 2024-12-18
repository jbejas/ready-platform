import { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import { CHAT_API_KEY } from "./chatConfig";

const chatClient = StreamChat.getInstance(CHAT_API_KEY);

export const useChatClient = (chatUserId, chatUserName, chatUserToken) => {
  const [clientIsReady, setClientIsReady] = useState(false);

  const user = {
    id: chatUserId,
    name: chatUserName,
    privacy_settings: {
      typing_indicators: {
        enabled: true,
      },
      read_receipts: {
        enabled: true,
      },
    },
  };

  useEffect(() => {
    const setupClient = async () => {
      try {
        chatClient.connectUser(user, chatUserToken);
        setClientIsReady(true);

        // connectUser is an async function. So you can choose to await for it or not depending on your use case (e.g. to show custom loading indicator)
        // But in case you need the chat to load from offline storage first then you should render chat components
        // immediately after calling `connectUser()`.
        // BUT ITS NECESSARY TO CALL connectUser FIRST IN ANY CASE.
      } catch (error) {
        if (error instanceof Error) {
          console.error(
            `An error occurred while connecting the user: ${error.message}`
          );
        }
      }
    };

    // If the chat client has a value in the field `userID`, a user is already connected
    // and we can skip trying to connect the user again.
    if (!chatClient.userID) {
      setupClient();
    }
  }, []);

  return {
    clientIsReady,
  };
};

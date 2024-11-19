import { generateClient, GraphQLQuery } from "@aws-amplify/api";
import * as queries from "@graphql/queries";
import { ListChatPromptsQuery } from "@src/api/index";
import { sendNewMessagePushNotificationToUser } from "@src/utils/onesignal";
import { getUserById } from "@src/utils/user";
import { Channel, DefaultGenerics, Event } from "stream-chat";
const API = generateClient();

export const getChatPrompts = async () => {
  const chatPromptsQuery = await API.graphql<
    GraphQLQuery<ListChatPromptsQuery>
  >({
    query: queries.listChatPrompts,
    variables: {
      limit: 25,
    },
  });
  return chatPromptsQuery.data.listChatPrompts.items;
};

export async function onMessageChat(event: Event, user: any, channel: Channel<DefaultGenerics>) {
  try {
    if (user?.id === event.user?.id) {
      //get User ID destination from channel
      const destinationId = Object.values(channel.state.members).filter(
        (member) => member.user.id !== user.id
      )?.[0]?.user?.id;

      const destination = JSON.parse(await getUserById(destinationId));


      if (destination.oneSignalUserId !== "0" && destination.isNewMessagesNotificationEnabled) {
        const pushNotificationSendResult =
        await sendNewMessagePushNotificationToUser(
          event.user.name,
          `You have a new message from ${event.user.name}. Open the app to read and reply.`,
          destination.oneSignalUserId,
          "message"
        );
        
        console.log("pushNotificationSendResult", pushNotificationSendResult);
      }
    }
  } catch (error) {
    console.log("New message Error", error);
  }
}

export async function onReactionChat(event: Event, user: any) {
  if (
    user.oneSignalUserId !== "0" &&
    user.isNewMessagesNotificationEnabled &&
    user?.id !== event.user?.id
  ) {
    const pushNotificationSendResult =
      await sendNewMessagePushNotificationToUser(
        event.user.name,
        event.message.text,
        user.oneSignalUserId,
        "reaction",
      );
    console.log(
      "pushNotificationSendResult",
      JSON.stringify(pushNotificationSendResult),
    );
  }
}
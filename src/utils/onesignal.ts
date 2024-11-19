import { generateClient, GraphQLQuery } from "@aws-amplify/api";
import * as queries from "@graphql/queries";
import { SendPushNotificationQuery } from "@src/api/index";
import { updateUser } from "@src/utils/amplifyUtils";
import { OneSignal } from "react-native-onesignal";

const API = generateClient();

export const sendNewMessagePushNotificationToUser = async (
  userName,
  text,
  oneSignalUserId,
  messageType,
) => {
  interface messageProps {
    content: string;
    OneSignalUserId: string;
    title?: string;
  }

  const messageVariables: messageProps = {
    content: `${text}`,
    OneSignalUserId: oneSignalUserId,
  };

  switch (messageType) {
    case "message":
      messageVariables.title = `New Message from ${userName}`;
      break;
    case "reaction":
      messageVariables.title = `New reaction from ${userName}`;
      break;
    case "spark":
      messageVariables.title = `You’ve just connected with ${userName}. Nice.`;
      messageVariables.content = "Start the conversation and say hi.";
      break;

  }


  console.log("Message variables", messageType, messageVariables);

  const pushNotificationSendResult = await API.graphql<
    GraphQLQuery<SendPushNotificationQuery>
  >({
    query: queries.sendPushNotification,
    variables: messageVariables,
  });
  return pushNotificationSendResult;
};

export const sendPushNotificationToConnectedUser = async (
  userName,
  oneSignalUserId,
) => {
  console.log("userName", userName);
  console.log("oneSignalUserId", oneSignalUserId);
  const pushNotificationSendResult = await API.graphql<
    GraphQLQuery<SendPushNotificationQuery>
  >({
    query: queries.sendPushNotification,
    variables: {
      title: `You’ve just connected with ${userName}. Nice.`,
      content: "Start the conversation and say hi.",
      OneSignalUserId: oneSignalUserId,
    },
  });
  console.log("pushNotificationSendResult", pushNotificationSendResult);
  return pushNotificationSendResult;
};

function parseOneSignalUserId(oneSignalUserId: string) {
  return oneSignalUserId?.split(',')?.filter((v) => v !== '0' && v !== '');
}


export function userHasOneSignalId(user: any){
  return parseOneSignalUserId(user.oneSignalUserId).length > 0;
}

export async function registerDeviceOneSignal(user: any) {
  try{

    const oneSignalUserId = await OneSignal.User.getOnesignalId();
    const oneSignalUserIds = parseOneSignalUserId(user.oneSignalUserId)

    if (!oneSignalUserIds.includes(oneSignalUserId)) {
      const newOneSignalUserId = [...oneSignalUserIds, oneSignalUserId].join(
        ',',
      );

      await updateUser(user?.id, {
        oneSignalUserId: newOneSignalUserId,
      })
    }
  }catch(error){
    console.log("Error registering device on OneSignal", error);
  }
}

export async function unregisterDeviceOneSignal(user: any) {
  try{
    const oneSignalUserId = await OneSignal.User.getOnesignalId();
    const oneSignalUserIds = parseOneSignalUserId(user.oneSignalUserId)

    if (oneSignalUserIds.includes(oneSignalUserId)) {
      const newOneSignalUserId = oneSignalUserIds
        .filter((v) => v !== oneSignalUserId)
        .join(',');

      await updateUser(user?.id, {
        oneSignalUserId: newOneSignalUserId,
      });
    }
  }catch(error){
    console.log("Error unregistering device on OneSignal", error);
  }
}
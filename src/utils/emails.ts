import * as queries from "@graphql/queries";
import { generateClient, GraphQLQuery } from "@aws-amplify/api";
import { SendConnectionEmailQuery } from "@src/api/index";

const API = generateClient();

export const sendEmailNotificationToConnectedUser = async (
  toEmail,
  connectionName
) => {
  const emailNotificationSendResult = await API.graphql<
    GraphQLQuery<SendConnectionEmailQuery>
  >({
    query: queries.sendConnectionEmail,
    variables: {
      toEmail,
      connectionName,
    },
  });
  console.log("emailNotificationSendResult", emailNotificationSendResult);
  return emailNotificationSendResult;
};

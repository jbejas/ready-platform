// Amplify
import * as queries from "@graphql/queries";
import { generateClient, GraphQLQuery } from "@aws-amplify/api";
import { ListGeneralAppContentsQuery } from "@src/api/index";

// API
const API = generateClient();

export const getGeneralAppConfig = async () => {
  try {
    const appConfig = await API.graphql<
      GraphQLQuery<ListGeneralAppContentsQuery>
    >({
      query: queries.listGeneralAppContents,
    });
    return appConfig.data.listGeneralAppContents.items;
  } catch (error) {
    console.log("getGeneralAppConfig Error: ", error);
  }
};

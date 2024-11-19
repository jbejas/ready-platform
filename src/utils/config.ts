// Amplify
import * as queries from "@graphql/queries";
import { generateClient, GraphQLQuery } from "@aws-amplify/api";
import {
  ListGeneralAppContentsQuery,
  SearchGeneralAppContentsQuery,
} from "@src/api/index";

// API
const API = generateClient();

export const getGeneralAppConfig = async () => {
  try {
    const {
      data: {
        listGeneralAppContents: { items },
      },
    } = await API.graphql<GraphQLQuery<ListGeneralAppContentsQuery>>({
      query: queries.listGeneralAppContents,
      variables: {
        limit: 100,
      },
    });
    return items;
  } catch (error) {
    console.log("getDashboardCategories error", error);
  }
};

export const getFeatureFlagByConfigurationId = async (
  configurationId: string
) => {
  try {
    const {
      data: {
        searchGeneralAppContents: { items },
      },
    } = await API.graphql<GraphQLQuery<SearchGeneralAppContentsQuery>>({
      query: queries.searchGeneralAppContents,
      variables: {
        filter: {
          contentType: {
            eq: configurationId,
          },
        },
        limit: 1,
      },
    });
    return items;
  } catch (error) {
    console.log("getFeatureFlagByConfigurationId error", error);
  }
};

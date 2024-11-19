// Amplify
import * as queries from "@graphql/queries";
import { generateClient, GraphQLQuery } from "@aws-amplify/api";
import { SearchContentCategoriesQuery } from "@src/api/index";

// API
const API = generateClient();

export const getDashboardCategories = async () => {
  try {
    const {
      data: {
        searchContentCategories: { items: categories },
      },
    } = await API.graphql<GraphQLQuery<SearchContentCategoriesQuery>>({
      query: queries.searchContentCategories,
      variables: {
        filter: {
          inDashboard: {
            eq: true,
          },
        },
      },
    });
    return categories;
  } catch (error) {
    console.log("getDashboardCategories error", error);
  }
};

export const getCategoryById = async (categoryId) => {
  try {
    const {
      data: {
        searchContentCategories: { items: categories },
      },
    } = await API.graphql<GraphQLQuery<SearchContentCategoriesQuery>>({
      query: queries.searchContentCategories,
      variables: {
        limit: 1,
        filter: {
          id: {
            eq: categoryId,
          },
        },
      },
    });
    return categories[0];
  } catch (error) {
    console.log("getCategoryById error", error);
  }
};

export const getCategoryNameById = async (categoryId) => {
  try {
    const {
      data: {
        searchContentCategories: {
          items: [{ name }],
        },
      },
    } = await API.graphql<GraphQLQuery<SearchContentCategoriesQuery>>({
      query: queries.searchContentCategories,
      variables: {
        limit: 1,
        filter: {
          id: {
            eq: categoryId,
          },
        },
      },
    });
    return name;
  } catch (error) {
    console.log("getCategoryNameById error", error);
  }
};

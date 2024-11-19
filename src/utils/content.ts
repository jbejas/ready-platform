// Amplify
import * as customQueries from "@gcq/index";
import * as queries from "@graphql/queries";
import { generateClient, GraphQLQuery } from "@aws-amplify/api";
import {
  SearchContentsQuery,
  ListContentTypesQuery,
  SearchContentCategoriesQuery,
} from "@api/index";

// API
const API = generateClient();

const getContentTypeByName = async (contentTypeName) => {
  console.log("contentTypeName", contentTypeName);
  try {
    const {
      data: {
        listContentTypes: { items },
      },
    } = await API.graphql<GraphQLQuery<ListContentTypesQuery>>({
      query: queries.listContentTypes,
    });
    const contentType = items.find((item) => item.name === contentTypeName);
    return contentType;
  } catch (error) {
    console.log("getContent Error: ", error);
  }
};

export const getContentCount = async (
  contentTypeName,
  totalReflectionDaysCount,
) => {
  let contentType;
  let filter: {
    isActive: { eq: boolean };
    day: { lte: number };
    contentTypeId?: { eq: string };
  } = {
    isActive: {
      eq: true,
    },
    day: {
      lte: totalReflectionDaysCount,
    },
  };

  if (contentTypeName !== "All") {
    contentType = await getContentTypeByName(contentTypeName);
    console.log("Content Type", contentType);
    filter.contentTypeId = {
      eq: contentType.id,
    };
  }

  try {
    const {
      data: {
        searchContents: { total },
      },
    } = await API.graphql<GraphQLQuery<SearchContentsQuery>>({
      query: customQueries.searchContentsTotal,
      variables: {
        filter,
      },
    });
    return total;
  } catch (error) {
    console.log("getContentCount Error: ", error);
  }
};

export const getContent = async (
  contentCount,
  contentTypeName,
  totalReflectionDaysCount,
) => {
  console.log("contentCount", contentCount);
  console.log("contentTypeName", contentTypeName);
  console.log("totalReflectionDaysCount", totalReflectionDaysCount);
  let contentType;
  let filter: {
    isActive: { eq: boolean };
    day: { lte: number };
    contentTypeId?: { eq: string };
  } = {
    isActive: {
      eq: true,
    },
    day: {
      lte: totalReflectionDaysCount,
    },
  };

  if (contentTypeName !== "All") {
    contentType = await getContentTypeByName(contentTypeName);
    filter.contentTypeId = {
      eq: contentType.id,
    };
  }

  try {
    const {
      data: {
        searchContents: { items, total },
      },
    } = await API.graphql<GraphQLQuery<SearchContentsQuery>>({
      query: customQueries.searchContents,
      variables: {
        limit: 1000,
        filter,
        sort: {
          field: "day",
          direction: "desc",
        },
      },
    });
    return { items, total };
  } catch (error) {
    console.log("getContent Error: ", error);
  }
};

export const getContentCategories = async () => {
  let filter: {
    isActive: { eq: boolean };
    inDashboard: { eq: boolean };
  } = {
    isActive: {
      eq: true,
    },
    inDashboard: {
      eq: true,
    },
  };

  try {
    const {
      data: {
        searchContentCategories: { items },
      },
    } = await API.graphql<GraphQLQuery<SearchContentCategoriesQuery>>({
      query: customQueries.searchContentCategories,
      variables: {
        limit: 100,
        filter,
        sort: {
          field: "sortOrder",
          direction: "asc",
        },
      },
    });
    console.log("Items", items);
    return items;
  } catch (error) {
    console.log("getContentCategories Error: ", error);
  }
};

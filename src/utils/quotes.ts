import * as queries from "@graphql/queries";
import { generateClient, GraphQLQuery } from "@aws-amplify/api";
import { ListQuotesQuery } from "@src/api/index";

const API = generateClient();

export const getQuotes = async () => {
  const quotesQuery = await API.graphql<GraphQLQuery<ListQuotesQuery>>({
    query: queries.listQuotes,
    variables: {
      limit: 4,
    },
  });
  return quotesQuery.data.listQuotes.items;
};

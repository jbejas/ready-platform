import * as queries from "@graphql/queries";
import { SearchReligionsQuery } from "@src/api";
import { LIST_RELIGIONS } from "@src/utils/react-query-keys";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { generateClient, GraphQLQuery } from "aws-amplify/api";

function useListReligions(
  params?: Partial<UseQueryOptions<SearchReligionsQuery["searchReligions"]>>
) {
  const API = generateClient();

  return useQuery<SearchReligionsQuery["searchReligions"]>({
    queryKey: [LIST_RELIGIONS],
    queryFn: async () => {
      const data = await API.graphql<GraphQLQuery<SearchReligionsQuery>>({
        query: queries.searchReligions,
        variables: {
          sort: {
            field: "sortOrder",
            direction: "asc",
          },
        },
      });

      return data.data.searchReligions;
    },
    ...params,
  });
}

export default useListReligions;

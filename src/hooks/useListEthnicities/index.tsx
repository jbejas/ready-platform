import * as queries from "@graphql/queries";
import { SearchEthnicitiesQuery } from "@src/api";
import { LIST_ETHNICITY } from "@src/utils/react-query-keys";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { generateClient, GraphQLQuery } from "aws-amplify/api";

function useListEthnicities(
  params?: Partial<UseQueryOptions<SearchEthnicitiesQuery["searchEthnicities"]>>
) {
  const API = generateClient();

  return useQuery<SearchEthnicitiesQuery["searchEthnicities"]>({
    queryKey: [LIST_ETHNICITY],
    queryFn: async () => {
      const data = await API.graphql<GraphQLQuery<SearchEthnicitiesQuery>>({
        query: queries.searchEthnicities,
        variables: {
          sort: {
            field: "sortOrder",
            direction: "asc",
          },
        },
      });

      return data.data.searchEthnicities;
    },
    ...params,
  });
}

export default useListEthnicities;

import * as queries from "@graphql/queries";
import { SearchChildrenStatusesQuery } from "@src/api";
import { LIST_CHILDREN_STATUS } from "@src/utils/react-query-keys";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { generateClient, GraphQLQuery } from "aws-amplify/api";

function useListChildrenStatuses(
  params?: Partial<
    UseQueryOptions<SearchChildrenStatusesQuery["searchChildrenStatuses"]>
  >
) {
  const API = generateClient();

  return useQuery<SearchChildrenStatusesQuery["searchChildrenStatuses"]>({
    queryKey: [LIST_CHILDREN_STATUS],
    queryFn: async () => {
      const data = await API.graphql<GraphQLQuery<SearchChildrenStatusesQuery>>(
        {
          query: queries.searchChildrenStatuses,
          variables: {
            sort: {
              field: "sortOrder",
              direction: "asc",
            },
          },
        }
      );

      return data.data.searchChildrenStatuses;
    },
    ...params,
  });
}

export default useListChildrenStatuses;

import * as queries from "@graphql/queries";
import { ListWantChildrenStatusesQuery } from "@src/api";
import { LIST_WANT_CHILDREN_STATUS } from "@src/utils/react-query-keys";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { generateClient, GraphQLQuery } from "aws-amplify/api";

function useListWantChildrenStatuses(
  params?: Partial<
    UseQueryOptions<ListWantChildrenStatusesQuery["listWantChildrenStatuses"]>
  >
) {
  const API = generateClient();

  return useQuery<ListWantChildrenStatusesQuery["listWantChildrenStatuses"]>({
    queryKey: [LIST_WANT_CHILDREN_STATUS],
    queryFn: async () => {
      const data = await API.graphql<
        GraphQLQuery<ListWantChildrenStatusesQuery>
      >({
        query: queries.listWantChildrenStatuses,
        variables: {
          sort: {
            field: "sortOrder",
            direction: "asc",
          },
        },
      });

      return data.data.listWantChildrenStatuses;
    },
    ...params,
  });
}

export default useListWantChildrenStatuses;

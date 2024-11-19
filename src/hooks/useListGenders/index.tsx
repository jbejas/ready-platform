import * as queries from "@graphql/queries";
import { ListGendersQuery } from "@src/api";
import { LIST_SEXUAL_ORIENTATION } from "@src/utils/react-query-keys";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { generateClient, GraphQLQuery } from "aws-amplify/api";

function useListGenders(
  params?: Partial<UseQueryOptions<ListGendersQuery["listGenders"]>>
) {
  const API = generateClient();

  return useQuery<ListGendersQuery["listGenders"]>({
    queryKey: [LIST_SEXUAL_ORIENTATION],
    queryFn: async () => {
      const data = await API.graphql<GraphQLQuery<ListGendersQuery>>({
        query: queries.listGenders,
        variables: {
          sort: {
            field: "sortOrder",
            direction: "asc",
          },
        },
      });

      return data.data.listGenders;
    },
    ...params,
  });
}

export default useListGenders;

import * as queries from "@graphql/queries";
import { ListSexualOrientationsQuery } from "@src/api";
import { LIST_SEXUAL_ORIENTATION } from "@src/utils/react-query-keys";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { generateClient, GraphQLQuery } from "aws-amplify/api";

function useListSexualOrientation(
  params?: Partial<
    UseQueryOptions<ListSexualOrientationsQuery["listSexualOrientations"]>
  >
) {
  const API = generateClient();

  return useQuery<ListSexualOrientationsQuery["listSexualOrientations"]>({
    queryKey: [LIST_SEXUAL_ORIENTATION],
    queryFn: async () => {
      const data = await API.graphql<GraphQLQuery<ListSexualOrientationsQuery>>(
        {
          query: queries.listSexualOrientations,
          variables: {
            sort: {
              field: "sortOrder",
              direction: "asc",
            },
          },
        }
      );

      return data.data.listSexualOrientations;
    },
    ...params,
  });
}

export default useListSexualOrientation;

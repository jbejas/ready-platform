import * as queries from "@graphql/queries";
import { ListEducationLevelsQuery } from "@src/api";
import { LIST_EDUCATION_LEVELS } from "@src/utils/react-query-keys";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { generateClient, GraphQLQuery } from "aws-amplify/api";

function useListEducationLevels(
  params?: Partial<
    UseQueryOptions<ListEducationLevelsQuery["listEducationLevels"]>
  >
) {
  const API = generateClient();

  return useQuery<ListEducationLevelsQuery["listEducationLevels"]>({
    queryKey: [LIST_EDUCATION_LEVELS],
    queryFn: async () => {
      const data = await API.graphql<GraphQLQuery<ListEducationLevelsQuery>>({
        query: queries.listEducationLevels,
      });

      return data.data.listEducationLevels;
    },
    ...params,
  });
}

export default useListEducationLevels;

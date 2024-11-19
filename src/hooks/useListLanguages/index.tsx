import * as queries from "@graphql/queries";
import { SearchLanguagesQuery } from "@src/api";
import { LIST_LANGUAGES } from "@src/utils/react-query-keys";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { generateClient, GraphQLQuery } from "aws-amplify/api";

function useListLanguages(
  params?: Partial<UseQueryOptions<SearchLanguagesQuery["searchLanguages"]>>
) {
  const API = generateClient();

  return useQuery<SearchLanguagesQuery["searchLanguages"]>({
    queryKey: [LIST_LANGUAGES],
    queryFn: async () => {
      const data = await API.graphql<GraphQLQuery<SearchLanguagesQuery>>({
        query: queries.searchLanguages,
        variables: {
          sort: {
            field: "name",
            direction: "asc",
          },
        },
      });

      return data.data.searchLanguages;
    },
    ...params,
  });
}

export default useListLanguages;

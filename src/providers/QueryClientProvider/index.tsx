import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  QueryClient,
  QueryClientProvider as QueryClientProviderTanstack,
} from "@tanstack/react-query";
import { ReactNode } from "react";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";

export const queryClient = new QueryClient();

const asyncStoragePersister = createAsyncStoragePersister({
  storage: AsyncStorage,
});

const MS_IN_DAY = 1000 * 60 * 60 * 24;
const cacheTime = MS_IN_DAY * 5;

persistQueryClient({
  queryClient,
  persister: asyncStoragePersister,
  maxAge: cacheTime,
});

function QueryClientProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProviderTanstack client={queryClient}>
      {children}
    </QueryClientProviderTanstack>
  );
}

export default QueryClientProvider;

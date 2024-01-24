import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import RoutesList from "./routes/RoutesList";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={RoutesList} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;

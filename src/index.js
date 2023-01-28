import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClient, QueryClientProvider } from "react-query";
// (delete this to use react-querydeveloper tools)
// import { ReactQueryDevtools } from "react-query/devtools";
// (then add the next line below <app />)
// <ReactQueryDevtools />

const queryClient = new QueryClient({
   defaultOptions: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      cacheTime: 18000,
   },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <QueryClientProvider client={queryClient}>
         <App />
      </QueryClientProvider>
   </React.StrictMode>
);

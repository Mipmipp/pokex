import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./components/App";
import { reactQueryConfiguration } from "./data/reactQueryConfiguration";

// (delete this to use react-querydeveloper tools)
// import { ReactQueryDevtools } from "react-query/devtools";
// (then add the next line below <app />)
// <ReactQueryDevtools />

const queryClient = new QueryClient({
   defaultOptions: reactQueryConfiguration
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <QueryClientProvider client={queryClient}>
         <App />
      </QueryClientProvider>
   </React.StrictMode>
);

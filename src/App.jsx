import { createHashRouter, RouterProvider } from "react-router-dom";
import { DataStoreProvider } from "@dhis2/app-service-datastore";
import { RecoilRoot } from "recoil";
import Root from "./components/Root";
import AboutPage from "./components/AboutPage";
import PredictionPage from "./components/prediction/PredictionPage";
import ResultsPage from "./components/results/ResultsPage";
import SettingsPage from "./components/settings/SettingsPage";
import ErrorPage from "./components/ErrorPage";
import StatusPage from "./components/StatusPage";
import { OpenAPI } from './httpfunctions';
import { CenteredContent, CircularLoader } from "@dhis2/ui";
import Initializer from "./app/Initializer";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <PredictionPage />,
      },
      {
        path: "results",
        element: <ResultsPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "status",
        element: <StatusPage />,
      },
    ],
  },
]);

const App = () => {
  OpenAPI.BASE = 'http://localhost:8000'

  return (
    <DataStoreProvider namespace="chapp-configuration"
      loadingComponent={
        <CenteredContent>
          <CircularLoader />
        </CenteredContent>
      }
    >
      <RecoilRoot>
        <Initializer>
          <RouterProvider router={router}></RouterProvider>;
        </Initializer>
      </RecoilRoot>
    </DataStoreProvider>
  )
}

export default App;

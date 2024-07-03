import { Layout } from "./components";
import { Bullying } from "./pages/project";
import { Route, Routes } from "react-router-dom";
import { ErrorPage, Home, InfoProject, MyProject } from "./pages";
import CheckAndroidOrDesktop from "./middleware/CheckAndroidOrDesktop";

export default function App() {
  return (
    <Routes>
      <Route element={<CheckAndroidOrDesktop />}>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <InfoProject />
            </Layout>
          }
        />
        <Route path="/projects">
          <Route
            index
            element={
              <Layout>
                <MyProject />
              </Layout>
            }
          />
          <Route
            path="bullying"
            element={
              <Layout>
                <Bullying />
              </Layout>
            }
          />
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

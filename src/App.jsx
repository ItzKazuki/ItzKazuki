import { Route, Routes } from "react-router-dom";
import { ErrorPage, Home } from "./pages";
import { Bullying } from "./pages/project";
import { useEffect } from "react";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route path="/projects">
        <Route
          path="bullying"
          element={
            <Layout>
              <Bullying />
            </Layout>
          }
        />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

function Layout({ children }) {
  return <div className="my-8 mx-8 min-h-screen">{children}</div>;
}

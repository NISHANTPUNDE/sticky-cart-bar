import { BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NavigationMenu } from "@shopify/app-bridge-react";
import Routes from "./Routes";
import { Navbar } from "./components";
import "./App.css"
import {
  AppBridgeProvider,
  QueryProvider,
  PolarisProvider,
} from "./components";

export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");
  const { t } = useTranslation();
  return (
    <PolarisProvider>
      <BrowserRouter>
        <AppBridgeProvider>
          <QueryProvider>
            <NavigationMenu
              navigationLinks={[
                {
                  label: t("Onboarding"),
                  destination: "/pagename",
                },
                {
                  label: t("Pricing"),
                  destination: "/Price",
                },
              ]}
            />
            <div className="section">
                <div className="navbar">
                 <Navbar />
                </div>
              </div>
            <div style={{ width: "80vw", marginLeft: "100px"}}>
              <Routes pages={pages} />
            </div>
          </QueryProvider>
        </AppBridgeProvider>
      </BrowserRouter>
    </PolarisProvider>
  );
}

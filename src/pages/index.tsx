import { NextPageWithLayout } from "./_app";
import { Home } from "@/components/templates/Home";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { ReactElement } from "react";

const HomePage: NextPageWithLayout = () => {
  return <Home />;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default HomePage;

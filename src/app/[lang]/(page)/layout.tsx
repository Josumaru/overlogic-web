import Footer from "@/components/common/footer/footer";
import NavigationBar from "@/components/common/navigation/navigation-bar";
import WhatsApp from "@/components/common/whatsapp/whats-app";
import { Lang } from "@/types/lang";
import { NextPage } from "next";
import { Fragment } from "react";

interface Props {
  children: React.ReactNode;
  params: Promise<Lang>;
}

const Layout: NextPage<Props> = async ({ children, params }) => {
  const lang = (await params).lang;
  return (
    <Fragment>
      <NavigationBar lang={lang} />
      {children}
      <WhatsApp lang={lang} />
      <Footer lang={lang} />
    </Fragment>
  );
};

export default Layout;

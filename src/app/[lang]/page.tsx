import { NextPage } from "next";
import Header from "@/components/home/header/header";
import { LangProps } from "@/types/lang";
import Services from "@/components/home/services/services";
import Testimonials from "@/components/home/testimonials/testimonials";
import Faq from "@/components/home/faq/faq";
import NavigationBar from "@/components/common/navigation/navigation-bar";
import Footer from "@/components/common/footer/footer";
import { Fragment } from "react";
import WhatsApp from "@/components/common/whatsapp/whats-app";

const Page: NextPage<LangProps> = async ({ params }) => {
  const lang = (await params).lang;

  return (
    <Fragment>
      <NavigationBar lang={lang} />
      <Header params={params} />
      <Services params={params} />
      <Testimonials params={params} />
      <Faq params={params} />
      <Footer lang={lang} />
      <WhatsApp lang={lang} />
    </Fragment>
  );
};

export default Page;

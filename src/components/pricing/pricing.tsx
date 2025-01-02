import { getDictionary } from "@/app/[lang]/dictionaries";
import { Lang } from "@/types/lang";
import { NextPage } from "next";
import FeatureItem from "./feature-item";
import PricingButton from "./pricing-button";
import { BorderBeam } from "../ui/border-beam";
import { ImageConstants } from "@/constants/ImageConstants";
import SectionTitle from "../common/text/section-title";
import SectionDesc from "../common/text/section-desc";

interface Props {
  params: Promise<Lang>;
}

const Pricing: NextPage<Props> = async ({ params }) => {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);
  return (
    <div className="px-3 md:px-10 pt-32 w-full flex items-center justify-center">
      <div className="container w-full">
        <div>
          <SectionTitle>
            {dict.pricing.flexible}{" "}
            <span className="text-primary">{dict.pricing.pricing}</span>{" "}
            {dict.pricing.plansForEveryStageOf}{" "}
            <span className="text-primary">{dict.pricing.yourVision}</span>
          </SectionTitle>
          <SectionDesc>{dict.pricing.subTitle}</SectionDesc>
        </div>
        <section className="overflow-hidden py-8 text-neutral-800 dark:text-neutral-50 lg:pb-32 px-4">
          <div className="container mx-auto">
            <div className="-m-6 flex flex-wrap *:mx-auto">
              <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                <div className="h-full transform-gpu rounded-2xl border border-neutral-300 bg-white transition duration-500 hover:-translate-y-2 dark:border-neutral-600 dark:bg-neutral-900 ">
                  <div className="border-b border-neutral-300 p-12 dark:border-neutral-600">
                    <div className="pr-9">
                      <h4 className="mb-6 text-6xl tracking-tighter">
                        {dict.pricing.basic.title}
                      </h4>
                      <p className="mb-2 text-xl font-semibold tracking-tight">
                        {dict.pricing.from} IDR 350.000,00
                      </p>
                      <p className="tracking-tight">
                        {dict.pricing.basic.subTitle}
                      </p>
                    </div>
                  </div>
                  <div className="p-12 pb-11">
                    <ul className="-m-1.5 mb-11">
                      {dict.pricing.basic.features.map((feature) => (
                        <FeatureItem key={feature}>{feature}</FeatureItem>
                      ))}
                    </ul>
                  </div>
                  <div className="px-12">
                    <PricingButton>{dict.pricing.order}</PricingButton>
                  </div>
                </div>
              </div>
              <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                <div
                  className="transform-gpu overflow-hidden rounded-2xl p-px transition duration-500 hover:-translate-y-2"
                  style={{
                    backgroundImage: `url(${ImageConstants.common.gradient.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="relative h-full rounded-2xl bg-white dark:bg-neutral-900">
                    <BorderBeam
                    // borderWidth={4}
                    // size={500}
                    // colorTo="#ffffff00"
                    // colorFrom="#2f6cf9"
                    />
                    <div
                      className="p-12"
                      style={{
                        backgroundImage: `url(${ImageConstants.common.gradient.src})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="pr-9">
                        <h4 className="mb-6 text-6xl tracking-tighter text-white">
                          {dict.pricing.advanced.title}
                        </h4>
                        <p className="mb-2 text-xl font-semibold tracking-tighter text-white">
                          {dict.pricing.from} IDR 1.250.000,00
                        </p>
                        <p className="tracking-tight text-white">
                          {dict.pricing.advanced.subTitle}
                        </p>
                      </div>
                    </div>
                    <div className="p-12 pb-11">
                      <ul className="-m-1.5 mb-11">
                        {dict.pricing.advanced.features.map((feature) => (
                          <FeatureItem key={feature}>{feature}</FeatureItem>
                        ))}
                      </ul>
                      <PricingButton>{dict.pricing.order}</PricingButton>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full p-2 md:w-1/2 lg:w-1/3">
                <div className="flex h-full transform-gpu flex-col justify-between rounded-2xl border border-neutral-300 bg-white transition duration-500 hover:-translate-y-2 dark:border-neutral-600 dark:bg-neutral-900">
                  <div className="border-neutral-300 p-12 dark:border-neutral-600">
                    <div className="pr-9">
                      <h4 className="mb-6 text-6xl tracking-tighter">
                        {dict.pricing.professional.title}
                      </h4>
                      <p className="mb-2 text-xl font-semibold tracking-tighter">
                        {dict.pricing.from} IDR 750.000,00
                      </p>
                      <p className="tracking-tight">
                        {dict.pricing.professional.subTitle}
                      </p>
                    </div>
                  </div>
                  <div className="p-12 pb-11">
                    <ul className="-m-1.5 mb-11">
                      {dict.pricing.professional.features.map((feature) => (
                        <FeatureItem key={feature}>{feature}</FeatureItem>
                      ))}
                    </ul>
                    <PricingButton>{dict.pricing.order}</PricingButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pricing;

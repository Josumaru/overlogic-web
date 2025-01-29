"use client";
import Container from "@/components/common/container";
import confetti from "canvas-confetti";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import InteractiveShimmerButton from "@/components/ui/interactive-shimmer-button";
import { NextPage } from "next";
import React, { Fragment, useEffect, useState } from "react";
import { z } from "zod";
import TextInput from "./text-input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import axios from "axios";
import PhoneNumberInput from "./phone-number-input/phone-number-input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { AuroraText } from "../ui/aurora-text";
import Link from "next/link";
import { buildLangUrl } from "@/utils/buildLangUrl";
import { IDictionary } from "@/types/dictionary";
import { motion } from "framer-motion";

interface Props {
  dict: IDictionary;
}

const Page: NextPage<Props> = ({ dict }) => {
  const formSchema = z.object({
    name: z.string().min(2, { message: dict.order.form.name.error }),
    email: z.string().email({ message: dict.order.form.email.error }),
    phone: z
      .string()
      .min(7, { message: dict.order.form.phone.error })
      .max(20, { message: dict.order.form.phone.error }),
    company: z
      .string()
      .min(2, { message: dict.order.form.company.error })
      .max(128, { message: dict.order.form.company.error }),
    position: z
      .string()
      .min(2, { message: dict.order.form.position.error })
      .max(128, { message: dict.order.form.position.error }),
    project: z
      .string()
      .min(2, { message: dict.order.form.project.error })
      .max(256, { message: dict.order.form.project.error }),
    services: z
      .array(z.string())
      .min(1, { message: dict.order.form.services.error })
      .max(5, { message: dict.order.form.services.error }),
    budget: z
      .string()
      .min(2, { message: dict.order.form.budget.error })
      .max(64, { message: dict.order.form.budget.error }),
    brief: z
      .string()
      .min(2, { message: dict.order.form.brief.error })
      .max(256, { message: dict.order.form.brief.error }),
    additional: z
      .string()
      .min(2, {
        message: dict.order.form.additional.error,
      })
      .max(256, { message: dict.order.form.additional.error }),
    question: z
      .string()
      .min(2, { message: dict.order.form.question.error })
      .max(256, { message: dict.order.form.question.error }),
  });

  type FormData = z.infer<typeof formSchema>;

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    company: "",
    project: "",
    position: "",
    services: [],
    budget: "",
    brief: "",
    additional: "",
    question: "",
  });
  const { toast } = useToast();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const showFireworks = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  const validatePage = () => {
    try {
      switch (currentPage) {
        case 1:
          formSchema
            .pick({ name: true, email: true, phone: true })
            .parse(formData);
          break;
        case 2:
          formSchema
            .pick({ position: true, company: true, project: true })
            .parse(formData);
          break;
        case 3:
          formSchema.pick({ services: true }).parse(formData);
          break;
        case 4:
          formSchema.pick({ budget: true }).parse(formData);
          break;
        case 5:
          break;
        case 6:
          break;
        case 7:
          break;
        default:
          formSchema.parse(formData);
      }
      return true;
    } catch (e) {
      if (e instanceof z.ZodError) {
        const fieldErrors = e.errors.reduce((acc, error) => {
          acc[error.path[0] as string] = error.message;
          return acc;
        }, {} as Record<string, string>);
        toast({
          title: dict.order.toast.error_step.value,
          description: dict.order.toast.error_step.desc,
          variant: "destructive",
        });
        setErrors(fieldErrors);
      }
      return false;
    }
  };
  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("phone", formData.phone);
      data.append("email", formData.email);
      data.append("company", formData.company);
      data.append("project", formData.project);
      data.append("position", formData.position);
      data.append("budget", formData.budget);
      data.append("brief", formData.brief);
      data.append("additional", formData.additional);
      data.append("question", formData.question);
      formData.services.forEach((service) => {
        data.append("services", service);
      });
      await axios.post("/api/v1/orders", data, {});

      toast({
        title: dict.order.toast.success.value,
        description: dict.order.toast.success.desc,
        variant: "default",
      });
      setCurrentPage(8);
      showFireworks();
    } catch (error) {
      console.log(error);
      toast({
        title: dict.order.toast.error.value,
        description: dict.order.toast.error.desc,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const components = [
    <Fragment>
      <TextInput
        errors={errors}
        field="name"
        handleInputChange={handleInputChange}
        placeholder={dict.order.form.name.placeholder}
        title={dict.order.form.name.title}
        value={formData.name}
      />
      <PhoneNumberInput
        errors={errors}
        field="phone"
        handleInputChange={handleInputChange}
        value={formData.phone}
        placeholder={dict.order.form.phone.placeholder}
        title={dict.order.form.phone.title}
      />
      <TextInput
        errors={errors}
        field="email"
        handleInputChange={handleInputChange}
        placeholder={dict.order.form.email.placeholder}
        title={dict.order.form.email.title}
        value={formData.email}
      />
    </Fragment>,
    <Fragment>
      <TextInput
        errors={errors}
        field="company"
        handleInputChange={handleInputChange}
        placeholder={dict.order.form.company.placeholder}
        title={dict.order.form.company.title}
        value={formData.company}
      />
      <TextInput
        errors={errors}
        field="project"
        handleInputChange={handleInputChange}
        placeholder={dict.order.form.project.placeholder}
        title={dict.order.form.project.title}
        value={formData.project}
      />
      <TextInput
        errors={errors}
        field="position"
        handleInputChange={handleInputChange}
        placeholder={dict.order.form.position.placeholder}
        title={dict.order.form.position.title}
        value={formData.position}
      />
    </Fragment>,
    <Fragment>
      <div className="w-full flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <p className="font-medium">{dict.order.form.services.title}</p>
        </div>
        <div className="flex-col grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 no-scrollbar overflow-scroll gap-2">
          {dict.order.services.map((service, index) => (
            <div className="flex items-center space-x-2" key={index}>
              <Checkbox
                disabled={
                  !formData.services.includes(service) &&
                  formData.services.length == 5
                }
                className="w-5 h-5"
                checked={formData.services.includes(service)}
                onCheckedChange={(e) => {
                  const value = service;
                  setFormData((prev) => ({
                    ...prev,
                    services: prev.services.includes(value)
                      ? prev.services.filter((s) => s !== value)
                      : [...prev.services, value],
                  }));
                  setErrors((prev) => ({ ...prev, services: "" }));
                }}
              />
              <label
                htmlFor="terms2"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {service}
              </label>
            </div>
          ))}
        </div>
        {errors.services && (
          <p className="text-sm text-red-500">{errors.services}</p>
        )}
      </div>
    </Fragment>,
    <Fragment>
      <div className="w-full flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <p className="font-medium">{dict.order.form.budget.title}</p>
        </div>
        <RadioGroup
          className="flex-col flex overflow-scroll gap-2 no-scrollbar"
          defaultValue={formData.budget}
          onValueChange={(e) => {
            const budget = e;
            setFormData((prev) => ({
              ...prev,
              budget,
            }));
            setErrors((prev) => ({ ...prev, budget: "" }));
          }}
        >
          {dict.order.budgets.map((budget, index) => (
            <div
              className="flex items-center w-full justify-between space-x-2"
              key={index}
            >
              <RadioGroupItem value={budget} className="w-5 h-5" />
              <Label className="font-normal"> {budget}</Label>
            </div>
          ))}
          {errors.budget && (
            <p className="text-sm text-red-500">{errors.budget}</p>
          )}
        </RadioGroup>
      </div>
    </Fragment>,
    <Fragment>
      <TextInput
        errors={errors}
        field="brief"
        handleInputChange={handleInputChange}
        placeholder={dict.order.form.brief.placeholder}
        title={dict.order.form.brief.title}
        value={formData.brief}
      />
      <TextInput
        errors={errors}
        field="additional"
        handleInputChange={handleInputChange}
        placeholder={dict.order.form.additional.placeholder}
        title={dict.order.form.additional.title}
        value={formData.additional}
      />
    </Fragment>,
    <div className="w-full text-center flex flex-col gap-3">
      <h3 className="text-lg font-bold">{dict.order.review}</h3>
      <div className="w-full flex flex-col items-center gap-2">
        <div className="flex items-center justify-between w-full">
          <p className="text-muted-foreground">{dict.order.form.name.value}</p>
          <p>{formData.name}</p>
        </div>
        <div className="h-[1px] w-full bg-zinc-300 dark:bg-zinc-800" />
      </div>
      <div className="w-full flex flex-col items-center gap-2">
        <div className="flex items-center justify-between w-full">
          <p className="text-muted-foreground">{dict.order.form.phone.value}</p>
          <p>{formData.phone}</p>
        </div>
        <div className="h-[1px] w-full bg-zinc-300 dark:bg-zinc-800" />
      </div>
      <div className="w-full flex flex-col items-center gap-2">
        <div className="flex items-center justify-between w-full">
          <p className="text-muted-foreground">{dict.order.form.email.value}</p>
          <p>{formData.email}</p>
        </div>
        <div className="h-[1px] w-full bg-zinc-300 dark:bg-zinc-800" />
      </div>
      <div className="w-full flex flex-col items-center gap-2">
        <div className="flex items-center justify-between w-full">
          <p className="text-muted-foreground">
            {dict.order.form.company.value}
          </p>
          <p>{formData.company}</p>
        </div>
        <div className="h-[1px] w-full bg-zinc-300 dark:bg-zinc-800" />
      </div>
      <div className="w-full flex flex-col items-center gap-2">
        <div className="flex items-center justify-between w-full">
          <p className="text-muted-foreground">
            {dict.order.form.position.value}
          </p>
          <p>{formData.position}</p>
        </div>
        <div className="h-[1px] w-full bg-zinc-300 dark:bg-zinc-800" />
      </div>
      <div className="w-full flex flex-col items-center gap-2">
        <div className="flex items-center justify-between w-full">
          <p className="text-muted-foreground">
            {dict.order.form.project.value}
          </p>
          <p>{formData.project}</p>
        </div>
        <div className="h-[1px] w-full bg-zinc-300 dark:bg-zinc-800" />
      </div>
      <div className="w-full flex flex-col items-center gap-2">
        <div className="flex items-center justify-between w-full">
          <p className="text-muted-foreground">
            {dict.order.form.services.value}
          </p>
          <p>{formData.services.join(", ")}</p>
        </div>
        <div className="h-[1px] w-full bg-zinc-300 dark:bg-zinc-800" />
      </div>
      <div className="w-full flex flex-col items-center gap-2">
        <div className="flex items-center justify-between w-full">
          <p className="text-muted-foreground">
            {dict.order.form.budget.value}
          </p>
          <p>{formData.budget}</p>
        </div>
        <div className="h-[1px] w-full bg-zinc-300 dark:bg-zinc-800" />
      </div>
      {formData.brief != "" && (
        <div className="w-full flex flex-col items-center gap-2">
          <div className="flex items-center justify-between w-full">
            <p className="text-muted-foreground">
              {dict.order.form.brief.value}
            </p>
            <p>{formData.brief}</p>
          </div>
          <div className="h-[1px] w-full bg-zinc-300 dark:bg-zinc-800" />
        </div>
      )}
      {formData.additional != "" && (
        <div className="w-full flex flex-col items-center gap-2">
          <div className="flex items-center justify-between w-full">
            <p className="text-muted-foreground">
              {dict.order.form.additional.value}
            </p>
            <p>{formData.additional}</p>
          </div>
          <div className="h-[1px] w-full bg-zinc-300 dark:bg-zinc-800" />
        </div>
      )}
    </div>,
    <TextInput
      errors={errors}
      field="question"
      handleInputChange={handleInputChange}
      placeholder={dict.order.form.question.placeholder}
      title={dict.order.form.question.title}
      value={formData.question}
    />,
  ];
  const [currentComponent, setCurrentComponent] =
    useState<React.ReactNode | null>(components[0]);

  useEffect(() => {
    setCurrentComponent(components[currentPage - 1]);
  }, [currentPage, formData, errors]);

  if (currentPage == 8) {
    return (
      <Container className="gap-4 flex justify-center items-center h-screen">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
          <AuroraText>{dict.order.thankYou.title}</AuroraText>
        </h1>
        <p className="text-muted-foreground">{dict.order.thankYou.message}</p>
        <Link
          href={buildLangUrl(
            "/",
            dict.pricing.pricing == "harga" ? "id" : "en"
          )}
        >
          <InteractiveShimmerButton text={dict.order.thankYou.button} />
        </Link>
      </Container>
    );
  }

  return (
    <Container className="h-screen justify-center items-center gap-3">
      <motion.div
        className="h-2 fixed bg-gradient-to-r from-primary left-0 via-tertiary to-secondary top-0"
        initial={{ width: "0%" }}
        animate={{
          width: `${(currentPage / components.length) * 100}%`,
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
      />
      <div className="h-2/3 flex justify-center items-center flex-col overflow-scroll no-scrollbar w-full">
        {currentComponent}
      </div>

      <div className="w-full flex justify-between gap-4">
        {currentPage == 1 ? (
          <button
            disabled
            className={
              "group cursor-not-allowed text-muted-foreground relative md:h-14 h-12 md:w-72 w-40 overflow-hidden rounded-full border border-primary bg-background p-2 text-center font-semibold md:text-lg text-sm"
            }
          >
            <span className="inline-block translate-x-1 transition-all duration-300">
              {dict.order.prev}
            </span>
          </button>
        ) : (
          <button
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
            className="group relative md:h-14 h-12 md:w-72 w-40 cursor-pointer overflow-hidden rounded-full border border-primary hover:border-background bg-background p-2 text-center font-semibold md:text-lg text-sm"
          >
            <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
              {dict.order.prev}
            </span>
            <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-zinc-50 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 dark:text-zinc-900">
              <ArrowLeft />
              <span> {dict.order.prev}</span>
            </div>
            <div className="absolute left-[20%] top-[40%] h-0 w-0 scale-[1] rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-gradient-to-r group-hover:from-primary  group-hover:to-secondary dark:bg-gradient-to-r dark:from-primary dark:to-secondary"></div>
          </button>
        )}
        {currentPage < components.length ? (
          <InteractiveHoverButton
            onClick={() => {
              if (validatePage()) {
                setCurrentPage(currentPage + 1);
              }
            }}
            text={dict.order.next}
          />
        ) : (
          <InteractiveShimmerButton
            disabled={isLoading}
            className={isLoading ? "cursor-not-allowed" : ""}
            text={isLoading ? dict.order.sending : dict.order.submit}
            onClick={() => {
              if (validatePage()) {
                handleSubmit();
              }
            }}
          />
        )}
      </div>
    </Container>
  );
};

export default Page;

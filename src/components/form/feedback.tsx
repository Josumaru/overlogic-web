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
import { motion } from "framer-motion";
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
import { cn } from "@/lib/utils";

interface Props {
  dict: IDictionary;
}

const Feedback: NextPage<Props> = ({ dict }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    position: "",
    testimony: "",
    instagram: "",
    x: "",
    public: true,
  });
  const formSchema = z.object({
    name: z.string().min(2, { message: dict.order.form.name.error }),
    company: z
      .string()
      .min(2, { message: dict.order.form.company.error })
      .max(128, { message: dict.order.form.company.error }),
    position: z.string().min(2, { message: dict.order.form.position.error }),
    testimony: z
      .string()
      .min(2, { message: dict.order.form.testimony.error })
      .max(512, { message: dict.order.form.testimony.error }),
    instagram: z
      .string()
      .min(2, { message: dict.order.form.instagram.error })
      .max(64, { message: dict.order.form.instagram.error }),
    x: z
      .string()
      .min(2, { message: dict.order.form.x.error })
      .max(64, { message: dict.order.form.x.error }),
    public: z.boolean(),
  });

  type FormData = z.infer<typeof formSchema>;
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
          formSchema.pick({ name: true }).parse(formData);
          break;
        case 2:
          formSchema.pick({ company: true }).parse(formData);
          break;
        case 3:
          formSchema.pick({ position: true }).parse(formData);
          break;
        case 4:
          break;
        case 5:
          break;
        case 6:
          formSchema.pick({ testimony: true }).parse(formData);
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
      data.append("company", formData.company);
      data.append("position", formData.position);
      data.append("testimony", formData.testimony);
      data.append("instagram", formData.instagram);
      data.append("x", formData.x);
      data.append("public", formData.public.toString());
      await axios.post("/api/v1/feedbacks", data, {});

      toast({
        title: dict.order.toast.success.value,
        description: dict.order.toast.success.desc,
        variant: "default",
      });
      setCurrentPage(currentPage + 1);
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
    <TextInput
      errors={errors}
      field="name"
      handleInputChange={handleInputChange}
      placeholder={dict.order.form.name.placeholder}
      title={dict.order.form.name.title}
      value={formData.name}
    />,
    <TextInput
      errors={errors}
      field="company"
      handleInputChange={handleInputChange}
      placeholder={dict.order.form.company.placeholder}
      title={dict.order.form.company.title}
      value={formData.company}
    />,
    <TextInput
      errors={errors}
      field="position"
      handleInputChange={handleInputChange}
      placeholder={dict.order.form.position.placeholder}
      title={dict.order.form.position.title}
      value={formData.position}
    />,
    <TextInput
      errors={errors}
      field="instagram"
      handleInputChange={handleInputChange}
      placeholder={dict.order.form.instagram.placeholder}
      title={dict.order.form.instagram.title}
      value={formData.instagram}
    />,
    <TextInput
      errors={errors}
      field="x"
      handleInputChange={handleInputChange}
      placeholder={dict.order.form.x.placeholder}
      title={dict.order.form.x.title}
      value={formData.x}
    />,
    <div className="flex flex-col w-full gap-4">
      <TextInput
        errors={errors}
        field="testimony"
        handleInputChange={handleInputChange}
        placeholder={dict.order.form.testimony.placeholder}
        title={dict.order.form.testimony.title}
        value={formData.testimony}
      />
      <div className="items-top flex space-x-2">
        <Checkbox
          id="terms"
          className="w-5 h-5"
          checked={formData.public}
          onCheckedChange={(e) => {
            setFormData((prev) => ({
              ...prev,
              public: !formData.public,
            }));
            setErrors((prev) => ({ ...prev, public: "" }));
          }}
        />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {dict.order.testimonial_permission.title}
          </label>
          <p className="text-sm text-muted-foreground">
            {dict.order.testimonial_permission.description}
          </p>
        </div>
      </div>
    </div>,
  ];
  const [currentComponent, setCurrentComponent] =
    useState<React.ReactNode | null>(components[0]);

  useEffect(() => {
    setCurrentComponent(components[currentPage - 1]);
  }, [currentPage, formData, errors]);

  if (currentPage == 7) {
    return (
      <Container className="gap-4 flex justify-center items-center h-screen">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
          <AuroraText>{dict.order.thankYou.title}</AuroraText>
        </h1>
        <p className="text-muted-foreground">{dict.order.thankYou.feedback}</p>
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
      <div className="h-2/3 flex justify-center items-center flex-col overflow-scroll no-scrollbar w-full">
        {currentComponent}
      </div>
      <motion.div
        className="h-2 fixed bg-gradient-to-r from-primary left-0 via-tertiary to-secondary top-0"
        initial={{ width: "0%" }}
        animate={{
          width: `${(currentPage / components.length) * 100}%`,
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
      />
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
              <span>{dict.order.prev}</span>
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

export default Feedback;

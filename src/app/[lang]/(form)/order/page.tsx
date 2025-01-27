"use client";
import Container from "@/components/common/container";
import SectionDesc from "@/components/common/text/section-desc";
import SectionTitle from "@/components/common/text/section-title";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import InteractiveShimmerButton from "@/components/ui/interactive-shimmer-button";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { z } from "zod";

// Skema Validasi Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  business: z.string().min(2, { message: "Business must be at least 2 characters." }),
  position: z.string().min(2, { message: "Position must be at least 2 characters." }),
  preferences: z.string().min(1, { message: "Please select a preference." }),
  services: z.array(z.string()).min(1, { message: "Please select at least one service." }),
});

type FormData = z.infer<typeof formSchema>;

const Page: NextPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    business: "",
    position: "",
    preferences: "",
    services: [],
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" })); // Reset error
  };

  const validatePage = () => {
    try {
      switch (currentPage) {
        case 1:
          formSchema.pick({ name: true }).parse(formData);
          break;
        case 2:
          formSchema.pick({ preferences: true }).parse(formData);
          break;
        case 3:
          formSchema.pick({ services: true }).parse(formData);
          break;
        default:
          formSchema.parse(formData); // Validasi seluruh data di akhir
      }
      return true;
    } catch (e) {
      if (e instanceof z.ZodError) {
        const fieldErrors = e.errors.reduce((acc, error) => {
          acc[error.path[0] as string] = error.message;
          return acc;
        }, {} as Record<string, string>);
        setErrors(fieldErrors);
      }
      return false;
    }
  };

  const [currentComponent, setCurrentComponent] =
    useState<React.ReactNode | null>(null);

  useEffect(() => {
    switch (currentPage) {
      case 1:
        setCurrentComponent(
          <div className="w-full flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 flex items-center justify-center rounded-full border border-zinc-300 dark:bg-zinc-800">
                  <p className="text-xs text-muted-foreground">1</p>
                </div>
                <p>What's your name?</p>
              </div>
              <input
                placeholder="How we call you?"
                className={`outline-none ${errors.name ? "border-red-500" : ""}`}
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}
              <div className="h-[1px] w-full bg-zinc-300" />
            </div>
          </div>
        );
        break;

      case 2:
        setCurrentComponent(
          <div className="w-full flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 flex items-center justify-center rounded-full border border-zinc-300 dark:bg-zinc-800">
                <p className="text-xs text-muted-foreground">2</p>
              </div>
              <p>What do you prefer?</p>
            </div>
            <div className="flex flex-col gap-2">
              {["Option A", "Option B", "Option C"].map((option, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="preferences"
                    value={option}
                    checked={formData.preferences === option}
                    onChange={(e) =>
                      handleInputChange("preferences", e.target.value)
                    }
                  />
                  <span>{option}</span>
                </label>
              ))}
              {errors.preferences && (
                <p className="text-sm text-red-500">{errors.preferences}</p>
              )}
            </div>
          </div>
        );
        break;

      case 3:
        setCurrentComponent(
          <div className="w-full flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 flex items-center justify-center rounded-full border border-zinc-300 dark:bg-zinc-800">
                <p className="text-xs text-muted-foreground">3</p>
              </div>
              <p>Which services do you need?</p>
            </div>
            <div className="flex flex-col gap-2">
              {["Service 1", "Service 2", "Service 3"].map((service, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="services"
                    value={service}
                    checked={formData.services.includes(service)}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFormData((prev) => ({
                        ...prev,
                        services: prev.services.includes(value)
                          ? prev.services.filter((s) => s !== value)
                          : [...prev.services, value],
                      }));
                      setErrors((prev) => ({ ...prev, services: "" }));
                    }}
                  />
                  <span>{service}</span>
                </label>
              ))}
              {errors.services && (
                <p className="text-sm text-red-500">{errors.services}</p>
              )}
            </div>
          </div>
        );
        break;

      case 4:
        setCurrentComponent(
          <div className="w-full text-center">
            <h3 className="text-lg font-bold">Review Your Data</h3>
            <p>Name: {formData.name}</p>
            <p>Preference: {formData.preferences}</p>
            <p>Services: {formData.services.join(", ")}</p>
          </div>
        );
        break;

      default:
        break;
    }
  }, [currentPage, formData, errors]);

  return (
    <Container className="h-screen justify-center items-center gap-3">
      <div className="w-full">
        <SectionTitle
          text="Tell Us Your Needs"
          coloredText={["Needs", "Tell"]}
        />
        <SectionDesc>
          Overlogic will always be there to fulfill your needs.
        </SectionDesc>
      </div>
      {currentComponent}
      <div className="w-full flex justify-between">
        {currentPage != 1 ? (
          <InteractiveShimmerButton
            className="rounded-full"
            text="Previous"
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
          />
        ) : (
          <div />
        )}
        {currentPage < 4 ? (
          <InteractiveHoverButton
            text="Next"
            onClick={() => {
              if (validatePage()) {
                setCurrentPage(currentPage + 1);
              }
            }}
          />
        ) : (
          <InteractiveHoverButton
            text="Submit"
            onClick={() => {
              if (validatePage()) {
                alert("Form Submitted: " + JSON.stringify(formData));
              }
            }}
          />
        )}
      </div>
    </Container>
  );
};

export default Page;

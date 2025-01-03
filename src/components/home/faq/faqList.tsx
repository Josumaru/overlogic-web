"use client";
import { NextPage } from "next";
import { useState } from "react";
import { FaqItem } from "./faq";

const FaqList: NextPage<{ faqData: FaqItem[] }> = ({ faqData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto text-gray-900">
      <div className="accordion-group" data-accordion="default-accordion">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 accordion-active:bg-indigo-50"
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between leading-8 w-full transition duration-500 text-left hover:text-primary accordion-active:text-primary"
              aria-controls={`faq-collapse-${index}`}
              onClick={() => handleToggle(index)}
            >
              <h5 className="font-medium">{faq.question}</h5>
              <svg
                className={`transition duration-500 group-hover:text-primary ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <div
              id={`faq-collapse-${index}`}
              className={`accordion-content w-full overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
              }`}
              aria-labelledby={`faq-heading-${index}`}
            >
              <p className="text-base leading-6">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqList;

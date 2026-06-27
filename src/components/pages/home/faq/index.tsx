"use client"

import { SectionHeader } from "@/components/shared";
import { FAQ_DATA } from "@/assets/constants";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { IconQuestionMark } from "@tabler/icons-react";

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl m-auto px-10 py-16 lg:py-24" id="faq">
      <SectionHeader title="Estamos para evacuar tus dudas" badge="Preguntas" />

      <div className="max-w-3xl space-y-3">
        {FAQ_DATA.map((item, index) => (
          <div
            key={index}
            className={`border border-gray-100 rounded-2xl overflow-hidden transition-shadow duration-300 ${activeIndex === index ? "shadow-md" : "shadow-sm hover:shadow-md"}`}
          >
            <div
              className="flex justify-between items-center p-5 cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <div className="flex items-center gap-4">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300 ${activeIndex === index ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600"}`}>
                  <IconQuestionMark size={20} />
                </div>
                <h3 className="text-base lg:text-lg font-medium text-gray-900">
                  {item.question}
                </h3>
              </div>
              <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}/>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="px-5 pb-5 text-gray-500 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
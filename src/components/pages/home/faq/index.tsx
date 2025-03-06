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
    <section className="max-w-screen-2xl m-auto p-10 my-10" id="faq">
      <SectionHeader title="Estamos para evacuar tus dudas" badge="Preguntas" />

      <div className="mt-8 space-y-4">
        {FAQ_DATA.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-4"
            onClick={() => toggleAnswer(index)}
          >
            <div className="flex justify-between items-center cursor-pointer">
            <div className="flex items-center gap-3">

                <div className="h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <IconQuestionMark size={24}></IconQuestionMark>
                </div>
              <h3 className="text-lg font-medium text-gray-900">
                {item.question}
              </h3>
            </div>
              <ChevronDown className={`w-8 h-8 ${activeIndex === index ? "rotate-180" : ""}`}/>
            </div>
            {activeIndex === index && (
              <motion.p className="mt-2 text-gray-600"
                initial={{opacity: 0, height: 0}}
                animate={{opacity: 1, height:"auto"}}
                exit={{opacity: 0, height: 0}}
                transition={{duration: 0.3, stiffness: 100, ease: "easeOut", type:"spring"}}
              >{item.answer}</motion.p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
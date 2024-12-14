'use client'
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import MoreQuestionCard from "./more-question-card";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of digital solutions including web development, mobile app development, UI/UX design, cloud services, and digital marketing strategies tailored to meet your business needs."
    },
    {
      question: "How long does it typically take to complete a project?",
      answer: "Project timelines vary depending on complexity and scope. A typical web development project takes 8-12 weeks, while smaller projects might take 4-6 weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is project-based and depends on your specific requirements. We offer flexible payment plans and transparent pricing with no hidden costs. Contact us for a detailed quote tailored to your needs."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive post-launch support and maintenance packages. This includes regular updates, security patches, performance monitoring, and technical support to ensure your solution runs smoothly."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern web technologies including React, Node.js, Python, AWS, and various other cutting-edge tools and frameworks. Our team stays updated with the latest industry trends and best practices."
    }
  ];

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // <section className="mx-4 px-4 py-12 bg-[#F1DEBB] rounded-lg">
    //   <h2 className="text-2xl font-bold md:hidden">Have <br /> Questions?</h2>

    //   <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
    //   <div className="order-2 md:order-1">
    //   <h2 className="hidden md:flex text-5xl font-bold mb-4">Have <br /> Questions?</h2>
    //       <MoreQuestionCard />
    //     </div>
    //   <div className="space-y-1 md:order-2">
    //     {faqs.map((faq, index) => (
    //       <div
    //         key={index}
    //         className="border border-gray-200 rounded-lg overflow-hidden"
    //       >
    //         <button
    //           className="text-left w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors duration-200"
    //           onClick={() => toggleFAQ(index)}
    //           aria-expanded={openIndex === index}
    //         >
    //           <span className="text-lg font-bold text-gray-900">{faq.question}</span>
    //             {openIndex === index ? (
    //               <Minus className="h-6 w-6 text-indigo-500" />
    //             ) : (
    //               <Plus className="h-6 w-6 text-indigo-500" />
    //             )}
    //         </button>

    //         <div
    //           className={`transition-all duration-200 ease-in-out ${
    //             openIndex === index
    //               ? "max-h-96 opacity-100"
    //               : "max-h-0 opacity-0"
    //           }`}
    //         >
    //           <div className="p-5 border-t border-gray-200 bg-gray-50">
    //             <p className="text-gray-600">{faq.answer}</p>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    //   </div>
    // </section>
    <section className="mx-4 px-4 py-12 bg-[#F1DEBB] rounded-lg">
      {/* Title - Always at the top on mobile */}
      <h2 className="text-3xl font-bold text-center mb-6 md:hidden">Have Questions?</h2>
      {/* <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Have Questions?</h1> */}
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* FAQ List - Second on mobile, right on desktop */}
        <div className="w-full lg:w-2/3 order-1 md:order-2">
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="mt-4 bg-[#FFFAF5] rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-gray-800 ">{faq.question}</span>
                  {openIndex === index ? (
                    <div className="p-1 rounded-full bg-[#F1DEBB]">
                    <Minus className="text-gray-600 text-xl" />
                    </div>
                  ) : (
                    <div className="p-1 rounded-full bg-[#F1DEBB]">
                    <Plus className="text-gray-600 text-xl" />
                    </div>
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 bg-[#FFFAF5]">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Card - Last on mobile, left on desktop */}
        <div className="w-full lg:w-1/3 flex flex-col justify-between items-center order-2 md:order-1">
          {/* <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                <span>Chat on WhatsApp</span>
              </a>
              
              <a
                href="mailto:support@example.com"
                className="flex items-center justify-center gap-2 bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                <span>Send us an Email</span>
              </a>
            </div>
          </div> */}
          <h2 className="hidden md:flex text-5xl font-bold mb-4">Have <br /> Questions?</h2>
          <MoreQuestionCard />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
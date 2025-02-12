"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { FaMedal } from "react-icons/fa";
import { GiBoxingGlove } from "react-icons/gi";
import { useRef, memo } from "react";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const iconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.6,
    },
  },
};

const courses = [
  {
    title: "Trainer / Coach niveau 3",
    startDate: "Maart 2025",
    description:
      "Start je reis als Muay Thai Boran instructeur met onze Trainer / Coach opleiding",
    icon: FaMedal,
    path: "/opleidingen/trainer-niveau-3",
    color: "from-red-700 to-red-900",
  },
  {
    title: "Leraar niveau 4 & 5",
    startDate: "Maart 2025",
    description:
      "Word een gecertificeerde Muay Thai Boran leraar niveau 4 & 5",
    icon: GiBoxingGlove,
    path: "/opleidingen/leraar-niveau-4&5",
    color: "from-blue-700 to-blue-900",
  },
];

const OpleidingenSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, scale }}
      className="w-full px-4 sm:px-6 lg:px-8 pb-14 sm:pb-12 bg-gradient-to-b from-gray-50 via-white to-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-blue-600 to-gray-800 mb-6 sm:mb-8 text-center tracking-tight"
        >
          Onze Opleidingen
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-full md:w-[340px]"
            >
              <div
                className="relative group h-[320px] md:h-[450px] rounded-xl shadow-lg overflow-hidden 
                         transform transition-all duration-300 hover:shadow-xl 
                         md:hover:translate-y-[-4px] md:hover:scale-[1.02]"
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${course.color} opacity-90 transform transition-all duration-500 group-hover:opacity-100 group-hover:bg-gradient-to-br`}
                />

                <div className="relative flex flex-col justify-between p-4 md:p-6 text-white h-full">
                  {/* Top section: icon, title, date, description */}
                  <div>
                    <motion.div
                      variants={iconVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="mb-3 md:mb-4"
                    >
                      <course.icon
                        size={40}
                        className="transform transition-transform duration-300 group-hover:scale-110"
                      />
                    </motion.div>

                    <h3 className="text-base md:text-xl font-bold mb-2 md:mb-4 tracking-wide">
                      {course.title}
                    </h3>

                    <div className="flex items-center mb-2 md:mb-4 text-gray-100">
                      <CalendarIcon className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                      <span className="font-medium text-sm md:text-base">Start: {course.startDate}</span>
                    </div>

                    <p className="text-gray-100 font-light text-sm md:text-base">
                      {course.description}
                    </p>
                  </div>

                  {/* Bottom buttons container */}
                  <div className="mt-4 md:mt-6 flex flex-col gap-3 md:gap-4">
                    {/* Zie geplande data button */}
                    <div className="flex w-full md:w-full">
                      <Link href="/opleidingen/cursusdata" className="md:w-full">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                                   className="flex items-center gap-2 px-4 py-1.5 md:py-2
                                   bg-gradient-to-r from-red-500/30 to-blue-500/30 
                                   hover:from-red-500/40 hover:to-blue-500/40 
                                   backdrop-blur-sm rounded-lg cursor-pointer 
                                   transition-all duration-300"
                        >
                          <CalendarIcon className="h-4 w-4 md:h-5 md:w-5 text-white" />
                          <span className="text-white font-medium text-sm md:text-base">
                            Zie geplande data
                          </span>
                        </motion.div>
                      </Link>
                    </div>

                    {/* Inschrijven and Meer Info buttons */}
                    <div className="flex flex-row items-center justify-center gap-3 md:gap-4 w-full">
                      <Link href="/opleidingen/inschrijven" className="w-full md:w-fit">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full px-3 md:px-4 py-1.5 md:py-2 bg-white text-gray-900 rounded-lg font-semibold flex items-center justify-center space-x-1.5 md:space-x-2 hover:bg-gray-100 transition-colors shadow-md hover:shadow-xl"
                        >
                          <span className="text-sm md:text-base">Inschrijven</span>
                          <ArrowRightIcon className="h-4 w-4" />
                        </motion.button>
                      </Link>

                      <Link href={course.path} className="w-full md:w-fit">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full px-3 md:px-4 py-1.5 md:py-2 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all backdrop-blur-sm hover:shadow-xl"
                        >
                          <span className="text-sm md:text-base">Meer Info</span>
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default memo(OpleidingenSection);

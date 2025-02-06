"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { MotionDiv } from "@/components/shared/MotionComponents";
import { FaMedal } from "react-icons/fa";
import { GiBoxingGlove } from "react-icons/gi";
import { useRef, memo } from "react";

const titleVariants = {
  hidden: {
    opacity: 0,
    rotateX: 90,
    y: -50,
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.3,
      ease: "easeOut",
    },
  },
};

const iconVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.5,
    },
  },
};

const cardContentVariants = {
  initial: {},
  hover: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardElementVariants = {
  initial: { y: 0, opacity: 1 },
  hover: {
    y: -3,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const courses = [
  {
    title: "Trainer / Coach niveau 3",
    startDate: "Februari 2025",
    description:
      "Start je reis als Muay Thai Boran instructeur met onze Trainer / Coach opleiding",
    icon: FaMedal,
    path: "/opleidingen/trainer-niveau-3",
    color: "from-red-700 to-red-900",
  },
  {
    title: "Leraar niveau 4 & 5",
    startDate: "Februari 2025",
    description:
      "Word een gecertificeerde Muay Thai Boran leraar niveau 4 & 5",
    icon: GiBoxingGlove,
    path: "/opleidingen/leraar-niveau-4&5",
    color: "from-blue-700 to-blue-900",
  },
];

const OpleidingenSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="w-full px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1.3 }}
        className="mx-auto"
      >
        <motion.h2
          ref={titleRef}
          variants={titleVariants}
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
          className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-blue-600 to-gray-800 mb-6 sm:mb-8 text-center tracking-tight"
        >
          Onze Opleidingen
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-center items-center -mx-3">
          {courses.map((course, index) => (
            <div key={course.title} className="w-[340px] px-3">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.4 }}
                whileHover={{
                  scale: 1.02,
                  translateY: -5,
                  rotateZ: 1,
                  boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
                }}
                className="relative group w-full h-[400px] rounded-xl shadow-lg overflow-hidden"
              >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${course.color} opacity-90 transform transition-all duration-500 group-hover:opacity-100 group-hover:bg-gradient-to-br`}
              />

              <motion.div
                className="relative flex flex-col justify-between p-4 sm:p-6 text-white h-full"
                variants={cardContentVariants}
                initial="initial"
                whileHover="hover"
              >
                {/* Top section: icon, title, date, description */}
                <div>
                  <motion.div
                    variants={iconVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mb-3 sm:mb-4"
                  >
                    <motion.div variants={cardElementVariants}>
                      <course.icon
                        size={40}
                        className="transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.h3
                    variants={cardElementVariants}
                    className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 tracking-wide"
                  >
                    {course.title}
                  </motion.h3>

                  <motion.div
                    variants={cardElementVariants}
                    className="flex items-center mb-3 sm:mb-4 text-gray-100"
                  >
                    <CalendarIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    <span className="font-medium text-sm sm:text-base">Start: {course.startDate}</span>
                  </motion.div>

                  <motion.p
                    variants={cardElementVariants}
                    className="text-gray-100 font-light text-sm sm:text-base"
                  >
                    {course.description}
                  </motion.p>
                </div>

                {/* Bottom buttons */}
                <motion.div variants={cardElementVariants} className="mt-3 sm:mt-4 space-y-3">
                  {/* Zie geplande data button */}
                  <Link href="/opleidingen/cursusdata" className="block max-w-fit">
                    <MotionDiv
                      variants={cardElementVariants}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-red-500/30 to-blue-500/30 hover:from-red-500/40 hover:to-blue-500/40 backdrop-blur-sm rounded-lg cursor-pointer transition-all duration-300"
                    >
                      <CalendarIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      <span className="text-white font-medium text-sm sm:text-base">
                        Zie geplande data
                      </span>
                    </MotionDiv>
                  </Link>

                  {/* Inschrijven and Meer Info buttons */}
                  <div className="flex flex-row items-start justify-start gap-4">
                    <Link href="/opleidingen/inschrijven" className="w-full sm:w-auto">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors shadow-md hover:shadow-xl"
                      >
                        <span className="text-sm sm:text-base">Inschrijven</span>
                        <ArrowRightIcon className="h-4 w-4" />
                      </motion.button>
                    </Link>

                    <Link href={course.path} className="w-full sm:w-auto">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-4 py-2 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all backdrop-blur-sm hover:shadow-xl"
                      >
                        <span className="text-sm sm:text-base">Meer Info</span>
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default memo(OpleidingenSection);

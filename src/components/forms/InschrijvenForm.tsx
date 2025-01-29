'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { CalendarIcon, EnvelopeIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/outline'

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  opleiding: string
}

const opleidingOptions = [
  {
    id: 'assistant',
    name: 'Assistent Muay Thai Boran leraar',
    startDate: 'Januari 2025'
  },
  {
    id: 'zelfstandig',
    name: 'Zelfstandig Muay Thai Boran leraar',
    startDate: 'Januari 2025'
  },
  {
    id: 'jury',
    name: 'Jury & Scheidsrechtercursus',
    startDate: 'Februari 2025'
  }
]

const formAnimation = {
  hidden: { 
    opacity: 0,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
}

const sectionAnimation = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const inputAnimation = {
  hidden: { 
    opacity: 0,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

const inputStyles = `
  w-full px-4 py-3 
  border border-gray-200 
  rounded-xl 
  bg-white/80
  text-gray-700
  transform-gpu
  transition-all duration-200 ease-out
  focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
  hover:border-blue-300 hover:scale-[1.01]
`

const InschrijvenForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: formRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1])

  const selectedOpleiding = watch('opleiding')
  const startDate = opleidingOptions.find(opt => opt.id === selectedOpleiding)?.startDate

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('https://formspree.io/f/mwpkbvol', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          opleiding: opleidingOptions.find(opt => opt.id === data.opleiding)?.name,
          startDatum: startDate
        })
      })
      if (response.ok) {
        alert('Inschrijving succesvol verzonden!')
      } else {
        throw new Error('Verzending mislukt')
      }
    } catch (error) {
      alert('Er is een fout opgetreden. Probeer het later opnieuw.')
    }
    setIsSubmitting(false)
  }

  return (
    <motion.div
      ref={formRef}
      style={{ opacity, scale }}
      className="max-w-4xl mx-auto px-4 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <motion.h1 
          className="text-4xl font-bold mb-3 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Inschrijven voor Opleidingen
        </motion.h1>
        <motion.p 
          className="text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Vul het onderstaande formulier in om je in te schrijven
        </motion.p>
      </motion.div>

      <motion.form 
        onSubmit={handleSubmit(onSubmit)}
        variants={formAnimation}
        initial="hidden"
        animate="visible"
        className="bg-white/90 rounded-2xl shadow-xl relative backdrop-blur-sm overflow-hidden transform-gpu"
      >
        {/* Background Gradients with Animation */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-blue-600/5"
          animate={{ 
            background: [
              "linear-gradient(to bottom right, rgba(239,68,68,0.05), transparent, rgba(37,99,235,0.05))",
              "linear-gradient(to bottom right, rgba(37,99,235,0.05), transparent, rgba(239,68,68,0.05))"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 via-transparent to-red-600/5"
          animate={{ 
            background: [
              "linear-gradient(to top right, rgba(37,99,235,0.05), transparent, rgba(239,68,68,0.05))",
              "linear-gradient(to top right, rgba(239,68,68,0.05), transparent, rgba(37,99,235,0.05))"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
        
        {/* Form Content */}
        <div className="relative z-10 p-8 md:p-10 space-y-8">
          {/* Personal Information Section */}
          <motion.div 
            variants={sectionAnimation}
            className="space-y-6"
          >
            <h2 className="text-xl font-semibold text-gray-800 pb-2 border-b border-gray-200">
              Persoonlijke Informatie
            </h2>
            
            <motion.div 
              variants={sectionAnimation}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Voornaam */}
              <motion.div variants={inputAnimation}>
                <label className="block text-base font-semibold text-gray-800 mb-2">
                  <div className="flex items-center gap-2">
                    <UserIcon className="w-5 h-5 text-blue-600" />
                    <span>Voornaam</span>
                  </div>
                </label>
                <input
                  {...register('firstName', { required: true })}
                  className={inputStyles}
                  placeholder="Uw voornaam"
                />
                {errors.firstName && (
                  <span className="text-sm text-red-500 mt-1">Dit veld is verplicht</span>
                )}
              </motion.div>

              {/* Achternaam */}
              <motion.div variants={inputAnimation}>
                <label className="block text-base font-semibold text-gray-800 mb-2">
                  <div className="flex items-center gap-2">
                    <UserIcon className="w-5 h-5 text-blue-600" />
                    <span>Achternaam</span>
                  </div>
                </label>
                <input
                  {...register('lastName', { required: true })}
                  className={inputStyles}
                  placeholder="Uw achternaam"
                />
                {errors.lastName && (
                  <span className="text-sm text-red-500 mt-1">Dit veld is verplicht</span>
                )}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div 
            variants={sectionAnimation}
            className="space-y-6"
          >
            <h2 className="text-xl font-semibold text-gray-800 pb-2 border-b border-gray-200">
              Contactgegevens
            </h2>

            <motion.div 
              variants={sectionAnimation}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Email */}
              <motion.div variants={inputAnimation}>
                <label className="block text-base font-semibold text-gray-800 mb-2">
                  <div className="flex items-center gap-2">
                    <EnvelopeIcon className="w-5 h-5 text-blue-600" />
                    <span>E-mail</span>
                  </div>
                </label>
                <input
                  {...register('email', {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                  })}
                  className={inputStyles}
                  placeholder="uw.email@voorbeeld.nl"
                />
                {errors.email && (
                  <span className="text-sm text-red-500 mt-1">Voer een geldig e-mailadres in</span>
                )}
              </motion.div>

              {/* Telefoon */}
              <motion.div variants={inputAnimation}>
                <label className="block text-base font-semibold text-gray-800 mb-2">
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="w-5 h-5 text-blue-600" />
                    <span>Telefoon</span>
                  </div>
                </label>
                <input
                  {...register('phone', { required: true })}
                  className={inputStyles}
                  placeholder="06 12345678"
                />
                {errors.phone && (
                  <span className="text-sm text-red-500 mt-1">Dit veld is verplicht</span>
                )}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Course Selection Section */}
          <motion.div 
            variants={sectionAnimation}
            className="space-y-6"
          >
            <h2 className="text-xl font-semibold text-gray-800 pb-2 border-b border-gray-200">
              Opleiding Selectie
            </h2>

            <motion.div variants={inputAnimation}>
              <label className="block text-base font-semibold text-gray-800 mb-2">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-blue-600" />
                  <span>Kies je opleiding</span>
                </div>
              </label>
              <select
                {...register('opleiding', { required: true })}
                className={`${inputStyles} appearance-none`}
              >
                <option value="">Selecteer opleiding</option>
                {opleidingOptions.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>

              {selectedOpleiding && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 p-4 bg-gradient-to-r from-red-50 to-blue-50 rounded-xl
                           border border-blue-100/50 shadow-sm backdrop-blur-sm"
                >
                  <motion.span 
                    className="text-sm font-medium text-gray-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    Start datum: {startDate}
                  </motion.span>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            variants={inputAnimation}
            className="w-full px-8 py-4 bg-gradient-to-r from-red-600 to-blue-600
                     text-white font-semibold rounded-xl shadow-lg
                     hover:from-red-500 hover:to-blue-500
                     disabled:opacity-50 disabled:cursor-not-allowed
                     transform-gpu transition-all duration-300"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Verzenden...</span>
              </div>
            ) : (
              'Inschrijven'
            )}
          </motion.button>
        </div>
      </motion.form>
    </motion.div>
  )
}

export default InschrijvenForm
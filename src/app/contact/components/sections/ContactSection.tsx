'use client'
import { motion } from 'framer-motion'
import { EnvelopeIcon, UserIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

type FormData = {
  naam: string
  voornaam?: string
  email: string
  telefoon?: string
  bericht: string
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

const ContactSection = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('https://formspree.io/f/xpwzljvd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      if (response.ok) {
        alert('Bericht succesvol verzonden!')
        reset() // Reset form after successful submission
      } else {
        throw new Error('Verzending mislukt')
      }
    } catch (error) {
      alert('Er is een fout opgetreden. Probeer het later opnieuw.')
    }
    setIsSubmitting(false)
  }

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
            Neem contact met ons op
          </h1>
          <p className="text-gray-600 text-lg mb-4">
            Heeft u een vraag of wilt u meer informatie? Wij staan voor u klaar! 
            Vul onderstaand formulier in en we nemen binnen 48 uur contact met u op. 
          </p>
          <p className="text-gray-600 text-lg">
            Of stuur ons direct een e-mail:{' '}
            <a 
              href="mailto:info@dmbf.nl" 
              className="inline-block text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
            >
              info@dmbf.nl
            </a>
          </p>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/90 rounded-2xl shadow-xl relative backdrop-blur-sm overflow-hidden transform-gpu"
        >
          {/* Background Gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-blue-600/5" />
          
          {/* Form Content */}
          <div className="relative z-10 p-8 md:p-10 space-y-8">
            <div className="space-y-6">
              {/* Naam (Required) */}
              <div>
                <label className="block text-base font-semibold text-gray-800 mb-2">
                  <div className="flex items-center gap-2">
                    <UserIcon className="w-5 h-5 text-blue-600" />
                    <span>Naam *</span>
                  </div>
                </label>
                <input
                  {...register('naam', { required: true })}
                  className={inputStyles}
                  placeholder="Uw naam"
                />
                {errors.naam && (
                  <span className="text-sm text-red-500 mt-1">Dit veld is verplicht</span>
                )}
              </div>

              {/* Voornaam (Optional) */}
              <div>
                <label className="block text-base font-semibold text-gray-800 mb-2">
                  <div className="flex items-center gap-2">
                    <UserIcon className="w-5 h-5 text-blue-600" />
                    <span>Voornaam</span>
                  </div>
                </label>
                <input
                  {...register('voornaam')}
                  className={inputStyles}
                  placeholder="Uw voornaam"
                />
              </div>

              {/* Email (Required) */}
              <div>
                <label className="block text-base font-semibold text-gray-800 mb-2">
                  <div className="flex items-center gap-2">
                    <EnvelopeIcon className="w-5 h-5 text-blue-600" />
                    <span>E-mail *</span>
                  </div>
                </label>
                <input
                  type="email"
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
              </div>

              {/* Phone (Optional) */}
              <div>
                <label className="block text-base font-semibold text-gray-800 mb-2">
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="w-5 h-5 text-blue-600" />
                    <span>Telefoon</span>
                  </div>
                </label>
                <input
                  type="tel"
                  {...register('telefoon')}
                  className={inputStyles}
                  placeholder="06 12345678"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-base font-semibold text-gray-800 mb-2">
                  <div className="flex items-center gap-2">
                    <EnvelopeIcon className="w-5 h-5 text-blue-600" />
                    <span>Bericht *</span>
                  </div>
                </label>
                <textarea
                  {...register('bericht', { required: true })}
                  className={`${inputStyles} h-32 resize-none`}
                  placeholder="Uw bericht"
                />
                {errors.bericht && (
                  <span className="text-sm text-red-500 mt-1">Dit veld is verplicht</span>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
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
                'Verzenden'
              )}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default ContactSection
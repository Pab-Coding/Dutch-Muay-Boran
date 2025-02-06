'use client'

import { motion } from 'framer-motion'

interface KhanTabsProps {
  activeTab: number
  setActiveTab: (tab: number) => void
}

const KhanTabs = ({ activeTab, setActiveTab }: KhanTabsProps) => {
  const tabs = [
    { id: 1, title: "1e Khan", color: "white", prajeat: "witte prajeat" },
    { id: 2, title: "2e Khan", color: "yellow", prajeat: "gele prajeat" },
    { id: 3, title: "3e Khan", color: "yellow-white", prajeat: "geel-witte prajeat" },
    { id: 4, title: "4e Khan", color: "green", prajeat: "groene prajeat" },
    { id: 5, title: "5e Khan", color: "green-white", prajeat: "groen-witte prajeat" },
    { id: 6, title: "6e Khan", color: "blue", prajeat: "blauwe prajeat" },
  ]

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row gap-2 p-2">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              relative w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base
              transition-all duration-200 flex justify-center items-center
              ${activeTab === tab.id 
                ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
              }
            `}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex flex-col items-center space-y-0.5 sm:space-y-1">
              <span>{tab.title}</span>
              <div 
                className={`h-1 w-12 rounded ${
                  tab.color === 'white' ? 'bg-gray-200' :
                  tab.color === 'yellow' ? 'bg-yellow-400' :
                  tab.color === 'yellow-white' ? 'bg-yellow-200' :
                  tab.color === 'green' ? 'bg-green-500' :
                  tab.color === 'green-white' ? 'bg-green-200' :
                  'bg-blue-500'
                }`} 
              />
              <span className="text-[10px] sm:text-xs opacity-75 text-center">{tab.prajeat}</span>
            </div>

            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg -z-10"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  )
}

export default KhanTabs

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import KhanTabs from './KhanTabs'

type Section = {
  title: string
  items: string[]
}

type KhanData = {
  title: string
  sections: Section[]
}

type KhanContentType = {
  [key: number]: KhanData
}

const khanContent: KhanContentType = {
    1: {
      title: "Exameneisen 1e khan - witte prajeat",
      sections: [
        {
          title: "Warming-up",
          items: [
            "Joggen, springtouwen, loopbewegingen",
            "Rekken: Boven en onderlichaam",
            "Tellen: Thais tellen 1 t/m 10"
          ]
        },
        {
          title: "Cherng Mahd (basis stoottechnieken)",
          items: [
            "50x mahd trong (directe stoot) (zowel sai als kua)",
            "50x mahd suhy (opstoot) (zowel sai als kua)",
            "50x mahd tawad (hoek) (zowel sai als kua)"
          ]
        },
        {
          title: "Mahd pahsom (stootcombinaties)",
          items: [
            "15x mahd trong sai + kua + mahd suhy kua",
            "15x mahd suhy kua + sai + mahd trong kua",
            "15x mahd trong sai + kua + mahd tawad sai + kua",
            "15x mahd tawad sai + kua + mahd trong sai + kua",
            "15x mahd tawad sai + kua + mahd suhy sai + kua",
            "15x mahd suhy sai + kua + mahd tawad sai + kua"
          ]
        },
        {
          title: "Cherng sok (basis elleboogtechnieken)",
          items: [
            "15x sok tee (diagonale elleboog van boven naar beneden) (zowel sai als kua)",
            "15x sok tad (horizontale elleboog van buiten naar binnen) (zowel sai als kua)"
          ]
        },
        {
          title: "Sok pahsom",
          items: [
            "15x sok tee sai + sok tad kua",
            "15x sok tad sai + sok tee kua"
          ]
        },
        {
          title: "Cherng khao (basis knietechnieken)",
          items: [
            "15x khao trong (voorwaartse knie) (zowel sai als kua)",
            "15x khao chiang (schuine knie) (zowel sai als kua)"
          ]
        },
        {
          title: "Cherng teep (basis duwtraptechnieken)",
          items: [
            "15x teep trong (afhoudtrap) (zowel sai als kua)"
          ]
        },
        {
          title: "Cherng dteh (basis traptechnieken)",
          items: [
            "15x dthen chiang (ronddraaitrap schuin omhoog) naar benen en lichaam (zowel sai als kua)"
          ]
        },
        {
          title: "Blokkeringen",
          items: [
            "15x blokkering met de hand (pid, pad, perd)",
            "15x blokkering met elleboog",
            "15x zijwaarts ontwijken (yan)"
          ]
        },
        {
          title: "5 minuten combinatietechnieken op pads (pao)",
          items: [
            "Mahd, dteh en teep (stoten, trappen en duwtrappen)",
            "Mahd en khao (stoten en knieën)",
            "Dteh en khao (trappen en knieën)"
          ]
        }
      ]
    },
    2: {
      title: "Exameneisen 2e khan - gele prajeat",
      sections: [
        {
          title: "Warming-up",
          items: [
            "Joggen, springtouwen, loopbewegingen",
            "Rekken: Boven en onderlichaam",
            "Tellen: Thais tellen 1 t/m 10"
          ]
        },
        {
          title: "Khao bong (knieblokkeringen)",
          items: [
            "20x khao bong nok laag (buitenblokkering met knie) (zowel sai als kua)",
            "20x khao bong nok middel (buitenblokkering met knie) (zowel sai als kua)",
            "20x khao bong nok hoog (buitenblokkering met knie) (zowel sai als kua)",
            "20x khao bong nai laag (binnenblokkering met knie (zowel sai als kua)",
            "20x khao bong nai middel (binnenblokkering met knie (zowel sai als kua)",
            "20x khao bong nai hoog (binnenblokkering met knie (zowel sai als kua)"
          ]
        },
        {
          title: "Loopbewegingen",
          items: [
            "Seub"
          ]
        },
        {
          title: "Extra vereisten",
          items: [
            "Alle technieken van de 1e Khan"
          ]
        }
      ]
    },
    3: {
      title: "Exameneisen 3e khan - geel-witte prajeat",
      sections: [
        {
          title: "Warming-up",
          items: [
            "Joggen, springtouwen, loopbewegingen",
            "Rekken: Boven en onderlichaam",
            "Schaduwboksen: 2x 2 minuten schaduwboksen"
          ]
        },
        {
          title: "Loopbewegingen op Thaise muziek",
          items: [
            "1x 2 minuten seub voor en achteruit",
            "1x 2 minuten yang saam kum"
          ]
        },
        {
          title: "Cherng mahd",
          items: [
            "20x mahd kwaang (swing stoot) (zowel sai als kua)",
            "20x mahd pahsom (stootcombinaties) van 2 technieken op pads",
            "20x mahd pahsom (stootcombinaties van 3 technieken op pads"
          ]
        },
        {
          title: "Cherng sok",
          items: [
            "20x sok tee, sok tad, sok ngad (zowel sai als kua)",
            "20x sok pung (speerpunt elleboog) (zowel sai als kua)",
            "20x sok pahsom (elleboogcombinaties)"
          ]
        },
        {
          title: "Cherng khao",
          items: [
            "20x khao trong (voorwaartse knie) (zowel sai als kua)",
            "20x khao chiang (schuine knie) (zowel sai als kua)",
            "20x khao tee (knie van buiten naar binnen, zoals tijdens clinchen) (zowel sai als kua)"
          ]
        },
        {
          title: "Cherng teep",
          items: [
            "20x teep trong (afhoudtrap) (zowel sai als kua)",
            "20x teep kwaang (zijwaartse duwtrap) (zowel sai als kua)"
          ]
        },
        {
          title: "Cherng dteh",
          items: [
            "20x dteh tawad (horizontale ronddraaitrap) (zowel sai als kua)",
            "20x teep en dteh pahsom (trapcombinaties) op trapkussen"
          ]
        },
        {
          title: "Sparren",
          items: [
            "2x 2 minuten licht sparren"
          ]
        },
        {
          title: "Extra vereisten",
          items: [
            "Alle technieken van de 1e en 2e khan"
          ]
        }
      ]
    },
    4: {
        title: "Exameneisen 4e khan - groene prajeat",
        sections: [
          {
            title: "Warming-up op Thaise manier",
            items: [
              "Khao bong nai + khao bong nok (knieblokkeringen aan de binnen en buitenkant)",
              "Schaduwboksen met alleen mahd",
              "Schaduwboksen met mahd, sok en khao",
              "Schaduwboksen met mahd, sok, khao, teep en dteh"
            ]
          },
          {
            title: "Loopbewegingen op Thaise muziek",
            items: [
              "Kum Chung (gevechtshouding) links en rechtsvoor",
              "1x 2 minuten seub voor en achteruit",
              "1x 2 minuten yang saam kum"
            ]
          },
          {
            title: "Cherng mahd",
            items: [
              "20x mahd pahsom (stootcombinaties) van 2 technieken op pads",
              "20x mahd pahsom (stootcombinaties van 3 technieken op pads",
              "20x mahd pahsom (stootcombinaties) van 4 technieken op pads"
            ]
          },
          {
            title: "Cherng sok",
            items: [
              "20x sok tee, sok tad, sok ngad (zowel sai als kua)",
              "20x sok pung (speerpunt elleboog) (zowel sai als kua)",
              "20x sok gratung (zowel sai als kua)",
              "20x sok pahsom (elleboogcombinaties) van 2 technieken",
              "20x sok pahsom (elleboogcombinaties) van 3 technieken"
            ]
          },
          {
            title: "Cherng khao",
            items: [
              "20x khao trong (voorwaartse knie) (zowel sai als kua)",
              "20x khao chiang (schuine knie) op bokszak of pads (zowel sai als kua)",
              "20x khao tad, khao tee, khao laa in de lucht of met partner (zowel sai als kua)"
            ]
          },
          {
            title: "Cherng teep",
            items: [
              "20x teep trong (afhoudtrap) (voorste been)",
              "20x teep trong (afhoudtrap) (achterste been)",
              "20x teep kwaang (zijwaartse duwtrap) (zowel sai als kua)"
            ]
          },
          {
            title: "Cherng dteh",
            items: [
              "20x dteh trong (voorwaartse trap) (voorste been)",
              "20x dteh trong (voorwaartse trap) (achterste been)"
            ]
          },
          {
            title: "Look Mai Muay Thai",
            items: [
              "Dab Chawala",
              "Prah raam fad sawn",
              "Noo dtai rahw",
              "Wai Kru"
            ]
          },
          {
            title: "Extra vereisten",
            items: [
              "Alle eisen van de voorafgaande graden"
            ]
          }
        ]
      },
    5: {
        title: "Exameneisen 5e khan - groen-witte prajeat",
        sections: [
          {
            title: "Warming-up op Thaise manier",
            items: [
              "Khao bong nai + khao bong nok (knieblokkeringen aan de binnen en buitenkant)",
              "Schaduwboksen met alleen mahd",
              "Schaduwboksen met mahd, sok en khao",
              "Schaduwboksen met mahd, sok, khao, teep en dteh"
            ]
          },
          {
            title: "Cherng sok",
            items: [
              "20x sok tee (diagonaal van boven naar beneden) (zowel sai als kua)",
              "20x sok tad (horizontaal van buiten naar binnen) (zowel sai als kua)",
              "20x sok ngad (verticaal van beneden naar boven) (zowel sai als kua)",
              "20x sok pung (speerpunt elleboog) (zowel sai als kua)",
              "20x sok gratung (instappen en verticale elleboog van beneden naar boven) (zowel sai als kua)",
              "20x sok glab (achterwaartse horizontale elleboog) (zowel sai als kua)",
              "20x sok pahsom (elleboogcombinaties) van 2 technieken op pads of bokszak",
              "20x sok pahsom (elleboogcombinaties) van 3 technieken op pads of bokszak"
            ]
          },
          {
            title: "Cherng khao",
            items: [
              "20x khao trong (voorwaartse knie) (zowel sai als kua)",
              "20x khao chiang (schuine knie) op bokszak of pads (zowel sai als kua)",
              "20x khao tad, khao tee, khao laa in de lucht of met partner (zowel sai als kua)",
              "20x khao loi (gesprongen voorwaartse knie) met partner (zowel links als rechts)",
              "Khao pahsom op bokszak of trapkussen"
            ]
          },
          {
            title: "Cherng teep",
            items: [
              "20x teep trong (afhoudtrap) (voorste been)",
              "20x teep trong (afhoudtrap) (achterste been)",
              "20x teep kwaang (zijwaartse duwtrap) (zowel sai als kua)"
            ]
          },
          {
            title: "Cherng dteh",
            items: [
              "20x dteh trong (voorwaartse trap) (voorste been)",
              "20x dteh trong (voorwaartse trap) (achterste been)",
              "Teep en dteh pahsom op trapkussen of bokszak"
            ]
          },
          {
            title: "Look Mai Muay Thai",
            items: [
              "Erawan suhy ngai",
              "Sok pung malai",
              "Hanuman hawh daam",
              "Pra raam faad hang",
              "Hongpeek hawd",
              "Noo thda rai",
              "Hak kor erawan",
              "Ega chaack rang"
            ]
          },
          {
            title: "Sparren",
            items: [
              "2x 2 minuten licht sparren"
            ]
          },
          {
            title: "Extra vereisten",
            items: [
              "Alle eisen van de voorafgaande graden"
            ]
          }
        ]
      },
    6: {
        title: "Exameneisen 6e khan - blauwe prajeat",
        sections: [
          {
            title: "Warming-up op Thaise manier",
            items: [
              "Khao bong nai + khao bong nok (knieblokkeringen aan de binnen en buitenkant)",
              "Schaduwboksen met alleen mahd",
              "Schaduwboksen met mahd, sok, khao, teep en dteh"
            ]
          },
          {
            title: "Cherng mahd",
            items: [
              "20x mahd trong (zowel sai als kua)",
              "20x mahd tawad (zowel sai als kua)",
              "20x mahd khok (zowel sai als kua)",
              "Mahd pahsom op pads of bokszak"
            ]
          },
          {
            title: "Cherng sok",
            items: [
              "20x sok tee (diagonaal van boven naar beneden) (zowel sai als kua)",
              "20x sok tad (horizontaal van buiten naar binnen) (zowel sai als kua)",
              "20x sok ngad (verticaal van beneden naar boven) (zowel sai als kua)",
              "20x sok pung (speerpunt elleboog) (zowel sai als kua)",
              "20x sok gratung (instappen en verticale elleboog van beneden naar boven) (zowel sai als kua)",
              "20x sok glab (achterwaartse horizontale elleboog) (zowel sai als kua)",
              "20x sok sab (verticale elleboog van boven naar beneden, hakbeweging) (zowel sai als kua)",
              "20x sok sab koo (dubbele verticale elleboog van boven naar beneden) (zowel sai als kua)"
            ]
          },
          {
            title: "Cherng khao",
            items: [
              "20x khao trong (voorwaartse knie) (zowel sai als kua)",
              "20x khao chiang (schuine knie) op bokszak of pads (zowel sai als kua)",
              "20x khao tad, khao tee, khao laa in de lucht of met partner (zowel sai als kua)",
              "20x khao loi (gesprongen voorwaartse knie) met partner (zowel sai als kua)"
            ]
          },
          {
            title: "Cherng teep",
            items: [
              "20x teep trong (afhoudtrap) (voorste been)",
              "20x teep trong (afhoudtrap) (achterste been)"
            ]
          },
          {
            title: "Cherng dteh",
            items: [
              "20x dteh trong (voorwaartse trap) (voorste been)",
              "20x dteh trong (voorwaartse trap) (achterste been)",
              "20x dteh chiang (zowel sai als kua)",
              "20x dteh tad (zowel sai als kua)"
            ]
          },
          {
            title: "Verdediging",
            items: [
              "Tegen een stoot",
              "Tegen een stoot en een elleboog",
              "Tegen een knie",
              "Tegen clinchen"
            ]
          },
          {
            title: "Overnames",
            items: [
              "Verdediging tegen teep trong en overname met dteh chiang",
              "Teep trong opvangen en overnemen met khao trong",
              "Blokkeer dteh chiang en overnemen met khao tad",
              "Blokkeer dteh chiang en overnemen met sok tad",
              "Blokkeer dteh chiang en overnemen met dteh chiang"
            ]
          },
          {
            title: "Mae Mai + Look Mai Muay Thai",
            items: [
              "Dab chawala",
              "Erawan suhy ngai",
              "Inao tang grit"
            ]
          },
          {
            title: "Extra vereisten",
            items: [
              "Alle eisen van de voorafgaande graden"
            ]
          }
        ]
      }
  }
  const KhanSystemSection = () => {
    const [activeTab, setActiveTab] = useState(1)
  
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-800 text-center"
        >
          Khan Systeem
        </motion.h2>
  
        <KhanTabs activeTab={activeTab} setActiveTab={setActiveTab} />
  
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            {khanContent[activeTab] && (
              <>
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold text-gray-800 mb-8 pb-4 border-b"
                >
                  {khanContent[activeTab].title}
                </motion.h3>
  
                <div className="space-y-8">
                  {khanContent[activeTab].sections.map((section, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-4"
                    >
                      <h4 className="text-xl font-semibold text-gray-800">
                        {section.title}
                      </h4>
                      <ul className="space-y-2 list-disc pl-5">
                        {section.items.map((item, idx) => (
                          <li key={idx} className="text-gray-600">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.section>
    )
  }
  
  export default KhanSystemSection
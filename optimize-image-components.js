const fs = require('fs').promises;
const path = require('path');

const files = [
  'src/components/layout/Header.tsx',
  'src/components/home/TeamSection.tsx',
  'src/components/home/LatestNewsHighlight.tsx',
  'src/app/organisatie/sportscholen/components/LogoSection.tsx',
  'src/app/organisatie/samenwerkingsverbanden/components/ImageSection.tsx',
  'src/app/organisatie/components/HistorySection.tsx',
  'src/app/organisatie/components/HeroSection.tsx',
  'src/app/opleidingen/zelfstandig-leraar/components/HeroSection.tsx',
  'src/app/opleidingen/components/OpleidingenHero.tsx',
  'src/app/nieuws/components/HeroSection.tsx',
  'src/app/opleidingen/assistent-leraar/components/HeroSection.tsx',
  'src/app/muay-thai/components/HeroSection.tsx',
  'src/app/examens/exameneisen/page.tsx',
  'src/app/examens/exameneisen/components/ThaiseBenamingenSection.tsx',
  'src/app/examens/components/ExamensInfo.tsx',
  'src/app/examens/components/KhanSystemTable.tsx',
  'src/app/examens/components/HeroSection.tsx',
  'src/app/examens/exameneisen/components/HeroSection.tsx'
];

async function optimizeImageComponents() {
  try {
    for (const filePath of files) {
      console.log(`Processing ${filePath}...`);
      let content = await fs.readFile(filePath, 'utf8');
      
      // Update quality={100} to quality={80}
      content = content.replace(/quality={100}/g, 'quality={80}');
      
      // Add sizes prop to Image components with fill prop
      content = content.replace(
        /(<Image[^>]*?fill[^>]*?)(?!.*sizes=)([^>]*?>)/g,
        '$1 sizes="100vw"$2'
      );
      
      // Add sizes prop to Image components without fill prop
      content = content.replace(
        /(<Image[^>]*?)(?!.*fill)(?!.*sizes=)([^>]*?>)/g,
        '$1 sizes="(max-width: 768px) 100vw, 50vw"$2'
      );
      
      await fs.writeFile(filePath, content, 'utf8');
      console.log(`✓ Updated ${filePath}`);
    }
    
    console.log('\nAll components optimized successfully!');
  } catch (error) {
    console.error('Error optimizing components:', error);
  }
}

optimizeImageComponents();

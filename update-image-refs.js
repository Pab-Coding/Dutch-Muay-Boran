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

async function updateImageRefs() {
  try {
    for (const filePath of files) {
      console.log(`Processing ${filePath}...`);
      const content = await fs.readFile(filePath, 'utf8');
      
      // Replace image extensions with .webp
      const updatedContent = content.replace(
        /src="([^"]+)\.(jpg|jpeg|png)"/g,
        'src="$1.webp"'
      );
      
      if (content !== updatedContent) {
        await fs.writeFile(filePath, updatedContent, 'utf8');
        console.log(`✓ Updated ${filePath}`);
      } else {
        console.log(`No changes needed in ${filePath}`);
      }
    }
    
    console.log('\nAll files processed successfully!');
  } catch (error) {
    console.error('Error updating files:', error);
  }
}

updateImageRefs();

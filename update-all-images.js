const fs = require('fs').promises;
const path = require('path');

// Files to update
const FILES_TO_UPDATE = [
  './src/components/home/WelcomeSection.tsx',
  './src/app/muay-boran/components/HeroSection.tsx',
  './src/app/muay-thai/components/HeroSection.tsx',
  './src/app/opleidingen/components/OpleidingenHero.tsx',
  './src/app/opleidingen/leraar-niveau-4&5/components/HeroSection.tsx',
  './src/app/opleidingen/trainer-niveau-3/components/HeroSection.tsx',
  './src/app/examens/components/HeroSection.tsx',
  './src/app/nieuws/components/HeroSection.tsx',
  './src/app/organisatie/components/HeroSection.tsx'
];

async function updateFile(filePath) {
  try {
    let content = await fs.readFile(filePath, 'utf8');
    let updated = false;

    // Replace InstantImage imports
    if (content.includes("import InstantImage from '@/components/shared/InstantImage'")) {
      content = content.replace(
        "import InstantImage from '@/components/shared/InstantImage'",
        "import OptimizedImage from '@/components/shared/OptimizedImage'"
      );
      updated = true;
    }

    // Replace INLINE_IMAGES imports
    if (content.includes("import { INLINE_IMAGES } from '@/constants/inlineImages'")) {
      content = content.replace(
        "import { INLINE_IMAGES } from '@/constants/inlineImages'",
        "import { MINIMAL_INLINE_IMAGES } from '@/constants/minimalInlineImages'"
      );
      updated = true;
    }

    // Replace InstantImage usage with OptimizedImage
    content = content.replace(/<InstantImage/g, '<OptimizedImage');

    // Remove inlineSrc and backgroundSrc props, update quality and blurDataURL
    content = content.replace(
      /inlineSrc={[^}]+}\s*/g, ''
    );
    content = content.replace(
      /backgroundSrc={[^}]+}\s*/g, ''
    );
    content = content.replace(
      /quality={90}/g, 'quality={85}'
    );
    
    // Update blurDataURL references
    content = content.replace(
      /blurDataURL="[^"]*"/g, 
      'blurDataURL={MINIMAL_INLINE_IMAGES.defaultBlur}'
    );

    // Replace specific INLINE_IMAGES references
    content = content.replace(
      /INLINE_IMAGES\.\w+/g, 
      'MINIMAL_INLINE_IMAGES.defaultBlur'
    );

    if (updated || content !== await fs.readFile(filePath, 'utf8')) {
      await fs.writeFile(filePath, content);
      console.log(`✓ Updated: ${filePath}`);
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log(`  - File not found: ${filePath}`);
    } else {
      console.error(`  ✗ Error updating ${filePath}:`, error.message);
    }
  }
}

async function updateAllFiles() {
  console.log('Updating all image components...\n');
  
  for (const file of FILES_TO_UPDATE) {
    await updateFile(file);
  }

  console.log('\n✓ All files updated!');
  console.log('\nNow update your image sources to use -optimized versions:');
  console.log('- Replace "/images/banner-principal.webp" with "/images/banner-principal-optimized.webp"');
  console.log('- Replace "/images/flyer-amsterdam.webp" with "/images/flyer-amsterdam-optimized.webp"');
  console.log('- And so on for other large images...');
}

updateAllFiles();
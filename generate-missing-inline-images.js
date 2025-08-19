const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesToProcess = [
  { name: 'nieuws', file: 'nieuws.webp' },
  { name: 'flyerAmsterdam', file: 'flyer-amsterdam.webp' },
  { name: 'opleidingen', file: 'opleidingen.webp' },
  { name: 'examensMuay', file: 'examens-muay.webp' },
  { name: 'muayThaiBoran', file: 'muay-thai-boran.webp' },
  { name: 'zelfStandig', file: 'zelf-standig.webp' }
];

async function generateInlineImages() {
  const results = {};

  for (const image of imagesToProcess) {
    const inputPath = path.join('./public/images', image.file);
    
    try {
      // Check if file exists
      if (!fs.existsSync(inputPath)) {
        console.log(`❌ File not found: ${image.file}`);
        continue;
      }

      console.log(`🔄 Processing ${image.file}...`);

      // Generate tiny inline version (10x6 pixels)
      const inlineBuffer = await sharp(inputPath)
        .resize(10, 6, { fit: 'cover' })
        .webp({ quality: 20 })
        .toBuffer();

      const inlineBase64 = `data:image/webp;base64,${inlineBuffer.toString('base64')}`;

      // Generate small background version (32x20 pixels)
      const bgBuffer = await sharp(inputPath)
        .resize(32, 20, { fit: 'cover' })
        .webp({ quality: 30 })
        .toBuffer();

      const bgBase64 = `data:image/webp;base64,${bgBuffer.toString('base64')}`;

      results[`${image.name}Inline`] = inlineBase64;
      results[`${image.name}InlineBg`] = bgBase64;

      console.log(`✅ Generated inline images for ${image.file}`);
      console.log(`   Inline size: ${(inlineBase64.length / 1024).toFixed(1)}KB`);
      console.log(`   Background size: ${(bgBase64.length / 1024).toFixed(1)}KB`);

    } catch (error) {
      console.error(`❌ Error processing ${image.file}:`, error.message);
    }
  }

  // Output the results in the format needed for inlineImages.ts
  console.log('\n📋 Add these to your inlineImages.ts file:\n');
  for (const [key, value] of Object.entries(results)) {
    console.log(`  "${key}": "${value}",`);
  }

  return results;
}

generateInlineImages().catch(console.error);
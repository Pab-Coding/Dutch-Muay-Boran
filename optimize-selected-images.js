const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const imagesToOptimize = [
  'flyer-amsterdam.webp',
  'muay-thai-boran.webp',
  'muay-thai.webp',
  'dates.webp'
];

async function optimizeImage(filename) {
  const inputPath = path.join('public/images', filename);
  const outputPath = path.join('public/images', `optimized-${filename}`);
  
  try {
    // Start with original dimensions and quality 70 to match Next.js Image settings
    let quality = 70;
    let fileSize = Infinity;
    const targetSize = 250 * 1024; // 250 KB in bytes
    
    // Get original image metadata
    const metadata = await sharp(inputPath).metadata();
    let width = metadata.width;
    let height = metadata.height;
    
    while (fileSize > targetSize) {
      // If quality is getting too low, focus on dimension reduction
      if (quality < 30) {
        width = Math.round(width * 0.9);
        height = Math.round(height * 0.9);
        quality = 30; // Reset quality to maintain good image clarity
      }

      await sharp(inputPath)
        .resize(width, height)
        .webp({ quality })
        .toFile(outputPath);
      
      const stats = await fs.stat(outputPath);
      fileSize = stats.size;
      
      if (fileSize > targetSize && quality > 20) {
        quality -= 5;
      }
    }
    
    // Replace original with optimized version
    await fs.unlink(inputPath);
    await fs.rename(outputPath, inputPath);
    
    console.log(`Successfully optimized ${filename} to ${Math.round(fileSize / 1024)}KB with quality ${quality}`);
  } catch (error) {
    console.error(`Error processing ${filename}:`, error);
  }
}

async function main() {
  for (const image of imagesToOptimize) {
    await optimizeImage(image);
  }
}

main().catch(console.error);

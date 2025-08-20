const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const IMAGES_DIR = './public/images';
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1080;
const QUALITY = 80;

async function optimizeImage(imagePath) {
  try {
    const ext = path.extname(imagePath).toLowerCase();
    if (!['.webp', '.jpg', '.jpeg', '.png'].includes(ext)) {
      return;
    }

    const image = sharp(imagePath);
    const metadata = await image.metadata();
    
    console.log(`Processing: ${imagePath} (${metadata.width}x${metadata.height}, ${Math.round(metadata.size/1024)}KB)`);

    // Skip if already optimally sized
    if (metadata.width <= MAX_WIDTH && metadata.height <= MAX_HEIGHT && metadata.size < 150000) {
      console.log(`  ✓ Already optimized`);
      return;
    }

    // Create optimized version
    const optimizedPath = imagePath.replace(/\.(webp|jpg|jpeg|png)$/i, '-optimized.webp');
    
    await image
      .resize(MAX_WIDTH, MAX_HEIGHT, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ 
        quality: QUALITY,
        effort: 6 // Higher effort for better compression
      })
      .toFile(optimizedPath);

    const newStats = await fs.stat(optimizedPath);
    const originalStats = await fs.stat(imagePath);
    const reduction = ((originalStats.size - newStats.size) / originalStats.size * 100).toFixed(1);
    
    console.log(`  ✓ Optimized: ${Math.round(newStats.size/1024)}KB (${reduction}% reduction)`);

  } catch (error) {
    console.error(`  ✗ Error processing ${imagePath}:`, error.message);
  }
}

async function optimizeAllImages() {
  try {
    const files = await fs.readdir(IMAGES_DIR);
    const imageFiles = files.filter(file => 
      /\.(webp|jpg|jpeg|png)$/i.test(file) && 
      !file.includes('-optimized') &&
      !file.includes('.bak')
    );

    console.log(`Found ${imageFiles.length} images to process...\n`);

    for (const file of imageFiles) {
      await optimizeImage(path.join(IMAGES_DIR, file));
    }

    console.log('\n✓ Image optimization complete!');
  } catch (error) {
    console.error('Error:', error);
  }
}

optimizeAllImages();
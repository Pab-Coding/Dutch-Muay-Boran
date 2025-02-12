const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function optimizeTeamPhoto() {
  try {
    console.log('Starting team photo optimization...');
    
    const inputPath = './public/images/new-team-photo.jpg';
    const outputPath = './public/images/new-team-photo.webp';
    
    // Get original metadata
    const metadata = await sharp(inputPath).metadata();
    console.log(`Original size: ${metadata.width}x${metadata.height}`); 
    
    await sharp(inputPath)
      .resize(3000, null, { // High resolution
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ 
        quality: 90, // High quality
        effort: 6, // Maximum compression effort
        lossless: false
      })
      .toFile(outputPath);
    
    const newMetadata = await sharp(outputPath).metadata();
    console.log(`Optimized size: ${newMetadata.width}x${newMetadata.height}`);
    
    const originalStats = await fs.stat(inputPath);
    const optimizedStats = await fs.stat(outputPath);
    const originalKB = (originalStats.size / 1024).toFixed(2);
    const optimizedKB = (optimizedStats.size / 1024).toFixed(2);
    const reduction = (100 - (optimizedStats.size / originalStats.size * 100)).toFixed(2);
    
    console.log(`Original file size: ${originalKB}KB`);
    console.log(`Optimized file size: ${optimizedKB}KB`);
    console.log(`Size reduction: ${reduction}%`);
    
    console.log('✓ Team photo optimization complete!');
  } catch (error) {
    console.error('Error during optimization:', error);
  }
}

optimizeTeamPhoto();

const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function optimizeBoranPhoto() {
  try {
    console.log('Starting boran photo optimization...');
    
    const inputPath = './public/images/boran.webp';
    const outputPath = './public/images/boran-optimized.webp';
    
    // Get original metadata
    const metadata = await sharp(inputPath).metadata();
    console.log(`Original size: ${metadata.width}x${metadata.height}`);
    
    await sharp(inputPath)
      .resize(2000, null, { // Reduced resolution
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ 
        quality: 75, // Reduced quality
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
    
    // Replace original with optimized version
    await fs.rename(outputPath, inputPath);
    console.log('✓ Original file replaced with optimized version');
  } catch (error) {
    console.error('Error during optimization:', error);
  }
}

optimizeBoranPhoto();

const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function optimizeTeamPhoto() {
  try {
    console.log('Starting team photo optimization...');
    
    const inputPath = './public/images/team-photo.webp.bak'; // Use original backup
    const tempPath = './public/images/team-photo-optimized.webp';
    
    // Get original metadata
    const metadata = await sharp(inputPath).metadata();
    console.log(`Original size: ${metadata.width}x${metadata.height}`); 
    
    await sharp(inputPath)
      .resize(3000, null, { // Increased resolution
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ 
        quality: 90, // Increased quality
        effort: 6, // Maximum compression effort
        lossless: false
      })
      .toFile(tempPath);
    
    const newMetadata = await sharp(tempPath).metadata();
    console.log(`Optimized size: ${newMetadata.width}x${newMetadata.height}`);
    
    const originalStats = await fs.stat(inputPath);
    const optimizedStats = await fs.stat(tempPath);
    const originalKB = (originalStats.size / 1024).toFixed(2);
    const optimizedKB = (optimizedStats.size / 1024).toFixed(2);
    const reduction = (100 - (optimizedStats.size / originalStats.size * 100)).toFixed(2);
    
    console.log(`Original file size: ${originalKB}KB`);
    console.log(`Optimized file size: ${optimizedKB}KB`);
    console.log(`Size reduction: ${reduction}%`);
    
    console.log('✓ Optimization complete! Use PowerShell to move the file.');
  } catch (error) {
    console.error('Error during optimization:', error);
  }
}

optimizeTeamPhoto();

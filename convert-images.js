const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const inputDir = './public/images';
const outputDir = './public/images';

async function convertToWebP() {
  try {
    console.log('Starting image conversion process...');
    console.log(`Reading directory: ${inputDir}`);
    
    const files = await fs.readdir(inputDir);
    console.log(`Found ${files.length} files in directory`);
    
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file)
    );
    console.log(`Found ${imageFiles.length} image files to convert`);
    
    for (const file of imageFiles) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, `${path.parse(file).name}.webp`);
      
      console.log('\n-------------------');
      console.log(`Processing: ${file}`);
      console.log(`Input path: ${inputPath}`);
      console.log(`Output path: ${outputPath}`);
      
      try {
        const metadata = await sharp(inputPath).metadata();
        console.log(`Image size: ${metadata.width}x${metadata.height}`);
        
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath);
        
        const newMetadata = await sharp(outputPath).metadata();
        console.log(`Converted size: ${newMetadata.width}x${newMetadata.height}`);
        
        await fs.rename(inputPath, `${inputPath}.bak`);
        console.log(`✓ Successfully converted ${file} to WebP`);
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
    
    console.log('\n===================');
    console.log('Conversion process completed!');
  } catch (error) {
    console.error('Fatal error during conversion:', error);
  }
}

convertToWebP();

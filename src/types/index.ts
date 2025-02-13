// types/index.ts (crear si no existe)

/**
 * Configuration for text content and positioning within components
 * @interface TextConfig
 * @property {string} mainTitle - The primary title text
 * @property {Object} heroTitle - Split title configuration for hero sections
 * @property {string} description - Descriptive text content
 * @property {Object} textPosition - Positioning parameters for text elements
 */
export interface TextConfig {
    mainTitle: string;
    heroTitle: {
      line1: string;
      line2: string;
    };
    description: string;
    textPosition: {
      maxWidth: string;
      leftOffset: string;
      bottomOffset: string;
    };
  }
  
/**
 * Props interface for image section components
 * @interface ImageSectionProps
 * @property {TextConfig} textConfig - Text configuration for the image section
 */
export interface ImageSectionProps {
    textConfig: TextConfig;
  }

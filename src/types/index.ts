// types/index.ts (crear si no existe)
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
  
  export interface ImageSectionProps {
    textConfig: TextConfig;
  }
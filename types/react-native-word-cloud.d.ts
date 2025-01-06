declare module 'react-native-word-cloud' {
    import React from 'react';
    import { ViewProps } from 'react-native';
  
    interface Word {
      text: string;
      value: number;
    }
  
    interface WordCloudProps extends ViewProps {
      words: Word[];
      color: string[];
      fontSizeMapper?: (word: Word) => number;
      onWordClick?: (word: Word) => void;
    }
  
    export default class WordCloud extends React.Component<WordCloudProps> {}
  }
  
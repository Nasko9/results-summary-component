import React from 'react';

// Icons
import ReactionIcon from '../../assets/icons/ReactionIcon';
import MemoryIcon from '../../assets/icons/MemoryIcon';
import VerbalIcon from '../../assets/icons/VerbalIcon';
import VisualIcon from '../../assets/icons/VisualIcon';

type Purpose = 'background' | 'element';

export default function useSummary() {
  const chooseColor = (category: string, purpose: Purpose) => {
    if (purpose === 'background') {
      switch (category) {
        case 'Reaction':
          return 'hsla(0, 100%, 67%, 0.1)';
        case 'Memory':
          return 'hsla(39, 100%, 56%, 0.1)';
        case 'Verbal':
          return 'hsla(166, 100%, 37%, 0.1)';
        case 'Visual':
          return 'hsla(234, 85%, 45%, 0.1)';
        default:
          return null;
      }
    } else {
      switch (category) {
        case 'Reaction':
          return 'hsl(0, 100%, 67%)';
        case 'Memory':
          return 'hsla(39, 100%, 56%)';
        case 'Verbal':
          return 'hsla(166, 100%, 37%)';
        case 'Visual':
          return 'hsla(234, 85%, 45%)';
        default:
          return null;
      }
    }
  };

  const chooseIcon = (category: string) => {
    switch (category) {
      case 'Reaction':
        return <ReactionIcon />;
      case 'Memory':
        return <MemoryIcon />;
      case 'Verbal':
        return <VerbalIcon />;
      case 'Visual':
        return <VisualIcon />;
      default:
        throw new Error(`Invalid category: ${category}`);
    }
  };

  return { chooseColor, chooseIcon };
}

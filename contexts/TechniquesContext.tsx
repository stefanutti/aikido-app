import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import { TECHNIQUES } from '@/data/techniques';
import { Technique, FilterState } from '@/types/technique';

interface TechniquesContextType {
  techniques: Technique[];
  filters: FilterState;
  updateFilters: (newFilters: Partial<FilterState>) => void;
  selectedTechnique: Technique | null;
  setSelectedTechnique: (technique: Technique | null) => void;
  getRandomTechnique: () => Technique | null;
  searchYouTube: (technique: Technique) => string;
  visibleCount: number;
}

const TechniquesContext = createContext<TechniquesContextType | undefined>(undefined);

export function TechniquesProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<FilterState>({
    categories: ['Suwari Waza', 'Hanmi Handachi Waza', 'Tachi Waza', 'Ushiro Waza', 'Futari Dori', 'Randori', 'Tanto Dori'],
    grade: '',
    freeText: ''
  });

  const [selectedTechnique, setSelectedTechnique] = useState<Technique | null>(null);

  const filteredTechniques = useMemo(() => {
    return TECHNIQUES.filter(technique => {
      // Category filter
      const categoryMatch = filters.categories.length === 0 || filters.categories.includes(technique.category);
      
      // Grade filter
      const gradeMatch = !filters.grade || technique.grades.includes(filters.grade);
      
      // Free text filter
      const searchText = filters.freeText.toLowerCase();
      const textMatch = !searchText || 
        technique.category.toLowerCase().includes(searchText) ||
        technique.attack.toLowerCase().includes(searchText) ||
        technique.technique.toLowerCase().includes(searchText) ||
        technique.grades.some(grade => grade.toLowerCase().includes(searchText));

      return categoryMatch && gradeMatch && textMatch;
    });
  }, [filters]);

  const updateFilters = (newFilters: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const getRandomTechnique = () => {
    if (filteredTechniques.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * filteredTechniques.length);
    return filteredTechniques[randomIndex];
  };

  const searchYouTube = (technique: Technique) => {
    const query = `${technique.category} ${technique.attack} ${technique.technique}`.trim();
    return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
  };

  return (
    <TechniquesContext.Provider value={{
      techniques: filteredTechniques,
      filters,
      updateFilters,
      selectedTechnique,
      setSelectedTechnique,
      getRandomTechnique,
      searchYouTube,
      visibleCount: filteredTechniques.length
    }}>
      {children}
    </TechniquesContext.Provider>
  );
}

export function useTechniques() {
  const context = useContext(TechniquesContext);
  if (context === undefined) {
    throw new Error('useTechniques must be used within a TechniquesProvider');
  }
  return context;
}
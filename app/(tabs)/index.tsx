import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Filter, RotateCcw } from 'lucide-react-native';
import { useTechniques } from '@/contexts/TechniquesContext';
import { TechniqueCard } from '@/components/TechniqueCard';
import { FilterModal } from '@/components/FilterModal';
import { RandomTechniqueCard } from '@/components/RandomTechniqueCard';
import { Technique } from '@/types/technique';
import * as WebBrowser from 'expo-web-browser';

export default function TechniquesScreen() {
  const {
    techniques,
    filters,
    updateFilters,
    selectedTechnique,
    setSelectedTechnique,
    getRandomTechnique,
    searchYouTube,
    visibleCount
  } = useTechniques();

  const [showFilterModal, setShowFilterModal] = useState(false);
  const [randomTechnique, setRandomTechnique] = useState<Technique | null>(null);
  
  const flatListRef = useRef<FlatList>(null);

  const handleRandomTechnique = () => {
    const technique = getRandomTechnique();
    if (technique) {
      setRandomTechnique(technique);
      setSelectedTechnique(technique);
    }
  };

  const handleGoToTechnique = () => {
    if (randomTechnique) {
      const index = techniques.findIndex(t => t.id === randomTechnique.id);
      if (index !== -1) {
        flatListRef.current?.scrollToIndex({
          index,
          animated: true,
          viewPosition: 0.5
        });
      }
    }
  };

  const handleSearchYouTube = () => {
    if (randomTechnique) {
      const url = searchYouTube(randomTechnique);
      WebBrowser.openBrowserAsync(url);
    }
  };

  const handleTechniquePress = (technique: Technique) => {
    setSelectedTechnique(technique);
  };

  const handleTechniqueSearchYouTube = (technique: Technique) => {
    const url = searchYouTube(technique);
    WebBrowser.openBrowserAsync(url);
  };

  const resetFilters = () => {
    updateFilters({
      categories: ['Suwari Waza', 'Hanmi Handachi Waza', 'Tachi Waza', 'Ushiro Waza', 'Futari Dori', 'Randori', 'Tanto Dori'],
      grade: '',
      freeText: ''
    });
    setRandomTechnique(null);
    setSelectedTechnique(null);
  };

  const renderTechnique = ({ item }: { item: Technique }) => (
    <TechniqueCard
      technique={item}
      onSearchYouTube={() => handleTechniqueSearchYouTube(item)}
      isSelected={selectedTechnique?.id === item.id}
    />
  );

  const ListHeader = () => (
    <View style={styles.listHeader}>
      <RandomTechniqueCard
        onRandomize={handleRandomTechnique}
        randomTechnique={randomTechnique}
        onGoToTechnique={handleGoToTechnique}
        onSearchYouTube={handleSearchYouTube}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>合気道 Aikido</Text>
          <Text style={styles.subtitle}>Techniques</Text>
        </View>
        <View style={styles.headerButtons}>
          <TouchableOpacity 
            style={styles.headerButton} 
            onPress={resetFilters}
          >
            <RotateCcw size={20} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.headerButton} 
            onPress={() => setShowFilterModal(true)}
          >
            <Filter size={20} color="#449df6" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.statsBar}>
        <Text style={styles.statsText}>
          Showing {visibleCount} of {techniques.length} techniques
        </Text>
      </View>

      <FlatList
        ref={flatListRef}
        data={techniques}
        renderItem={renderTechnique}
        keyExtractor={item => item.id}
        ListHeaderComponent={ListHeader}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        onScrollToIndexFailed={(info) => {
          // Handle scroll to index failure gracefully
          setTimeout(() => {
            flatListRef.current?.scrollToOffset({
              offset: info.averageItemLength * info.index,
              animated: true,
            });
          }, 100);
        }}
      />

      <FilterModal
        visible={showFilterModal}
        onClose={() => setShowFilterModal(false)}
        filters={filters}
        onUpdateFilters={updateFilters}
        visibleCount={visibleCount}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  headerButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  headerButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#f8f9fa',
  },
  statsBar: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  statsText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  list: {
    flex: 1,
  },
  listHeader: {
    paddingTop: 8,
  },
});
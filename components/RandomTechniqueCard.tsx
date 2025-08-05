import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Shuffle, Navigation, Search } from 'lucide-react-native';
import { Technique } from '@/types/technique';

interface RandomTechniqueCardProps {
  onRandomize: () => void;
  randomTechnique: Technique | null;
  onGoToTechnique: () => void;
  onSearchYouTube: () => void;
}

export function RandomTechniqueCard({
  onRandomize,
  randomTechnique,
  onGoToTechnique,
  onSearchYouTube
}: RandomTechniqueCardProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.randomizeButton} onPress={onRandomize}>
        <Shuffle size={20} color="#fff" />
        <Text style={styles.randomizeButtonText}>Random Technique</Text>
      </TouchableOpacity>
      
      {randomTechnique && (
        <View style={styles.selectedTechnique}>
          <Text style={styles.selectedTechniqueText}>
            {randomTechnique.category} {randomTechnique.attack} {randomTechnique.technique}
          </Text>
          
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.actionButton} onPress={onGoToTechnique}>
              <Navigation size={16} color="#449df6" />
              <Text style={styles.actionButtonText}>Go to</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton} onPress={onSearchYouTube}>
              <Search size={16} color="#449df6" />
              <Text style={styles.actionButtonText}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  randomizeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#449df6',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  randomizeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  selectedTechnique: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  selectedTechniqueText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 22,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#449df6',
    backgroundColor: '#f0f8ff',
  },
  actionButtonText: {
    color: '#449df6',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 6,
  },
});
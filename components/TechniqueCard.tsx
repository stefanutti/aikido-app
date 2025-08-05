import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { ExternalLink } from 'lucide-react-native';
import { Technique } from '@/types/technique';

interface TechniqueCardProps {
  technique: Technique;
  onSearchYouTube: () => void;
  isSelected?: boolean;
}

const { width } = Dimensions.get('window');
const videoWidth = width - 32; // Account for card padding
const videoHeight = (videoWidth - 32) * 9 / 16; // 16:9 aspect ratio, account for inner padding

export function TechniqueCard({ technique, onSearchYouTube, isSelected }: TechniqueCardProps) {
  const getEmbedUrl = (youtubeId: string) => {
    return `https://www.youtube.com/embed/${youtubeId}?playsinline=1&autoplay=0&mute=0`;
  };

  return (
    <View style={[styles.container, isSelected && styles.selectedContainer]}>
      <View style={styles.header}>
        <View style={styles.categoryContainer}>
          <Text style={styles.category}>{technique.category}</Text>
          <Text style={styles.grades}>({technique.grades.join(', ')})</Text>
        </View>
        <TouchableOpacity style={styles.searchButton} onPress={onSearchYouTube}>
          <ExternalLink size={16} color="#fff" />
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.techniqueInfo}>
        <Text style={styles.attack}>{technique.attack}</Text>
        <Text style={styles.technique}>{technique.technique}</Text>
      </View>
      
      <View style={styles.videosContainer}>
        {technique.videos.map((video, index) => (
          <View key={video.id} style={styles.videoWrapper}>
            <WebView
              source={{ uri: getEmbedUrl(video.youtubeId) }}
              style={styles.webview}
              allowsInlineMediaPlayback
              mediaPlaybackRequiresUserAction={false}
              allowsFullscreenVideo
              javaScriptEnabled
              domStorageEnabled
              startInLoadingState
              scalesPageToFit
            />
            <Text style={styles.videoCaption}>{video.caption}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  selectedContainer: {
    borderWidth: 2,
    borderColor: '#449df6',
    shadowColor: '#449df6',
    shadowOpacity: 0.3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 16,
    paddingBottom: 12,
  },
  categoryContainer: {
    flex: 1,
  },
  category: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  grades: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#449df6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 4,
  },
  techniqueInfo: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  attack: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
    marginBottom: 4,
  },
  technique: {
    fontSize: 20,
    fontWeight: '800',
    color: '#449df6',
  },
  videosContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  videoWrapper: {
    marginBottom: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    overflow: 'hidden',
  },
  webview: {
    width: videoWidth - 32,
    height: videoHeight,
  },
  videoCaption: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    padding: 12,
    backgroundColor: '#f8f9fa',
    fontWeight: '500',
  },
});
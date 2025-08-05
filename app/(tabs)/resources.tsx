import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { ExternalLink, FileText, BookOpen, Youtube } from 'lucide-react-native';
import * as WebBrowser from 'expo-web-browser';

interface ResourceLink {
  title: string;
  url: string;
  description: string;
}

const PDF_RESOURCE = {
  title: 'Programma Esami Dan Aikido',
  url: 'https://progettoaiki.org/files/ProgrammaEsamiDanAikidoProgettoAiki.pdf',
  description: 'Official exam program PDF from ProgettoAiki'
};

const PLAYLIST_RESOURCES: ResourceLink[] = [
  {
    title: 'Michel Erb',
    url: 'https://www.youtube.com/@aikidocom/playlists',
    description: 'Comprehensive Aikido technique demonstrations'
  },
  {
    title: 'Peter Van Marcke',
    url: 'https://www.youtube.com/@petervmarcke/playlists',
    description: 'Detailed technique variations and forms'
  },
  {
    title: 'Shirakawa Ryuji',
    url: 'https://www.youtube.com/@Shinburenseijyuku/playlists',
    description: 'Traditional Aikido teachings and techniques'
  },
  {
    title: 'Stefan Stenudd',
    url: 'https://www.youtube.com/@StefanStenudd',
    description: 'Aikido philosophy and technique analysis'
  },
  {
    title: 'Bruno Gonzalez',
    url: 'https://www.youtube.com/@BrunoGonzalezAikido/playlists',
    description: 'Modern Aikido applications and training'
  },
  {
    title: 'Anis Aikido (Tissier)',
    url: 'https://www.youtube.com/@anisaikido6528/playlists',
    description: 'Christian Tissier style demonstrations'
  },
  {
    title: 'Aikido Lleida (Tissier)',
    url: 'https://www.youtube.com/@clubaikidolleida8610/playlists',
    description: 'Club training and technique videos'
  },
  {
    title: 'How to do Aikido (NY Aikikai)',
    url: 'https://www.youtube.com/playlist?list=PL970B7BDB368DB950',
    description: 'Basic Aikido techniques and principles'
  },
  {
    title: 'Stefan Stenudd (Tanto)',
    url: 'https://www.youtube.com/playlist?list=PLB0410E922787DE51',
    description: 'Weapon defense techniques and applications'
  }
];

export default function ResourcesScreen() {
  const openUrl = (url: string) => {
    WebBrowser.openBrowserAsync(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <BookOpen size={24} color="#449df6" />
          <Text style={styles.title}>Resources</Text>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Official documentation</Text>
          <Text style={styles.sectionDescription}>
            Download the official ProgettoAiki exam program PDF
          </Text>
          
          <TouchableOpacity 
            style={styles.pdfCard}
            onPress={() => openUrl(PDF_RESOURCE.url)}
          >
            <View style={styles.pdfCardContent}>
              <FileText size={24} color="#449df6" />
              <View style={styles.pdfCardText}>
                <Text style={styles.pdfCardTitle}>{PDF_RESOURCE.title}</Text>
                <Text style={styles.pdfCardDescription}>
                  {PDF_RESOURCE.description}
                </Text>
              </View>
              <ExternalLink size={20} color="#666" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Video playlists</Text>
          <Text style={styles.sectionDescription}>
            Curated YouTube playlists from renowned Aikido instructors
          </Text>
          
          {PLAYLIST_RESOURCES.map((resource, index) => (
            <TouchableOpacity
              key={index}
              style={styles.playlistCard}
              onPress={() => openUrl(resource.url)}
            >
              <View style={styles.playlistCardContent}>
                <Youtube size={24} color="#ff0000" />
                <View style={styles.playlistCardText}>
                  <Text style={styles.playlistCardTitle}>{resource.title}</Text>
                  <Text style={styles.playlistCardDescription}>
                    {resource.description}
                  </Text>
                </View>
                <ExternalLink size={20} color="#666" />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
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
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginLeft: 8,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
    lineHeight: 22,
  },
  pdfCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  pdfCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pdfCardText: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },
  pdfCardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  pdfCardDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  playlistCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  playlistCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playlistCardText: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },
  playlistCardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  playlistCardDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});
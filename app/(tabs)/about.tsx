import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Info } from 'lucide-react-native';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Info size={24} color="#449df6" />
          <Text style={styles.title}>About</Text>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About ProgettoAiki</Text>
          <Text style={styles.aboutText}>
            This app is based on the ProgettoAiki curriculum, a comprehensive 
            system for Aikido training and examination. The techniques included 
            follow the traditional progression from Kyu to Dan levels, providing 
            a structured approach to learning Aikido.
          </Text>
          <Text style={styles.aboutText}>
            Each technique is demonstrated by expert instructors from around 
            the world, offering multiple perspectives and variations to enhance 
            your understanding and practice.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How to Use This App</Text>
          <Text style={styles.aboutText}>
            <Text style={styles.boldText}>Techniques Tab:</Text> Browse all available 
            techniques with embedded video demonstrations. Use the random technique 
            feature to practice different movements.
          </Text>
          <Text style={styles.aboutText}>
            <Text style={styles.boldText}>Filters Tab:</Text> Customize which 
            techniques are displayed by selecting categories, grade levels, or 
            searching for specific terms.
          </Text>
          <Text style={styles.aboutText}>
            <Text style={styles.boldText}>Resources Tab:</Text> Access the official 
            ProgettoAiki PDF and curated YouTube playlists from master instructors.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Grade System</Text>
          <Text style={styles.aboutText}>
            The techniques are organized according to the traditional Japanese 
            martial arts grading system:
          </Text>
          <View style={styles.gradeList}>
            <Text style={styles.gradeItem}>• <Text style={styles.boldText}>Kyu Grades (5k-1k):</Text> Student levels, progressing from 5th to 1st kyu</Text>
            <Text style={styles.gradeItem}>• <Text style={styles.boldText}>Dan Grades (1d-4d):</Text> Black belt levels, from 1st to 4th dan</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories Explained</Text>
          <View style={styles.categoryList}>
            <Text style={styles.categoryItem}>
              <Text style={styles.boldText}>Suwari Waza:</Text> Seated techniques performed from seiza position
            </Text>
            <Text style={styles.categoryItem}>
              <Text style={styles.boldText}>Hanmi Handachi Waza:</Text> Techniques where defender is seated, attacker standing
            </Text>
            <Text style={styles.categoryItem}>
              <Text style={styles.boldText}>Tachi Waza:</Text> Standing techniques, the most common category
            </Text>
            <Text style={styles.categoryItem}>
              <Text style={styles.boldText}>Ushiro Waza:</Text> Techniques against attacks from behind
            </Text>
            <Text style={styles.categoryItem}>
              <Text style={styles.boldText}>Futari Dori:</Text> Techniques against multiple attackers
            </Text>
            <Text style={styles.categoryItem}>
              <Text style={styles.boldText}>Randori:</Text> Free-form practice and sparring
            </Text>
            <Text style={styles.categoryItem}>
              <Text style={styles.boldText}>Tanto Dori:</Text> Defense against knife attacks
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Acknowledgments</Text>
          <Text style={styles.aboutText}>
            Special thanks to all the master instructors whose demonstrations 
            make this app possible, including Christian Tissier, François Pichereau, 
            Michel Erb, and many others who have dedicated their lives to preserving 
            and teaching the art of Aikido.
          </Text>
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
    marginBottom: 16,
  },
  aboutText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 16,
  },
  boldText: {
    fontWeight: '600',
    color: '#333',
  },
  gradeList: {
    marginTop: 8,
  },
  gradeItem: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 8,
  },
  categoryList: {
    marginTop: 8,
  },
  categoryItem: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 12,
  },
});
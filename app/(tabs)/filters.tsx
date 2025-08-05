import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import { Filter, RotateCcw } from 'lucide-react-native';
import { useTechniques } from '@/contexts/TechniquesContext';
import { CategoryType } from '@/types/technique';
import { CATEGORIES, GRADES } from '@/data/techniques';

export default function FiltersScreen() {
  const { filters, updateFilters, visibleCount } = useTechniques();

  const toggleCategory = (category: CategoryType) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    
    updateFilters({ categories: newCategories });
  };

  const resetFilters = () => {
    updateFilters({
      categories: ['Suwari Waza', 'Hanmi Handachi Waza', 'Tachi Waza', 'Ushiro Waza', 'Futari Dori', 'Randori', 'Tanto Dori'],
      grade: '',
      freeText: ''
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Filter size={24} color="#449df6" />
          <Text style={styles.title}>Filters</Text>
        </View>
        <TouchableOpacity style={styles.resetButton} onPress={resetFilters}>
          <RotateCcw size={20} color="#666" />
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <View style={styles.checkboxContainer}>
            {CATEGORIES.map(category => (
              <TouchableOpacity
                key={category}
                style={styles.checkboxRow}
                onPress={() => toggleCategory(category)}
              >
                <View style={[
                  styles.checkbox,
                  filters.categories.includes(category) && styles.checkboxChecked
                ]}>
                  {filters.categories.includes(category) && (
                    <Text style={styles.checkmark}>✓</Text>
                  )}
                </View>
                <Text style={styles.checkboxLabel}>{category}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Grade selection</Text>
          <View style={styles.gradeContainer}>
            {GRADES.map(grade => (
              <TouchableOpacity
                key={grade.value}
                style={[
                  styles.gradeButton,
                  filters.grade === grade.value && styles.gradeButtonSelected
                ]}
                onPress={() => updateFilters({ grade: grade.value })}
              >
                <Text style={[
                  styles.gradeButtonText,
                  filters.grade === grade.value && styles.gradeButtonTextSelected
                ]}>
                  {grade.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Free text search</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Search techniques, attacks, categories..."
            value={filters.freeText}
            onChangeText={text => updateFilters({ freeText: text })}
            clearButtonMode="while-editing"
          />
        </View>

        <View style={styles.resultsSection}>
          <View style={styles.resultsContainer}>
            <Text style={styles.resultsText}>
              Results: {visibleCount} techniques
            </Text>
          </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  resetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#f8f9fa',
  },
  resetButtonText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
    marginLeft: 4,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  checkboxContainer: {
    gap: 12,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 6,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#449df6',
    borderColor: '#449df6',
  },
  checkmark: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  gradeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  gradeButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  gradeButtonSelected: {
    backgroundColor: '#449df6',
    borderColor: '#449df6',
  },
  gradeButtonText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  gradeButtonTextSelected: {
    color: '#fff',
  },
  textInput: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },
  resultsSection: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  resultsContainer: {
    backgroundColor: '#f0f8ff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  resultsText: {
    fontSize: 16,
    color: '#449df6',
    fontWeight: '600',
  },
});
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { X, Filter } from 'lucide-react-native';
import { FilterState, CategoryType } from '@/types/technique';
import { CATEGORIES, GRADES } from '@/data/techniques';

interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
  filters: FilterState;
  onUpdateFilters: (filters: Partial<FilterState>) => void;
  visibleCount: number;
}

export function FilterModal({ 
  visible, 
  onClose, 
  filters, 
  onUpdateFilters, 
  visibleCount 
}: FilterModalProps) {
  const toggleCategory = (category: CategoryType) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    
    onUpdateFilters({ categories: newCategories });
  };

  const resetFilters = () => {
    onUpdateFilters({
      categories: ['Suwari Waza', 'Hanmi Handachi Waza', 'Tachi Waza', 'Ushiro Waza', 'Futari Dori', 'Randori', 'Tanto Dori'],
      grade: '',
      freeText: ''
    });
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Filter size={24} color="#449df6" />
            <Text style={styles.title}>Filters</Text>
          </View>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <X size={24} color="#666" />
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
                  onPress={() => onUpdateFilters({ grade: grade.value })}
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
            <Text style={styles.sectionTitle}>Free text filter</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Search techniques, attacks, categories..."
              value={filters.freeText}
              onChangeText={text => onUpdateFilters({ freeText: text })}
              clearButtonMode="while-editing"
            />
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <View style={styles.countContainer}>
            <Text style={styles.countText}>
              Results: {visibleCount} techniques
            </Text>
          </View>
          <View style={styles.footerButtons}>
            <TouchableOpacity style={styles.resetButton} onPress={resetFilters}>
              <Text style={styles.resetButtonText}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.applyButton} onPress={onClose}>
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingTop: 60,
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
  closeButton: {
    padding: 8,
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
  footer: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  countContainer: {
    marginBottom: 16,
  },
  countText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  footerButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  resetButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  resetButtonText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '600',
  },
  applyButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#449df6',
    alignItems: 'center',
  },
  applyButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});
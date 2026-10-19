import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import StudentCard from './StudentCard';

// Starter data provided in the problem statement
const initialStudents = [
  { id: "s1", name: "Ana Cruz", course: "IT313", units: 21, isFullLoad: true },
  { id: "s2", name: "Bea Santos", course: "IT313", units: 15, isFullLoad: false },
  { id: "s3", name: "Cid Ramos", course: "IT313", units: 18, isFullLoad: true },
  { id: "s4", name: "Dex Alonzo", course: "IT313", units: 12, isFullLoad: false },
];

export default function StudentRoster() {
  const [students, setStudents] = useState(initialStudents);
  
  // Requirement 6: State switch for testing index vs id keys
  const [useIndexKey, setUseIndexKey] = useState(false);

  // Function to reverse roster order for the key experiment
  const handleReverseRoster = () => {
    setStudents([...students].reverse());
  };

  return (
    // Requirement 5: Single root element wrapping the layout
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Registrar Portal</Text>
          {/* Requirement 4: JSX expression with template literal for dynamic student count */}
          <Text style={styles.subtitle}>{`Total Enrolled Students: ${students.length}`}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleReverseRoster}>
          <Text style={styles.buttonText}>Reverse Roster Order</Text>
        </TouchableOpacity>

        <Text style={styles.keyModeText}>
          Current Key Prop: {useIndexKey ? "Array Index (Buggy)" : "Student ID (Stable)"}
        </Text>
        
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: useIndexKey ? '#dc2626' : '#2563eb' }]} 
          onPress={() => setUseIndexKey(!useIndexKey)}
        >
          <Text style={styles.buttonText}>Toggle Key Type ({useIndexKey ? "Using Index" : "Using ID"})</Text>
        </TouchableOpacity>

        {/* Requirement 3: Rendering list using .map() */}
        <View style={styles.listContainer}>
          {students.map((student, index) => (
            <StudentCard
              key={useIndexKey ? index : student.id} // Requirement 6 experiment switch
              name={student.name}
              course={student.course}
              units={student.units}
              isFullLoad={student.isFullLoad}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  headerContainer: {
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  subtitle: {
    fontSize: 16,
    color: '#475569',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#4f46e5',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 6,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  keyModeText: {
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
    marginVertical: 4,
  },
  listContainer: {
    marginTop: 10,
  },
});
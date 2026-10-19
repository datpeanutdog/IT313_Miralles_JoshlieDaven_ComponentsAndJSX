import { StyleSheet, Text, View } from 'react-native';

export default function StudentCard({ name, course, units, isFullLoad }) {
  return (
    <View style={styles.card}>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.details}>Course: {course} | Units: {units}</Text>
      </View>
      
  
      {isFullLoad && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Full Load</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  details: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
  badge: {
    backgroundColor: '#10b981',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
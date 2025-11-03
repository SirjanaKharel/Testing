
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function StayFinder() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>StayFinder</Text>
        <FontAwesome name="user-circle" size={32} color="black" />
      </View>

      <View style={styles.searchSection}>
        <Text style={styles.searchTitle}>Find places to stay</Text>
        <Text style={styles.searchSubtitle}>Discover the perfect place to call home</Text>
        <TextInput style={styles.input} placeholder="Location" />
        <View style={styles.row}>
          <TextInput style={[styles.input, styles.halfInput]} placeholder="Number of adults" />
          <TextInput style={[styles.input, styles.halfInput]} placeholder="Number of children" />
        </View>
        <TextInput style={styles.input} placeholder="Number of rooms" />
        <View style={styles.row}>
          <TextInput style={[styles.input, styles.halfInput]} placeholder="Check in date" />
          <TextInput style={[styles.input, styles.halfInput]} placeholder="Check out date" />
        </View>
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Inspiration for your next trip</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.inspirationList}>
          <Image source={require('@/assets/images/react-logo.png')} style={styles.inspirationImage} />
          <Image source={require('@/assets/images/android-icon-background.png')} style={styles.inspirationImage} />
          <Image source={require('@/assets/images/android-icon-foreground.png')} style={styles.inspirationImage} />
          <Image source={require('@/assets/images/favicon.png')} style={styles.inspirationImage} />
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Properties</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featuredList}>
          <View style={styles.featuredItem}>
            <Image source={require('@/assets/images/partial-react-logo.png')} style={styles.featuredImage} />
            <Text style={styles.featuredTitle}>The Palmera Resort</Text>
            <Text style={styles.featuredLocation}>Ubud, Bali</Text>
            <Text style={styles.featuredRating}>4.9 (150+)</Text>
          </View>
          <View style={styles.featuredItem}>
            <Image source={require('@/assets/images/splash-icon.png')} style={styles.featuredImage} />
            <Text style={styles.featuredTitle}>The Parisian Haven</Text>
            <Text style={styles.featuredLocation}>Paris, France</Text>
            <Text style={styles.featuredRating}>4.9 (350+)</Text>
          </View>
          <View style={styles.featuredItem}>
            <Image source={require('@/assets/images/icon.png')} style={styles.featuredImage} />
            <Text style={styles.featuredTitle}>Alpine Vista Hotel</Text>
            <Text style={styles.featuredLocation}>Zurich, Switzerland</Text>
            <Text style={styles.featuredRating}>4.9 (100+)</Text>
          </View>
        </ScrollView>
      </View>

      <View style={[styles.section, styles.dealsSection]}>
        <Text style={styles.sectionTitle}>Exclusive Deals For You</Text>
        <View style={styles.deal}>
          <Text style={styles.dealTitle}>Last Minute Savings</Text>
          <Text style={styles.dealText}>Book within 48 hours of arrival and get up to 30% off.</Text>
        </View>
        <View style={styles.deal}>
          <Text style={styles.dealTitle}>Summer Specials</Text>
          <Text style={styles.dealText}>Enjoy beach-front properties from just £99/night.</Text>
        </View>
        <View style={styles.deal}>
          <Text style={styles.dealTitle}>City Break Offer</Text>
          <Text style={styles.dealText}>Stay for 3 nights in any metro city and only pay for 2.</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  header: {
    padding: 20,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#82c7c7',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchSection: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  searchTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  searchSubtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  searchButton: {
    backgroundColor: '#6c757d',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  searchButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  section: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inspirationList: {
    flexDirection: 'row',
  },
  inspirationImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  featuredList: {
    flexDirection: 'row',
  },
  featuredItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginRight: 15,
    padding: 10,
    width: 200,
  },
  featuredImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  featuredTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  featuredLocation: {
    color: 'gray',
  },
  featuredRating: {
    color: 'orange',
  },
  dealsSection: {
    backgroundColor: '#e0f0f0',
    padding: 20,
    borderRadius: 10,
  },
  deal: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  dealTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dealText: {
    color: 'gray',
  },
});

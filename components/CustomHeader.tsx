import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const SearchBar = () => {
  return <View style={styles.searchContainer}></View>;
};

const CustomHeader = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            style={styles.bike}
            source={require('@/assets/images/bike.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.titleContainer}>
          <Text style={styles.title}>Delivery • Now</Text>
          <View style={styles.locationName}>
            <Text style={styles.subtitle}>London</Text>
            <Ionicons
              name="chevron-down-outline"
              size={20}
              color={Colors.primary}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-outline" size={20} color={Colors.medium} />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    height: 60,
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  },
  bike: {
    height: 35,
    width: 35
  },
  titleContainer: {
    flex: 1
  },
  title: {
    fontSize: 14,
    color: Colors.medium
  },
  locationName: { flexDirection: 'row', alignItems: 'center' },
  profileButton: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 20
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  searchContainer: {
    height: 60,
    backgroundColor: '#fff'
  }
});

export default CustomHeader;

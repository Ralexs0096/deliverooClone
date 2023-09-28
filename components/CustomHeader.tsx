import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import React, { useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomSheet from './BottomSheet';
import { type BottomSheetModal } from '@gorhom/bottom-sheet';

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchSection}>
        <View style={styles.searchField}>
          <Ionicons
            style={styles.searchIcon}
            name="ios-search"
            size={20}
            color={Colors.medium}
          />
          <TextInput
            style={styles.input}
            placeholder="Restaurants, groceries, dishes"
          />
        </View>
        <Link href={'/'} asChild />
        <TouchableOpacity style={styles.optionButton}>
          <Ionicons name="options-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CustomHeader = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const openModal = () => {
    bottomSheetRef.current?.present();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <BottomSheet ref={bottomSheetRef} />
      <View style={styles.container}>
        <TouchableOpacity onPress={openModal}>
          <Image
            style={styles.bike}
            source={require('@/assets/images/bike.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.titleContainer} onPress={openModal}>
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
  },
  optionButton: {
    padding: 10,
    borderRadius: 20
  },
  searchSection: {
    flexDirection: 'row',
    gap: 10,
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  searchField: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    padding: 10,
    color: Colors.mediumDark
  },
  searchIcon: {
    paddingLeft: 10
  }
});

export default CustomHeader;

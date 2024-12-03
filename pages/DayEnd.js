import React from 'react';
import { Text, View, StyleSheet, useWindowDimensions, FlatList} from 'react-native';
import { Linking, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const DayEnd = ({ name, address, contact, total_amount, advance, due, timing, owner_flat, hotel_link}) => {
  console.log(hotel_link);
  const { width } = useWindowDimensions(); // Dynamically get screen width
  const cardWidth = 0.9 * width; // Card width set to 90% of screen width

  console.log("name: ", name);
  console.log("contact: ", contact);

  const openDialer = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const openMap = (hotel_link) => {
    Linking.openURL(`${hotel_link}`);
  };

  return (
    <View style={[styles.card, { width: cardWidth }]}>
      {/* Summary Section */}
      <View style={[styles.summaryContainer, { width: cardWidth * 0.3 }]}>
        <Text style={styles.summaryText}>{timing}</Text>
      </View>

      {/* Details Section */}
      <View style={[styles.detailsContainer, { width: cardWidth * 0.7 }]}>
        <Text style={styles.detailText}>
          <Text style={styles.bold}>Night Stay: </Text>
          <TouchableOpacity onPress={() => openMap(hotel_link)}>
            <Text style = {{textDecorationLine: 'underline'}}>{name}</Text>
          </TouchableOpacity>
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.bold}>Address: </Text>
          {address}
        </Text>
        {
          contact.length != 0 && (
            <View>
              <Text style={styles.bold}>Contact: </Text>
              <FlatList
                data={contact}
                renderItem={({ item }) => 
                  <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => openDialer(item)}>
                      <Text style = {{textDecorationLine: 'underline'}}>{item}</Text>
                    </TouchableOpacity>
                  </View>
                }
                keyExtractor={(item, index) => index.toString()}
              />

            </View>
          )
        }
        {
          owner_flat && (<Text style={styles.detailText}>
            <Text style={[styles.bold, {fontSize: 16}]}>About Owner / Flat: </Text>
            {owner_flat}
          </Text>)
        }
        <Text style={styles.detailText}>
          <Text style={styles.bold}>Amt: </Text>
          {total_amount}, 
          <Text style={styles.bold}> Adv: </Text>
          {advance}, 
          <Text style={styles.bold}> Due: </Text>
          {due}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#b3e6ff', // Light blue background
    borderRadius: 10,
    marginVertical: 3, // Increased margin to avoid overlap
    padding: 5, // Increased padding for better spacing
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
    alignSelf: 'center', // Center the card within the container
  },
  summaryContainer: {
    backgroundColor: '#ffc107', // Yellow background for summary section
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 8,
  },
  summaryText: {
    color: '#fff', // White text for the summary
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  detailsContainer: {
    flex: 1,
    paddingLeft: 15, // Added padding for better spacing
    justifyContent: 'space-around', // Distribute details evenly
  },
  detailText: {
    fontSize: 16,
    color: '#000', // Black text for details
    marginVertical: 3, // Small spacing between detail items
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default DayEnd

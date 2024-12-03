// Card.js
import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
// import { Ionicons } from '@expo/vector-icons';
import {Linking} from 'react-native';
import {TouchableOpacity} from 'react-native';
// import {ImageBackground} from 'react-native';

const Card = ({ timing, activities, place, information, distance, temple_timing}) => {
  const { width, height } = useWindowDimensions(); // Dynamically get screen width and height
  const cardWidth = width * 0.9; // Card width is 90% of screen width

  function splitLocationString(locationString) {
    // Split the string by "to"
    const parts = locationString.split(' to ');

    // Ensure that there are exactly two parts
    if (parts.length === 2) {
      return {
        from: parts[0].trim(),  // From is the part before 'to'
        to: parts[1].trim()     // To is the part after 'to'
      };
    } else {
      console.log(1);
      return {
        from: "",
        to: parts[0],
      };
    }
  }

  const openMap = (data) => {
    const link = `https://www.google.com/maps/dir/?api=1&origin=` + `${data.from}` + `&destination=`+`${data.to}`;
    console.log(link);
    Linking.openURL(`${link}`);
  };

  const result = splitLocationString(place);

  return (
    <View style={[styles.card, { width: cardWidth }]}>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{timing}</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.h1Container}>
          <Text style={styles.h1Text}>{place}</Text>
        </View>
        {activities && <Text style={styles.taskText}>{activities}</Text>}
        {information.train_no && (
          <Text style={styles.taskText}>Train No: {information.train_no}</Text>
        )}
        {information.departure_time && (
          <Text style={styles.taskText}>Departure Time: {information.departure_time}</Text>
        )}
        {information.berths && (
          <Text style={styles.taskText}>Berths: {information.berths}</Text>
        )}
        {information.purpose && (
          <Text style={styles.taskText}>{information.purpose}<Text style={[styles.taskText, { color: 'red', fontSize: '14'}]}>{information.temple_timing}</Text></Text>
        )}
        {information.instructions && (
          <Text style={[styles.taskText, { color: 'red', fontWeight: 'bold' }]}>{information.instructions}</Text>
        )}
      </View>
      {distance ? (
        <View style={[styles.distanceSection, { width: cardWidth * 0.1 }]}>
          <Text style={styles.distanceText}>{distance}</Text>
        </View>
      ) : null}
      {/* {
        (
          <TouchableOpacity onPress={() => openMap(result)}>
            <Ionicons name="navigate" size={30} color="blue" style={styles.icon} />
          </TouchableOpacity>
        )
      } */}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row', // Makes timing and list flexible
    backgroundColor: '#b3e6ff', // Light blue background for the card
    borderRadius: 10, // Rounded corners
    marginVertical: 3, // Vertical margin for spacing between cards
    padding: 5, // Internal padding
    shadowColor: '#000', // Shadow color
    shadowOpacity: 0.1, // Shadow opacity
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowRadius: 4, // Shadow radius
    elevation: 5, // Android shadow
    alignSelf: 'center', // Center the card horizontally
  },
  timeContainer: {
    backgroundColor: '#007bff', // Blue stripe
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, // Make the container fill the height of the card
    borderRadius: 5, // Rounded corners
  },
  timeText: {
    color: 'white', // White text
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18, // Responsive font size
  },
  content: {
    flex: 2, // Make the content section fill the remaining width
    justifyContent: 'center',
    marginLeft: 10, // Space between the time and content
  },
  h1Container: {
    lex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1Text: {
    fontSize: 18, // Large font size for H1
    fontWeight: 'bold', // Bold text
    color: '#333', // Dark text color
    textAlign: 'center', // Center the text
    marginVertical: 10, // Space above and below the heading
  },
  taskText: {
    fontSize: 16, // Responsive font size
    color: '#000', // Black text
    marginVertical: 0,
  },
  distanceSection: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  distanceText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  // image: {
  //   position: 'absolute',
  //   right: -5,
  //   marginRight: 10,
  //   width: 25,
  //   height: 25,
  // },
});

export default Card;


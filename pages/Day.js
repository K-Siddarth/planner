import React from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Card from "./Card"; // Assuming Card is a valid component
import { Ionicons } from "@expo/vector-icons";
import DayEnd from "./DayEnd.js";

const Day = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { trip_data, idx } = route.params;
  console.log(idx);
  const timing = trip_data[idx].time;
  const activities = trip_data[idx].activity;
  const date = trip_data[idx].date;
  const title = trip_data[idx].title;
  const information = trip_data[idx].information;
  const place = trip_data[idx].place;
  const night_stay = trip_data[idx].night_stay;
  const distance = trip_data[idx].distance;
  const temple_timing = trip_data[idx].temple_timing;
  const heading = `${date}\n${title}`;

  const min = Math.min;
  const max = Math.max;

  const renderItem = ({ item, index }) => (
    <Card
      timing={timing[index]}
      activities={activities[index]}
      place={place[index]}
      information={information[index]}
      distance={distance[index]}
      temple_timing={temple_timing}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={styles.button}
        >
          <Ionicons name="home" size={30} color="#fff" />
        </Pressable>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>{heading}</Text>
        </View>
      </View>

      <FlatList
        data={timing}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingVertical: 5 }}
        style={{ marginBottom: 35 }}
        ListFooterComponent={
          night_stay && <DayEnd {...night_stay} timing={night_stay.timing} />
        }
      />

      <View style={styles.footer}>
        {/* Previous Button */}
        {idx >= 1 ? (
          <Pressable
            onPress={() =>
              navigation.navigate("Day", { trip_data, idx: max(idx - 1, 0) })
            }
            style={styles.footerButton}
          >
            <View style={styles.iconTextContainer}>
              <Ionicons name="chevron-back" size={20} color="#fff" />
              <Text style={styles.footerText}>{trip_data[idx - 1].date}</Text>
            </View>
          </Pressable>
        ) : (
          <Pressable
            onPress={() =>
              navigation.navigate("Day", { trip_data, idx: max(idx - 1, 0) })
            }
            style={styles.footerButton}
          >
            {/* <View style={styles.iconTextContainer}>
              <Ionicons name="chevron-back" size={20} color="#fff" />
              <Text style={styles.footerText}></Text>
            </View> */}
          </Pressable>
        )}

        {/* Next Button */}
        {idx < trip_data.length - 1 && (
          <Pressable
            onPress={() =>
              navigation.navigate("Day", {
                trip_data,
                idx: min(idx + 1, trip_data.length - 1),
              })
            }
            style={styles.footerButton}
          >
            <View style={styles.iconTextContainer}>
              <Text style={styles.footerText}>{trip_data[idx + 1].date}</Text>
              <Ionicons name="chevron-forward" size={20} color="#fff" />
            </View>
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00BFFF", // Neon Blue background
    padding: 20,
  },
  header: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  headerTextContainer: {
    flex: 1, // Ensures the heading takes up the remaining space
  },
  headerText: {
    fontSize: 19, // Adjusted size
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between", // Distributes buttons to left and right ends
    alignItems: "center",
    position: "absolute",
    bottom: 10, // Distance from the bottom of the screen
    left: 20, // Space from the left edge
    right: 20, // Space from the right edge
    padding: 10,
    borderRadius: 10, // Rounded corners
    marginVertical: 3,
  },
  footerButton: {
    flexDirection: "row", // Align icon and text horizontally
    alignItems: "center", // Vertical alignment
  },
  iconTextContainer: {
    flexDirection: "row", // Aligns text and icon horizontally
    alignItems: "center", // Ensures vertical alignment
  },
  footerText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 5, // Adds space between the icon and text
  },
});

export default Day;

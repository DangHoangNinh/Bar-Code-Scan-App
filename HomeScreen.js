import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const insights = [
  { id: "1", title: "Scan new", count: "Scanned 483", icon: "scan-outline", color: "#A89CFF" },
  { id: "2", title: "Counterfeits", count: "Counterfeited 32", icon: "alert-circle-outline", color: "#FFA89C" },
  { id: "3", title: "Success", count: "Checkouts 8", icon: "checkmark-circle-outline", color: "#9CFFC4" },
  { id: "4", title: "Directory", count: "History 26", icon: "calendar-outline", color: "#9CCFFF" },
];

export default function HomeScreen() {
  const navigation = useNavigation(); // Lấy navigation để điều hướng

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.name}>Christie Doe</Text>
        </View>
        <Image source={{ uri: "https://randomuser.me/api/portraits/women/45.jpg" }} style={styles.profileImage} />
      </View>

      <Text style={styles.sectionTitle}>Your Insights</Text>
      <View style={styles.grid}>
        {insights.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.card, { backgroundColor: item.color + "20" }]}
            onPress={() => {
              if (item.id === "1") {
                navigation.navigate("ScanScreen"); // Điều hướng nếu bấm "Scan new"
              }
            }}
          >
            <Ionicons name={item.icon} size={30} color={item.color} />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardCount}>{item.count}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.exploreMore}>
        <Text style={styles.exploreText}>Explore More</Text>
        <Ionicons name="arrow-forward" size={20} color="#333" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 20 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 50 },
  greeting: { fontSize: 24, fontWeight: "bold" },
  name: { fontSize: 18, color: "#555" },
  profileImage: { width: 50, height: 50, borderRadius: 25 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginTop: 20, marginBottom: 10 },
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  card: { width: "48%", padding: 15, borderRadius: 15, alignItems: "center", marginBottom: 15 },
  cardTitle: { fontSize: 16, fontWeight: "bold", marginTop: 10 },
  cardCount: { fontSize: 14, color: "#777", marginTop: 5 },
  exploreMore: { flexDirection: "row", alignItems: "center", marginTop: 20 },
  exploreText: { fontSize: 16, fontWeight: "bold", marginRight: 10 },
});

import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function ScanScreen() {
  const navigation = useNavigation();
  const [scannedData, setScannedData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaType.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.uri);
      scanImage(result.uri);
    }
  };

  const scanImage = async (imageUri) => {
    setScannedData("Dữ liệu quét từ ảnh");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      {!selectedImage && <View style={styles.scanBoxOverlay} />}
      {selectedImage && <Image source={{ uri: selectedImage }} style={styles.selectedImage} />}

      <View style={styles.productInfo}>
        <Image source={selectedImage ? { uri: selectedImage } : { uri: "https://via.placeholder.com/50" }} style={styles.productThumbnail} />
        <Text style={styles.productName}>{scannedData ? `Mã: ${scannedData}` : "Quét mã sản phẩm"}</Text>
        <TouchableOpacity onPress={pickImage} style={styles.addButton}>
          <Ionicons name="add-circle" size={30} color="blue" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black", alignItems: "center", justifyContent: "center" },
  backButton: { position: "absolute", top: 50, left: 20, padding: 10 },
  scanBoxOverlay: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    position: "absolute",
    top: "30%",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  productInfo: {
    position: "absolute",
    bottom: 10,
    left: 20,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  productName: { flex: 1, fontSize: 18, fontWeight: "bold", marginLeft: 10 },
  addButton: { marginLeft: 10 },
  selectedImage: { width: 250, height: 250, borderRadius: 10, position: "absolute", top: "30%" },
  productThumbnail: { width: 50, height: 50, borderRadius: 10, marginRight: 10 },
});

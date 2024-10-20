import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { SafeAreaView } from "react-native";
import { Link } from "expo-router";
export default function Home() {
  return (
    <SafeAreaView
      style={styles.outerView}
    >
      <View style={styles.innerView}>
        <Text style={styles.mainText}>My First Mobile App 😊</Text>
        <TouchableOpacity style={styles.button}>
          <Link style={styles.link} href={"/About"}>
            <Text style={styles.buttonText}>About</Text>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Link style={styles.link} href={"/Contact"}>
            <Text style={styles.buttonText}>Contact</Text>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Link style={styles.link} href={"/Services"}>
            <Text style={styles.buttonText}>Services</Text>
          </Link>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
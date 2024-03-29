import { Link, usePathname } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>View user</Text>

      <Link push href={{ pathname: "user/[id]", params: { id: "meuPerfil" } }}>
        <Button title="perfil" />
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

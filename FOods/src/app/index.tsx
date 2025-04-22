import { Link, router } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

export default function LoginScreen() {
  function handleLogin() {
    router.replace("/home/page")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput placeholder="Seu email" style={styles.input} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Senha</Text>
        <TextInput placeholder="Sua senha" secureTextEntry style={styles.input} />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      <Link href={"/cadastrar/page"}>
        <Text style={styles.linkText}>Crie uma Conta</Text>
      </Link>
    </View>
  );
}

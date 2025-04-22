import { useLocalSearchParams } from "expo-router";
import { Text, View, Image, ScrollView } from "react-native";
import { style } from "./style";
import { MENU } from "@/app/data/menu";

export default function Produto() {
  const { id } = useLocalSearchParams();
  const productId = Number(id);
  const product = MENU.find((item) => item.id === productId);

  if (!product) {
    return (
      <View style={style.container}>
        <Text>Produto não encontrado.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={style.container}>
      <Image source={product.image} style={style.image} resizeMode="cover" />

      <Text style={style.title}>{product.name}</Text>

      <Text style={style.description}>{product.description}</Text>
      <Text style={style.price}>R$ {product.price.toFixed(2)}</Text>

      <Text style={style.sectionTitle}>Sobre</Text>
      <Text style={style.text}>
      <Text style={style.text}>{product.sobre}</Text>
      </Text>

 
      <Text style={style.sectionTitle}>Ingredientes</Text>
      {product.ingredients.map((ingredient, index) => (
        <Text key={index} style={style.text}>
          • {ingredient}
        </Text>
      ))}
    </ScrollView>
  );
}

/**<Image source= {require("@assents/images/banana")}></Image> */

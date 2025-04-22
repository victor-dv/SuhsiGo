import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from"./style"
import { Link } from 'expo-router'
import { MENU } from "@/app/data/menu";

export default function Index() {
    const product = MENU.find((item) => item.id);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.headerImage} source={require("@/assets/images/faixada.png")}></Image>
                <Text style={styles.restaurantName}>SushiGo</Text>
            <Text style={styles.subtitle}>Uma rede de Restaurante de comida japonesa</Text>
        
            </View>
           

        <View style={styles.tabs}>
            {[] .map((tab) => (
            <TouchableOpacity>
                <Text style ={styles.tabText}> {tab}</Text>
            </TouchableOpacity>
           
       
    ))}
     </View>



<ScrollView style = {styles.menuList}>
    {
        MENU.map((item) => (
            <Link href={`/produto/${item.id}/page`} asChild key={item.id}>
            <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuContent}>
                <Text style ={styles.itemName}>{item.name}</Text>
                <Text>{item.description}</Text>
                <Text style ={styles.itemPrice}>R${item.price},00</Text>
            </View>
            <Image style ={styles.itemImage} source={item.image}/> 
            </TouchableOpacity>
            </Link>
        ))
    }
    </ScrollView>
     </View>
    )
}

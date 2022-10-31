import { Image,Text,View,StyleSheet } from "react-native";

const Card=()=>{

  return(
        <View style={styles.cardContainer}>
            <Image source={require('../assets/card1.jpg')} style={{width:150,height:120}}/>
            <View>
            <Text style={styles.cardDetail}>Skoda degisensiz</Text>
            <Text style={styles.cardDetail}>sahibinden 15000 km</Text>
            </View>
        </View>
    )
}

export default Card;

const styles=StyleSheet.create({
  cardContainer:{
    margin:10,
    flexDirection:'row',
    borderWidth:1,
    borderColor:'black',
    borderRadius:6
   },
   cardDetail:{
    fontWeight:'500',
    padding:10,

   }

})
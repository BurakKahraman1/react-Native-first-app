import { Image,Text,View,StyleSheet } from "react-native";

const Giris=()=>{

  return(
        <View style={styles.cardContainer}>
            <Image source={require('../assets/card1.jpg')} style={{width:150,height:120}}/>
           
        </View>
    )
}

export default Giris;

const styles=StyleSheet.create({
  cardContainer:{
    margin:10,
    flexDirection:'row',
    borderWidth:1,
    borderColor:'black',
    borderRadius:6
  }

})
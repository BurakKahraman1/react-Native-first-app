import { StyleSheet, View, Text,Button, Linking } from "react-native";
import { Link } from "react-router-native";
const Header=()=>{
 

    return(
        <View style={styles.headerContainer}>
            <Text style={styles.headerLink}>SAHIBINDEN</Text>
           <View style={styles.linksContainer}>
            <Button style={styles.headerLink} title="Giris"  />
            <Button style={styles.headerLink} title="Contact" onPress={()=>{Linking.openURL('tel:+905055055555')}}/>
            </View>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    headerContainer:{
        width:'100%',
        paddingTop:30,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
        justifyContent:'space-between',
        backgroundColor:'yellow',
        flexDirection:'row'
    },
    headerLink:{
        fontSize:20,
        fontWeight:'600',
        flexDirection:'row',
    },
    linksContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        flexBasis:'40%'
    }
});
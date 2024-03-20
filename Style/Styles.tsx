import { StyleSheet } from "react-native";

//common styles for list
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: "10%",
        paddingHorizontal: "5%",
        
    },
    card: {
        width: "100%",
        height: 64,
        backgroundColor: '#ffffff',
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 32,
        elevation: 16,
        paddingLeft: 56,


    },
    cardText: {
        color: "#000000",
        fontSize:14.5,
        fontWeight:'bold',
        fontStyle:'italic'
    },
    rightArrow: {
        width: 64,
        height: 64,
        position: 'absolute',
        right: 0,
        borderRadius: 32,
        tintColor: '#000000'
    },
    card2: {
        width: "100%",
        height: 64,
        backgroundColor: '#ffffff',
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 32,
        elevation: 16,
    },
    loadingContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    errorContainer:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    mssgBox:{
        backgroundColor:'white',
        flexDirection:'column',
        paddingTop:32,
        paddingHorizontal:16,
        alignItems:'center',
        gap:64,
        elevation:16,
        paddingBottom:16,
        borderRadius:16
    },
    button:{
        backgroundColor:'black',
        paddingHorizontal:32,
        paddingVertical:6,
        borderRadius:16
    },
    errorTitle:{
        fontSize:16,
        color:'black'
    },
    errorBtnText:{
        color:'white'
    },
    bg:{
        width:'100%',
        height:'100%'
    },
    loadingText:{
        color:'#000000'
    }
})

export default styles
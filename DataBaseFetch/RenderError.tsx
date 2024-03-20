import { Text, TouchableOpacity, View } from "react-native";
import styles from "../Style/Styles";
import { useNavigation } from "@react-navigation/native";

const RenderError = (): React.JSX.Element => {
    const navigation = useNavigation();
    return (
        <View style={styles.errorContainer}>
            <View style={styles.mssgBox}>
                <Text style={styles.errorTitle}>Oops! Something went wrong...</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
                    <Text style={styles.errorBtnText}>Go back</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default RenderError;
import { ActivityIndicator, Text, View } from "react-native";
import styles from "../Style/Styles";
const Activity = () => {
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size={'large'} animating={true} color={'black'} />
            <Text>Loading...</Text>
        </View>
    )
}

export default Activity;


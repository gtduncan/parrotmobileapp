import React from 'react';
import { Text} from '@ui-kitten/components';
import AppNavigator from './AppNavigator';

const HomePage = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    return(
        <View>
        <Text>Hello</Text>
        <AppNavigator/>
        </View>
    )
}

export default HomePage
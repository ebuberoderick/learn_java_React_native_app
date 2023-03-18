import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default function App() {
  return (
    <View className="flex-grow pt-7">
        <StatusBar style="auto" />
        <WebView source={{ uri: 'https://learnjava.programmerscity.com/login' }} />
    </View>
  );
}




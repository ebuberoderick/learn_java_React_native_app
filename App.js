// import * as React from 'react';
// import { View } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';

// export default function App() {
//   return (
//     <View>
//       <StatusBar style="auto" />
//       <WebView source={{ uri: 'https://learnjava.programmerscity.com/login' }} />
//     </View>
//   );
// }
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-grow pt-7">
        <StatusBar style="auto" />
        <WebView source={{ uri: 'https://learnjava.programmerscity.com/login' }} />
    </View>
  );
}




import React, { useEffect, useState } from 'react';
import { View, Text, Platform } from 'react-native';
import { Camera as ExpoCamera} from 'expo-camera';

const Camera: React.FC = () => {
  const [hasPermission, setHasPermission] = useState(true);
  const [type, ] = useState(ExpoCamera.Constants.Type.back);

  useEffect(() => {
    (async () => {   
      if (Platform.OS === 'android' || Platform.OS === 'ios') {
        const { status } = await ExpoCamera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      }
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return <View style={{ flex: 1 }}>
      <ExpoCamera type={type} style={{ flex: 1}}/>
    </View>
}

export default Camera;
```javascript
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const MyComponent = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/user')
      .then(response => response.json())
      .then(data => setUserData(data));
  }, []);

  return (
    <View>
      {/* Solution 1: Optional Chaining */}
      <Text>{userData?.name || 'Loading...'}</Text>

      {/* Solution 2: Nullish Coalescing */}
      <Text>{userData?.name ?? 'Loading...'}</Text>
    </View>
  );
};

export default MyComponent;
```
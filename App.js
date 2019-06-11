import React from 'react';
import TheCook from './src/TheCook';
import { SharedElementRenderer } from 'react-native-motion';


class App extends React.Component {

  render() {
    return (
      <SharedElementRenderer>
        <TheCook />
        </SharedElementRenderer>
    );
  }
}


export default App

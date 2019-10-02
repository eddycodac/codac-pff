/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Meteor, {
  withTracker,
  ReactiveDict,
  Accounts,
} from "react-native-meteor";

/** Connect to server. */
Meteor.connect("ws://10.106.0.76:3000/websocket");

class App extends React.Component {
  render() {
    const {
      connected,
      user,
      isListLoading,
      isListExists,
      list,
      handleSubsParam,
    } = this.props;
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

/** Reactive variable/dictionary to store dynamic subscription parameters */
const reactiveDictionary = new ReactiveDict();
reactiveDictionary.set("subsParam", 20);

/** Meteor HOC container component */
const AppContainer = withTracker(props => {
  const user = Meteor.user();
  const {connected} = Meteor.status();

  const subsParam = reactiveDictionary.get("subsParam");
  const meteorSubscription = Meteor.subscribe("SamplePublication", subsParam);
  const isListLoading = !meteorSubscription.ready();
  const list = Meteor.collection("sample.collection").find({});
  const isListExists = !isListLoading && list.length > 0;

  const handleSubsParam = param => {
    reactiveDictionary.set("subsParam", param);
  };

  return {
    connected,
    user,
    isListLoading,
    isListExists,
    list,
    handleSubsParam,
  };
})(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppContainer;
// import { Provider } from 'react-redux';
// import React from 'react';
// import { View, ActivityIndicator, StyleSheet } from 'react-native';
// import { PersistGate } from 'redux-persist/integration/react';
// import { colors } from './src/styles';

// import { store, persistor } from './src/redux/store';

// import AppView from './src/modules/AppViewContainer';

// export default function App() {
//   return (
//     <Provider store={store}>
//       <PersistGate
//         loading={
//           // eslint-disable-next-line react/jsx-wrap-multilines
//           <View style={styles.container}>
//             <ActivityIndicator color={colors.red} />
//           </View>
//         }
//         persistor={persistor}
//       >
//         <AppView />
//       </PersistGate>
//     </Provider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
// });

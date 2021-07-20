// install react-navigation

//TODO: import four
import HomeScreen from './screens/HomeScreen';
import AddNewContact from './screens/AddNewContact';
import ViewContact from './screens/ViewContact';
import EditContact from './screens/EditContact';

//TODO: import firebase
import * as firebase from 'firebase';

// set up react navigation
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Add: { screen: AddNewContact },
    View: { screen: ViewContact },
    Edit: { screen: EditContact }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#B83227"
      },
      headerTitleStyle: {
        color: "#fff"
      }
    }
  }
);

const App = createAppContainer(MainNavigator);

//TODO: Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDtPB-vzsrqWwbSK_r9AbQZACiboKK9244",
  authDomain: "contactapp-a53c7.firebaseapp.com",
  databaseURL: "https://contactapp-a53c7.firebaseio.com",
  projectId: "contactapp-a53c7",
  storageBucket: "contactapp-a53c7.appspot.com",
  messagingSenderId: "758237470416",
  appId: "1:758237470416:web:db1f142e81e9ec2dd0c8d5",
  measurementId: "G-KN6F0N674T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//FirebaseTODO create firebase real-time database with rules

// {
//   "rules": {
//     ".read": true,
//     ".write": true
//   }
// }
export default App;

import { StyleSheet,Text,View, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
//import navigation link
export default function App() {
  return (
   <SafeAreaView style={{flex:1,
     justifyContent: 'center',
     alignItems: "center",
     backgroundColor: '#fff',
     }}
     >
   <View>
   <Text style={{fontSize: 30,
   fontWeight: 'bold',
   color: '#20315f'
  }}>GAME ON</Text>
   </View>
   <TouchableOpacity style={{justifyContent: 'space-between',
   flexDirection: 'row',
   width: '250px',
   padding: 20,
   backgroundColor: '#AD40AF',
   borderRadius: 5,
   marginTop: '10px'
  }}>
     <Text style={{fontSize: 18, color: "#fff", fontWeight: 'bold', fontFamily: 'Roboto-Thin' }} >Let's Begin</Text>
     <Icon name="right" size={22} color="#fff" />
   </TouchableOpacity>
   </SafeAreaView>
  );
}


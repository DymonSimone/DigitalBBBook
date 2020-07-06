import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import 'react-native-gesture-handler';



	
export default class HomeScreen extends React.Component{

	render(){
		const {navigate} = this.props.navigation;
		return(

	<View style={styles.container}>
     	 <Text style={styles.text}>Oh Baby!</Text>
    	 <Text style={styles.intro}> The Digital Baby Book </Text>
    	 <View style={styles.babyButtons}>
     	 <Button title='New Baby' color='blue' onPress={() => navigate('New Baby')} />
    	 <Text style={styles.or}> OR </Text>
        <Button title='Older Babies' color='blue' />
       </View>
      <StatusBar style="auto" />
    </View>


		);
	}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',

  },
  text:{
    color:'hotpink',
    fontSize:45,
    fontWeight:'bold',
  },
  intro:{
    fontWeight:'normal',
    color:'white',
  }, 

  or:{
    textAlign:'center',

  }, 

  babyButtons:{
    position:'relative',
    top:15,
  },
});

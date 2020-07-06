import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ScrollView , Button, FlatList, View, TextInput} from 'react-native';
import 'react-native-gesture-handler';



	
export default class NewBabyScreen extends React.Component{

	render(){

		return(
			<ScrollView>
			<View style={styles.background}>
			<Text> Enter The Baby's Name </Text>
			<TextInput placeholder="Baby's Name" />
			</View>
			<FlatList   />

			</ScrollView>

		);
	}
}
	const styles =  StyleSheet.create({

		background:{
			backgroundColor:'purple',

		},


});

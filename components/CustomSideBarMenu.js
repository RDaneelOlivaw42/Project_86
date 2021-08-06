/*
//mine
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import firebase from 'firebase';

export default class CustomSideBarMenu extends React.Component {

    render(){
        return(
            <View style = {styles.container}>

                <View style = {styles.drawerItemsContainer}>
                    <DrawerItems {...this.props} />
                </View>

                <View style = {styles.logOutContainer}>
                    <TouchableOpacity
                      style = {styles.logOutButton}
                      onPress = {()=>{
                          firebase.auth().signOut();
                          this.props.navigation.navigate('Login')
                      }}>
                        <Text style = {styles.logOutText}>Log Out</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    drawerItemsContainer: {
        flex: 0.8
    },

    logOutContainer: {
        flex: 0.02,
        justifyContent: 'center',
        paddingBottom: 30
    },

    logOutButton: {
        height: 30,
        width: '100%',
        justifyContent: 'center',
        padding: 10
    },

    logOutText: {
        fontWeight: 'bold'
    }

});*/

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import firebase from 'firebase';

export default class CustomSideBarMenu extends React.Component {

    render(){
        return(
            <View style = {styles.container}>

                <View style = {styles.drawerItemsContainer}>
                    <DrawerItems {...this.props} />
                </View>

                <View style = {styles.logOutContainer}>
                    <TouchableOpacity
                      style = {styles.logOutButton}
                      onPress = {()=>{
                          firebase.auth().signOut();
                          this.props.navigation.navigate('Login');
                      }}>
                        <Text style = {styles.logOutText}>Log Out</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },

    drawerItemsContainer: {
        flex: 0.8
    },

    logOutContainer: {
        flex: 0.02,
        justifyContent: 'center',
        paddingBottom: 30
    },

    logOutButton: {
        height: 30,
        width: '100%',
        justifyContent: 'center',
        padding: 10
    },

    logOutText: {
        fontWeight: 'bold'
    }

})
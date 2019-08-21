import React from 'react';
import { View, Text, StyleSheet, Image,Button } from 'react-native';


const CustomRow = () => (
    <View style={styles.container}>
        <Image source={{ uri: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png' }} style={styles.photo} />
        <View style={styles.container_text}>
            <Text style={styles.title}>
                {'Albert Einstein'}
            </Text>
            <Text style={styles.description}>
                {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'}
            </Text>
            <View style={{flex:1,flexDirection:'column'}}>
              <Button title="Add Friend"/>
            </View>
        </View>
        
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 50,
        width: 50,
    },
});


export default CustomRow;
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { PrimaryColor, SecondaryColor } from './Contants'

const TextInputCP = props => {
    const { placeholder, title, isPassword = false } = props
    const [check, setCheck] = useState(true)
    const eye = check ? require('../assets/Eye-Open.png') : require('../assets/Eye-Close.png')
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View>
                <TextInput style={styles.input} placeholder={placeholder} secureTextEntry={isPassword} />
                {isPassword &&
                    <TouchableOpacity onPress={() => {
                        setCheck(!check)
                    }} style={styles.eye}>
                        <Image source={eye} />
                    </TouchableOpacity>}
            </View>
        </View>
    )

}


export default TextInputCP


const styles = StyleSheet.create({
    eye: {
        position: 'absolute',
        right: 10,
        top: 13,
    },
    container: {
        marginBottom: 20,
        minHeight: 60,
        flex: 1,
    },
    title: {
        fontSize: 12,
        marginBottom: 10,
        color: PrimaryColor,
        fontWeight: 'bold',
        paddingLeft: 20,
        fontStyle: 'normal',
        textTransform: 'uppercase'
    },
    input: {

        padding: 10,
        borderRadius: 30,
        backgroundColor: SecondaryColor
    }

})
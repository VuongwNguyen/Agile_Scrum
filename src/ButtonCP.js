import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { PrimaryColor, WhiteColor } from './Contants'

const ButtonCP = props => {
    const { title } = props
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonCP

const styles = StyleSheet.create({
    container: {
        backgroundColor: PrimaryColor,
        padding: 10,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 20,
    },
    title: {
        fontSize: 14,
        color: WhiteColor,
        fontWeight: 'bold',
        fontStyle: 'normal',
        textTransform: 'uppercase'
    }
})
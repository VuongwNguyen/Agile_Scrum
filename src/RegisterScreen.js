import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextInputCP from './TextInputCP'
import ButtonCP from './ButtonCP'

const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Register
            </Text>
            <View style={{
                marginTop: 90,
            }}>
                <View style={styles.rowView}>
                    <TextInputCP title='First name' placeholder='Joshn' />
                    <TextInputCP title='Last name' placeholder='Doe' />
                </View>
                <View style={{ gap: 10 }}>
                    <TextInputCP title='Email' placeholder='Johndoe@email.com' />
                    <TextInputCP title='Phone' placeholder='+00 123 456 789' />
                    <TextInputCP title='Password' placeholder='********' isPassword={true} />
                    <ButtonCP title='Register' />
                    <Text style={{ textAlign: 'center', marginTop: 20 }}>Already have an account? <Text style={{ color: '#F99928' }}>Login</Text></Text>
                </View>

            </View>

        </View>
    )
}

export default RegisterScreen


export const styles = StyleSheet.create({
    title: {
        color: '#000',
        fontSize: 36,
        marginBottom: 10,
        fontWeight: 'bold',
        fontStyle: 'normal',
        textTransform: 'uppercase'
    },
    container: {
        flex: 1,
    },
    rowView: {
        flexDirection: 'row',
        gap: 10,
        width: '100%',
    }
})
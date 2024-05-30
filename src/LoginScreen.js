import { Text, View } from 'react-native'
import React from 'react'
import { styles } from './RegisterScreen'
import ButtonCP from './ButtonCP'
import TextInputCP from './TextInputCP'

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Login
            </Text>
            <View style={{
                marginTop: 90,
            }}>

                <View style={{ gap: 10 }}>
                    <TextInputCP title='Phone' placeholder='+00 123 456 789' />
                    <TextInputCP title='Password' placeholder='********' isPassword={true} />
                    <Text style={{ textAlign: 'right', marginTop: 10, color: '#A3A3A3' }}>Forgot Password?</Text>
                    <ButtonCP title='Register' />
                    <Text style={{ textAlign: 'center', marginTop: 20 }}>Don’t have an account? <Text style={{ color: '#F99928' }}> Register</Text></Text>
                </View>

            </View>
        </View>
    )
}

export default LoginScreen


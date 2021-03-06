import React, { useState, useEffect } from 'react';
import { 
    View, 
    KeyboardAvoidingView, 
    Platform, 
    Text, 
    Image, 
    StyleSheet, 
    TextInput, 
    TouchableOpacity,
    AsyncStorage
} from 'react-native';

import api from '../services/api';

import logo from '../assets/logo.png';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [techs, setTechs] = useState('');

    //verifica se o usuario ja esta logado
    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if (user) {
                navigation.navigate('List');
            }
        });
    }, []);

    //faz a conexao com a API e salva no banco local a informacao que o usuario esta logado
    async function handleSubmit(){
        const response = await api.post('sessions', {
            email
        })

        const { _id } = response.data;

        await AsyncStorage.setItem('user', _id);
        await AsyncStorage.setItem('techs', techs);

        //metodo de navegacao
        navigation.navigate('List');
    }

    return (
        <KeyboardAvoidingView /*enabled={Platform.OS === 'ios'}*/ behavior="padding" style={styles.container}>
            <Image source={logo} />
            <View style={styles.form}>
                <Text style={styles.label}>Seu Email *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Seu e-mail"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail} 
                />

                <Text style={styles.label}>Suas tecnologias *</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Tecnologias de interesse"
                        placeholderTextColor="#999"
                        autoCapitalize="words"
                        autoCorrect={false} 
                        value={techs}
                        onChangeText={setTechs}
                    />
                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Encontrar Spots</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#4444',
        height: 44,
        marginBottom: 20,
        borderRadius: 5,
    },
    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    }
});
 
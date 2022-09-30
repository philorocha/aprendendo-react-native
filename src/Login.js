import * as React from 'react';
import { View } from 'react-native';
import { Button, Avatar, TextInput } from 'react-native-paper';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (
        <View style={{ flex: 1, flexDirection: 'column', paddingLeft: 4, paddingRight: 4 }}>
            <Avatar.Image size={120} source={require('../assets/profile.png')} style={{ marginTop: 10, alignSelf: 'center' }} />
            <View style={{ flex: 1 }}>
                <TextInput
                    mode='outlined'
                    label="E-mail"
                    value={email}
                    onChangeText={email => setEmail(email)}
                    maxLength={255}
                    keyboardType={'email-address'}
                />
                <TextInput
                    mode='outlined'
                    label="Senha"
                    value={password}
                    onChangeText={password => setPassword(password)}
                    secureTextEntry={true}
                    maxLength={255}
                />
                <Button
                    mode='contained'
                    style={{marginTop: 10}}
                    onPress={() => navigation.navigate('Cadastro'/*, {endereco: email}*/)}
                >Logar</Button>
                <Button
                    mode='contained'
                    style={{marginTop: 10}}
                    onPress={() => navigation.navigate('Cadastro')}
                >Cadastre-se</Button>
            </View>
        </View>
    );
};

export default LoginScreen;
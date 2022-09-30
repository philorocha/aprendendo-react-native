import * as React from 'react';
import { View } from 'react-native';
import { Appbar, Button, Avatar, TextInput } from 'react-native-paper';

const CadastroScreen = ({ route, navigation }) => {
    //const {endereco} = route.params;
    //console.log(endereco);
    const [nome, setNome] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (

        <View style={{ flex: 1, flexDirection: 'column', paddingLeft: 4, paddingRight: 4 }}>
            <Appbar.Header>
                <Appbar.Content title="Cadastro" titleStyle={{ alignSelf: 'center' }} />
            </Appbar.Header>
            <View style={{ flex: 0.125 }}>

            </View>
            <View style={{ flex: 1 }}>
                <TextInput
                    mode='outlined'
                    label="Nome"
                    value={nome}
                    onChangeText={nome => setNome(nome)}
                    maxLength={255}
                />
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
                    style={{ marginTop: 25 }}
                    onPress={() => navigation.navigate('Login')}
                >Cadastrar</Button>
            </View>
            <View style={{ flex: 1 }}>

            </View>
        </View>
    );
};

export default CadastroScreen;
import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {lightTheme} from './src/global/theme/lightTheme';
import {Text} from './src/components/Text';
import {Button} from './src/components/Button';
import {TextInput} from './src/components/TextInput/TextInput';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />

        <View style={{paddingHorizontal: 24, flex: 1, paddingTop: 40}}>
          <Text preset="headingLarge">Olá</Text>
          <Text preset="paragraphLarge" mt="s8" mb="s40">
            Digite seu e-mail e senha para entrar
          </Text>

          <TextInput label="E-mail" placeholder="Digite seu e-mail" />
          <TextInput
            label="Senha"
            placeholder="Digite sua senha"
            errorMessage="Mensagem de erro"
          />

          <Text mt="s8" color="primary" bold preset="paragraphSmall">
            Esqueci minha senha
          </Text>

          <Button text="Entrar" mt="s48" />
          <Button text="Criar uma conta" mt="s12" preset="outline" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;

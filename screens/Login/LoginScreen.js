import React from 'react';
import {
  View,
  Image,
  Dimensions,
  Keyboard,
} from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkAvoidKeyboard,
  RkStyleSheet,
  RkTheme,
} from 'react-native-ui-kitten';
import { Ionicons } from '@expo/vector-icons';
import { GradientButton } from '../../components/GradientButton';
import { scaleModerate, scaleVertical } from '../../utils/Scale';
//import NavigationType from '../../config/navigation/propTypes';

export default class LoginScreen extends React.Component {
  static propTypes = {
    //navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    header: null,
  };

  getThemeImageSource = (theme) => (
    theme.name = require('../../assets/images/backgroundLoginV1.png')
  );

  renderImage = () => {
    const screenSize = Dimensions.get('window');
    const imageSize = {
      width: screenSize.width,
      height: screenSize.height - scaleModerate(375, 1),
    };
    return (
      <Image
        style={[styles.image, imageSize]}
        source={this.getThemeImageSource(RkTheme.current)}
      />
    );
  };

  onLoginButtonPressed = () => {
    //this.props.navigation.goBack();
  };

  onSignUpButtonPressed = () => {
    //this.props.navigation.navigate('SignUp');
  };

  render = () => (
    <RkAvoidKeyboard
      onStartShouldSetResponder={() => true}
      onResponderRelease={() => Keyboard.dismiss()}
      style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.buttons}>
          <RkButton style={styles.socialButton}>
            <RkText><Ionicons name="logo-twitter" size={32} color="white" /></RkText>
          </RkButton>
          <RkButton style={styles.socialButton}>
            <RkText><Ionicons name="logo-google" size={32} color="white" /></RkText>
          </RkButton>
          <RkButton style={styles.socialButton}>
            <RkText><Ionicons name="logo-facebook" size={32} color="white" /></RkText>
          </RkButton>
        </View>
        <RkTextInput rkType='rounded' placeholder='Username' />
        <RkTextInput rkType='rounded' placeholder='Password' secureTextEntry />
        <RkButton>Login</RkButton>
        <View style={styles.footer}>
          <View style={styles.textRow}>
            <RkText rkType='primary3'>Don’t have an account? </RkText>
            <RkButton rkType='clear'>
                <RkText rkType='header6' /*onPress={this.onSignUpButtonPressed}*/>Sign up now</RkText>
            </RkButton>
          </View>
        </View>
      </View>
    </RkAvoidKeyboard>
  )
}

const styles = RkStyleSheet.create(theme => ({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.screen.base,
  },
  image: {
    resizeMode: 'cover',
    marginBottom: scaleVertical(10),
  },
  container: {
    paddingHorizontal: 17,
    paddingBottom: scaleVertical(22),
    alignItems: 'center',
    flex: -1,
  },
  footer: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  buttons: {
    marginTop: 50,
    marginBottom: scaleVertical(24),
  },
  button: {
    marginHorizontal: 14,
  },
  socialButton: {
    marginTop: 20
  },
  save: {
    marginVertical: 9,
  },
  textRow: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
}));
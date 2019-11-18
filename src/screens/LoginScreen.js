import {Button, Icon, Input, Item, Text, View} from 'native-base';
import React from 'react';
import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';
import {Color} from './../assets/styles/Color';
import {logRegStyles} from './../assets/styles/logRegStyles';
// import {postLogin} from '../actions/auth';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onChangeText = (id, value) => {
    console.log('e', id, value);
    // const {
    //   target: { value, id }
    // } = e;
    // console.log("e", e);
    // console.log("value", value);
    this.setState({
      [id]: value,
    });
  };

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
    // const {
    //   dataAuth: { isValid }
    // } = nextProps;
    // if (this.props !== nextProps) {
    //   console.log("isValid", isValid);
    //   if (isValid) {
    //     this.props.history.push("/");
    //   }
    // }

    if (nextProps.dataAuth.isValid) {
      console.log('masukkk');
      this.props.navigation.navigate('Home');
    }
  }

  handleSubmit = () => {
    // console.log('asas', this.props);
    // this.props.dispatch(
    //   postLogin({email: this.state.email, password: this.state.password}),
    // );
  };

  render() {
    console.log('state', this.props);

    return (
      <View style={loginStyle.loginWrapper}>
        <View style={loginStyle.loginContainer}>
          <Button rounded style={loginStyle.btnFacebook}>
            <Text style={loginStyle.txtFb}>LOGIN WITH FACEBOOK</Text>
          </Button>
        </View>
        <Text style={loginStyle.txtOr}>or</Text>
        <View style={loginStyle.formLogin}>
          <Item style={logRegStyles.item}>
            <Icon name="ios-person" style={logRegStyles.icon} />
            <Input
              value={this.state.email}
              id="email"
              onChangeText={e => this.onChangeText('email', e)}
              style={loginStyle.txtWhite}
              placeholderTextColor="rgba(255,255,255,0.8)"
              placeholder="Email or username"
            />
          </Item>
          <Item style={logRegStyles.item}>
            <Icon name="ios-lock" style={logRegStyles.icon} />
            <Input
              value={this.state.password}
              id="password"
              onChangeText={e => this.onChangeText('password', e)}
              style={loginStyle.txtWhite}
              secureTextEntry={true}
              placeholderTextColor="rgba(255,255,255,0.8)"
              placeholder="Password"
            />
          </Item>
        </View>
        <View style={loginStyle.btnLoginWrapper}>
          <Button
            onPress={() => this.props.navigation.navigate('Home')}
            rounded
            style={loginStyle.btnLogin}>
            <Text style={loginStyle.txtlogin}>LOG IN</Text>
          </Button>
        </View>
        {/* <Text style={{ marginTop: 50, color: 'white', alignSelf: 'center', fontWeight: '100', fontSize: 12, }}>
      Forgot your Password?
    </Text> */}
      </View>
    );
  }
}

const loginStyle = {
  loginWrapper: {
    flex: 1,
    height: '100%',
    backgroundColor: Color.black,
  },

  loginContainer: {
    alignSelf: 'center',
  },

  btnFacebook: {
    width: 320,
    top: 20,
    justifyContent: 'center',
  },

  txtWhite: {
    color: 'white',
  },

  txtlogin: {
    color: 'white',
    width: 250,
    textAlign: 'center',
  },

  txtOr: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: '100',
    fontSize: 12,
    top: 20,
    marginVertical: 30,
  },

  formLogin: {
    alignSelf: 'center',
    width: '80%',
    backgroundColor: 'transparent',
    top: 20,
  },

  btnLoginWrapper: {
    alignSelf: 'center',
    marginTop: 50,
  },

  btnLogin: {
    backgroundColor: Color.green,
    width: 250,
    justifyContent: 'center',
  },
};

function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage,
    dataAuth: state.auth.data,
    logOut: state.logOut,
  };
}
export default withNavigation(LoginScreen);

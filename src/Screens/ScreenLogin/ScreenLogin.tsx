import React from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import auth from '@react-native-firebase/auth';
import styles from './styleLogin';
import { FormValues, LoginScreenNavigationProp } from './utils/types/interfaces';
import { schema } from './utils/schema/validation'; // Ensure this validation schema is updated to reflect email and password
import { loginUser } from '../../utils/firebaseAuth';
import { useDispatch } from 'react-redux';

type ScreenLoginProps = {
  navigation: LoginScreenNavigationProp;
};

const ScreenLogin: React.FC<ScreenLoginProps> = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();


  const onSubmit = async (data: FormValues) => {
    loginUser(data.email, data.password , dispatch);
    // console.log(data);
    navigation.navigate('HomeScreen')
  }

  return (
    <View style={styles.container}>
      <Image source={require('../ScreenLogin/utils/Assets/star.png')} style={styles.headerImage} />
      <Text style={styles.title}>
        Hi, Welcome back 👋
      </Text>
      <Text style={styles.label}>Email</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="email-address"
          />
        )}
      />
      {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
      <Text style={styles.label}>Password</Text>
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.socialMediaIcons}>
        <Image source={require('../ScreenLogin/utils/Assets/google.png')} style={styles.socialIcon} />
        <Image source={require('../ScreenLogin/utils/Assets/fb.png')} style={styles.socialIcon} />
        <Image source={require('../ScreenLogin/utils/Assets/apple.png')} style={styles.socialIcon} />
      </View>
      <Text style={styles.registerPrompt}>
        Not a member?{' '}
        <Text style={styles.loginText} onPress={() => navigation.navigate('ScreenRegister')}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

export default ScreenLogin;

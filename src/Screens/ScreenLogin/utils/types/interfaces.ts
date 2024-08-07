// src/utils/interfaces/interfaces.ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../utils/types/navigation';

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ScreenLogin'
>;

export type FormValues = {
    email: string;
    password: string;
  };
  
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../utils/types/navigation';

export type RegisterScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ScreenRegister'
>;

export type FormValues = {
    email: string;
    password: string;
  };
  
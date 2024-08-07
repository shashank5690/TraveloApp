import { NavigationProp } from '@react-navigation/native';
import { Destination } from '../../Screens/ScreenHome/utils/Interface'; 

export type RootStackParamList = {
    ScreenOnboard: undefined;
    ScreenLogin: undefined;
    HomeScreen: undefined;
    ScreenRegister: undefined;
    Details: { item: Destination }; 
};

export type NavigationProps<T extends keyof RootStackParamList> = {
    navigation: NavigationProp<RootStackParamList, T>;
};

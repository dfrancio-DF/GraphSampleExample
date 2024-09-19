import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum RootRoutes {
  ABOUT = 'About',
  HOME = 'Home',
  PLAYER = 'Player',
  PRODUCTS = 'Products',
  USERS = 'Users'
}

export type RootStackParamList = {
  About: undefined;
  Home: undefined;
  Player: { videoID: string };
  Products: undefined;
  Users: undefined;
};

export type PlayerNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RootRoutes.PLAYER
>;

export type PlayerRouteProp = RouteProp<RootStackParamList, RootRoutes.PLAYER>;

export type AboutNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RootRoutes.ABOUT,
>;

export type ProductsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RootRoutes.PRODUCTS,
>;

export type UsersNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  RootRoutes.USERS,
>;

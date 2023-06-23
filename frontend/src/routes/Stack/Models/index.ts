import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
  Login: undefined;
  Posts?: { name?: string };
  Register: undefined;
};

export type propStack = NativeStackNavigationProp<propsNavigationStack>
import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";
import { theme } from "../../global/styles/theme";
import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string;
  action?: ReactNode;
};

export function Header({ title, action }: Props) {
  const { secondary100, secondary40, heading } = theme.colors;

  const navigation = useNavigation();

  function handlerGoBack() {
    navigation.goBack();
  }

  return (
    <LinearGradient style={styles.container} colors={[secondary100, secondary40]}>
      <BorderlessButton onPress={handlerGoBack}>
        <Feather name="arrow-left" size={24} color={heading} />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>
      {
          action &&
          <View>
              { action }
          </View>
      }
    </LinearGradient>
  );
}

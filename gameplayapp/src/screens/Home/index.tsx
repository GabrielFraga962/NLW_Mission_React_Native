import React, { useState, useCallback } from "react";
import { View, FlatList } from "react-native";
import { CategorySelect } from "../../components/CategorySelect";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { ButtonAdd } from "../../components/ButtonAdd";
import { ListHeader } from "../../components/ListHeader";
import { Background } from "../../components/Background";
import { Appointment, AppointmentProps } from "../../components/Appointment";
import { Profile } from "../../components/Profile";
import { COLLECTION_APPOINTMENTS } from "../../configs/database";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ListDivider } from "../../components/ListDivider";
import { styles } from "./styles";
import { Load } from "../../components/Load";

export function Home() {
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);

  const navigation = useNavigation();

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handleAppointmentDetails() {
    navigation.navigate("AppointmentDetails");
  }

  function handleAppointmentCreate() {
    navigation.navigate("AppointmentCreate");
  }

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

    if (category) {
      setAppointments(storage.filter((item) => item.category === category));
    } else {
      setAppointments(storage);
    }

    setLoading(false);
  }

  useFocusEffect(useCallback(() => {
    loadAppointments();
  },[category]));

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>

      <CategorySelect
        categorySelect={category}
        setCategory={handleCategorySelect}
      />

      {
        loading ? <Load/> :
        <>
          <ListHeader title="Partidas agendadas" subtitle={`Total ${appointments.length}`} />

          <FlatList
            data={appointments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Appointment data={item} onPress={handleAppointmentDetails} />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            contentContainerStyle={{ paddingBottom: 69 }}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
          />
        </>
      }
    </Background>
  );
}

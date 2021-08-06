import { useEffect, useState } from "react";
import { StyleSheet, Text, FlatList } from "react-native";

const [countriesData, setCountriesData] = useState([]);
const [error, setError] = useState();

function countriesList() {
  async function fetchCountriesData() {
    try {
      const response = await fetch(
        "https://restcountries.eu/rest/v2/region/africa?fields=name"
      );
      setCountriesData(await response.json());
    } catch (err) {
      setError(err);
      // console.log("Error", err);
    }
  }

  useEffect(() => {
    fetchCountriesData();
  }, []);

  // console.log(JSON.stringify(countriesData));

  return (
    <FlatList
      data={countriesData}
      contentContainerStyle={styles.container}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => <Text style={styles.text}>{item.name}</Text>}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#10172F",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 20,
    margin: 20,
    color: "#fff",
  },
});

export default countriesList();

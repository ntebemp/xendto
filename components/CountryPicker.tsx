import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CountryFlag from "react-native-country-flag";
import { Dropdown } from "react-native-element-dropdown";

const countries = [
  {
    label: "Cameroon",
    value: "CM",
    code: "+237",
  },
  {
    label: "France",
    value: "FR",
    code: "+33",
  },
  {
    label: "United States",
    value: "US",
    code: "+1",
  },
  {
    label: "United Kingdom",
    value: "GB",
    code: "+44",
  },
  {
    label: "Nigeria",
    value: "NG",
    code: "+234",
  },
  {
    label: "Germany",
    value: "DE",
    code: "+49",
  },
];

type Props = {
  onChange: (country: any) => void;
};

export default function CountryPicker({ onChange }: Props) {
  const [value, setValue] = useState("CM");

  return (
    <Dropdown
      style={styles.dropdown}
      containerStyle={{
        width: 250,
      }}
      data={countries}
      search
      labelField="label"
      valueField="value"
      value={value}
      placeholder="Country"
      onChange={(item) => {
        setValue(item.value);
        onChange(item);
      }}
      renderItem={(item) => (
        <View style={styles.item}>
          <CountryFlag isoCode={item.value} size={10} />
          <Text style={styles.itemText}>
            {item.value} ({item.code})
          </Text>
        </View>
      )}
      renderLeftIcon={() => (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CountryFlag isoCode={value} size={10} />
          <Text style={{ marginLeft: 8 }}>
            {countries.find((c) => c.value === value)?.code}
          </Text>
        </View>
      )}
      selectedTextStyle={{
        color: "transparent",
        width: 0,
      }}
    />
  );
}

const styles = StyleSheet.create({
  dropdown: {
    minWidth: 90,
    borderRightWidth: 1,
    borderColor: "#DDD",
    paddingRight: 10,
    marginRight: 10,
    height: 32,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },

  itemText: {
    marginLeft: 10,
    fontSize: 15,
  },
});

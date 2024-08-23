import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { headerStyles } from "./Header.style";
import headerLogo from "../../assets/logo.png";

const Header = () => {
  return (
    <>
      <Image
        style={headerStyles.img}
        source={headerLogo}
        resizeMode="contain"
      />
      <Text style={headerStyles.subtitle}>
        Tu as probablement un truc à faire
      </Text>
    </>
  );
};

const styles = StyleSheet.create({});

export default Header;

import React from "react";
import { Platform, Text as RNText } from "react-native";
import { iOSUIKit, material, systemWeights } from "react-native-typography";

const isAndroid = Platform.OS === "android";

const textStyles = isAndroid ? material : iOSUIKit;

const iOSNames = {
  title: "title3",
  subheading: "subhead",
  body1: "body",
  caption: "footnote",
  display1: "largeTitle",
};

export default function Text({
  em = false,
  style,
  type = "body1",
  white = false,
  // Weights
  thin = false,
  light = false,
  regular = false,
  semibold = false,
  bold = false,
  ...rest
}) {
  let name = isAndroid ? type : iOSNames[type] || type;

  if (em) {
    if (name === "body1") {
      name = "body2";
    } else if (!isAndroid) {
      name += "Emphasized";
    }
  } else if (name === "largeTitle") {
    name = "largeTitleEmphasized";
  }

  if (white) {
    name += "White";
  }

  let text = textStyles[name];

  let weight;

  if (thin) {
    weight = systemWeights.thin;
  } else if (light) {
    weight = systemWeights.light;
  } else if (regular) {
    weight = systemWeights.regular;
  } else if (semibold) {
    weight = systemWeights.semibold;
  } else if (bold) {
    weight = systemWeights.bold;
  }

  return <RNText {...rest} style={[text, weight, style]} />;
}

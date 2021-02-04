import React from "react";

import Text from "./text";

export default function Title({ large = false, ...rest }) {
  return <Text {...rest} em type={large ? "display1" : "title"} />;
}

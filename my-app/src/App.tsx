import { BlurFilter, TextStyle } from "pixi.js";
import { Stage, Container, Sprite, Text } from "@pixi/react";
import { useMemo } from "react";

const App = () => {
  return (
    <Stage width={300} height={300} options={{ backgroundColor: 0xeef1f5 }}>
  <Text
    text="Hello World"
    anchor={0.5}
    x={150}
        y={150}
  />
</Stage>
  );
};

export default App;

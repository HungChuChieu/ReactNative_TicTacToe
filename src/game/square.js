import { View, Text, Button } from "react-native";
import { TouchableOpacity } from "react-native";

import gameStyles from "./css";

const Square = (props) => {
  return (
    <View >
      <TouchableOpacity style={gameStyles.square}
        onPress={() => {
          props.onClick();
        }}
        //title={props.value}
      >
              <Text >{props.value}</Text>
        
      </TouchableOpacity>
    </View>
  );
};

export default Square;

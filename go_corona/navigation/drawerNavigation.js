import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../screens/homeScreen";
import Corona from "../screens/corona";
import Precaution from "../screens/precaution";
import Vaccination from "../screens/vaccination";

const Drawer = createDrawerNavigator();

 
  export default class DrawerNavigator extends Component{



    render(){
        return (
    <Drawer.Navigator
     drawerContentOptions={{
       activeTintColor:"#e91e63",
       inactiveTintColor:"red",
       itemStyle:{marginVertical:5}
     }} options={{HeaderShown:false}}
     >  

      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Precaution" component={Precaution} />
      <Drawer.Screen name="Vaccine" component={Vaccination} />
      <Drawer.Screen name="Corona" component={Corona} />
    </Drawer.Navigator>
  );
};
  };

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen39039Navigator from '../features/BlankScreen39039/navigator';
import BlankScreen49008Navigator from '../features/BlankScreen49008/navigator';
import BlankScreen29006Navigator from '../features/BlankScreen29006/navigator';
import BlankScreen19005Navigator from '../features/BlankScreen19005/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen39039: { screen: BlankScreen39039Navigator },
BlankScreen49008: { screen: BlankScreen49008Navigator },
BlankScreen29006: { screen: BlankScreen29006Navigator },
BlankScreen19005: { screen: BlankScreen19005Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings134852Navigator from '../features/Settings134852/navigator';
import UserProfile134850Navigator from '../features/UserProfile134850/navigator';
import ArticleList134812Navigator from '../features/ArticleList134812/navigator';
import ArticleList134811Navigator from '../features/ArticleList134811/navigator';
import ArticleList134810Navigator from '../features/ArticleList134810/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings134852: { screen: Settings134852Navigator },
UserProfile134850: { screen: UserProfile134850Navigator },
ArticleList134812: { screen: ArticleList134812Navigator },
ArticleList134811: { screen: ArticleList134811Navigator },
ArticleList134810: { screen: ArticleList134810Navigator },

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

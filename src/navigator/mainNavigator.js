import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial134889Navigator from '../features/Tutorial134889/navigator';
import NotificationList134861Navigator from '../features/NotificationList134861/navigator';
import Settings134860Navigator from '../features/Settings134860/navigator';
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
Tutorial134889: { screen: Tutorial134889Navigator },
NotificationList134861: { screen: NotificationList134861Navigator },
Settings134860: { screen: Settings134860Navigator },
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

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {BottomNavigation, Provider, Text} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ChatsScreen from './src/screens/chats';
import {NativeRouter, Route, Routes} from 'react-router-native';
import ChatScreen from './src/screens/chat';

interface NavRoutes {
  key: string;
  title: string;
  focusedIcon: string;
}

function App(): JSX.Element {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState<NavRoutes[]>([
    {
      key: 'chats',
      title: 'Chats',
      focusedIcon: 'chat',
    },
    {key: 'calls', title: 'Calls', focusedIcon: 'bell'},
    {key: 'people', title: 'People', focusedIcon: 'account'},
    {key: 'stories', title: 'Stories', focusedIcon: 'book'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    chats: () => <ChatsScreen />,
    calls: () => <Text>Calls</Text>,
    people: () => <Text>People</Text>,
    stories: () => <Text>Stories</Text>,
  });
  return (
    <SafeAreaProvider>
      <Provider>
        <NativeRouter>
          <Routes>
            <Route
              path="/"
              element={
                <BottomNavigation
                  navigationState={{index, routes}}
                  onIndexChange={setIndex}
                  renderScene={renderScene}
                />
              }
            />
            <Route path='/chat/:chatId' element={<ChatScreen />}/>
          </Routes>
        </NativeRouter>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;

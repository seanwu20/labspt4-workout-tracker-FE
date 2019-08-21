import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Landing from './components/Landing'
import LoginForm from './components/LoginForm'
import Onboarding from './components/Onboarding'
import {NativeRouter, Switch, Route} from 'react-router-native'

export default function App() {
  return (

    <NativeRouter>
      <View style = {styles.container}>
        <Switch>
          <Route exact path = "/" component = {LoginForm} />
          <Route exact path = "/login" component = {Landing} />
          <Route exact path = "/bodytype" component = {Onboarding} />
        </Switch>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

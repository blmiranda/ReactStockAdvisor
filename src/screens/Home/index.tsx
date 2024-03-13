import { useLayoutEffect, useState } from 'react';
import { SafeAreaView, Pressable } from 'react-native';

import styles from './styles.ts';

import { Props } from './types';

import Header from '../../components/Header';
import OptionsForm from '../../components/OptionsForm';
import { hideSelectionOptions } from '../../components/OptionsForm/animations';
import StocksResults from '../../components/StocksResults/index.tsx';

const Home = ({ navigation }: Props): JSX.Element => {
  const [selectionOptionsIsVisible, setSelectionOptionsIsVisible] =
    useState<boolean>(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView style={styles.preContainer}>
      <Pressable
        onPress={() => {
          hideSelectionOptions();
          setSelectionOptionsIsVisible(false);
        }}
      >
        <Header />

        <OptionsForm
          selectionOptionsIsVisible={selectionOptionsIsVisible}
          setSelectionOptionsIsVisible={setSelectionOptionsIsVisible}
        />
      </Pressable>

      <StocksResults />
    </SafeAreaView>
  );
};

export default Home;

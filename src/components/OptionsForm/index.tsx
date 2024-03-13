import { useEffect, useState } from 'react';
import { Animated, FlatList, Pressable, View, Text } from 'react-native';

import styles from './styles';
import { showSelectionOptions, hideSelectionOptions } from './animations';

import { Props } from './types.ts';
import { SelectionListOptionObject } from '../../global/types/selectionListOptions.types';
import { StockOptions } from '../../global/types/stockOptions.types';
import {
  SocialMediaOptionObject,
  SocialMediaOptions,
} from '../../global/types/socialMediaOptions.types';
import {
  TimeWindowOptionObject,
  TimeWindowOptions,
} from '../../global/types/timeWindowOptions.types';
import { StockOptionObject } from '../../global/types/stockOptions.types';

import useAdvisor from '../../hooks/useAdvisor/index.ts';

import OptionButton from '../OptionButton';
import SelectionButton from '../SelectionButton';

const OptionsForm = ({
  selectionOptionsIsVisible,
  setSelectionOptionsIsVisible,
}: Props): JSX.Element => {
  const { getStocks, setStocks } = useAdvisor();
  const [symbolOptions, setSymbolOptions] = useState<StockOptions | null>(null);
  const [socialMediaOptions, setSocialMediaOptions] =
    useState<SocialMediaOptions | null>(null);
  const [timeWindowOptions, setTimeWindowOptions] =
    useState<TimeWindowOptions | null>(null);
  const [selectedSymbol, setSelectedSymbol] =
    useState<Array<StockOptionObject> | null>(null);
  const [selectedSocialMedia, setSelectedSocialMedia] =
    useState<Array<SocialMediaOptionObject> | null>(null);
  const [selectedTimeWindow, setSelectedTimeWindow] =
    useState<Array<TimeWindowOptionObject> | null>(null);

  async function getData() {
    if (selectedSymbol && selectedSocialMedia && selectedTimeWindow) {
      if (
        selectedSymbol.length !== 0 &&
        selectedSocialMedia.length !== 0 &&
        selectedTimeWindow.length !== 0
      ) {
        try {
          await getStocks(
            selectedSymbol![0].value,
            selectedTimeWindow![0].value
          );
        } catch (error: unknown) {
          if (error instanceof Error)
            throw new Error('An unknown error ocurred');
        }
      } else {
        console.log('socialMedia: ', selectedSocialMedia);
        setStocks(null);
      }
    }
  }

  function handleOptionsDisplay(options: SelectionListOptionObject) {
    const displayDelay = selectionOptionsIsVisible ? 300 : 0;

    if (selectionOptionsIsVisible) hideSelectionOptions();

    setTimeout(() => {
      switch (options.currentType) {
        case 'symbol':
          setSymbolOptions(options.data.symbol);
          setSocialMediaOptions(null);
          setTimeWindowOptions(null);
          break;
        case 'socialMedia':
          setSymbolOptions(null);
          setSocialMediaOptions(options.data.socialMedia);
          setTimeWindowOptions(null);
          break;
        case 'timeWindow':
          setSymbolOptions(null);
          setSocialMediaOptions(null);
          setTimeWindowOptions(options.data.timeWindow);
          break;
      }

      showSelectionOptions();
      setSelectionOptionsIsVisible(true);
    }, displayDelay);
  }

  function handleSymbolInput(item: StockOptionObject) {
    setSelectedSymbol([item]);
    hideSelectionOptions();
    setSelectionOptionsIsVisible(false);
  }

  function handleSocialMediaInput(item: SocialMediaOptionObject) {
    setSelectedSocialMedia((prevState) => {
      if (prevState) {
        const updatedSocials: Array<SocialMediaOptionObject> = [...prevState];

        if (updatedSocials.includes(item)) {
          updatedSocials.splice(updatedSocials.indexOf(item), 1);
          return updatedSocials;
        }

        if (updatedSocials.length > 4) {
          updatedSocials.pop();
          updatedSocials.push(item);
        }

        updatedSocials.push(item);

        if (updatedSocials.length === 4) {
          hideSelectionOptions();
          setSelectionOptionsIsVisible(false);
        }

        return updatedSocials;
      } else {
        const updatedSocial: Array<SocialMediaOptionObject> = [item];
        return updatedSocial;
      }
    });
  }

  function handleTimeWindowInput(item: TimeWindowOptionObject) {
    setSelectedTimeWindow([item]);
    hideSelectionOptions();
    setSelectionOptionsIsVisible(false);
  }

  return (
    <View>
      <View style={styles.buttonsContainer}>
        <OptionButton
          buttonType="symbol"
          onPress={handleOptionsDisplay}
          selectedItem={selectedSymbol}
        />
        <OptionButton
          buttonType="socialMedia"
          onPress={handleOptionsDisplay}
          selectedItem={selectedSocialMedia}
        />
        <OptionButton
          buttonType="timeWindow"
          onPress={handleOptionsDisplay}
          selectedItem={selectedTimeWindow}
        />
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.submitButton,
          pressed && styles.submitButtonPressed,
        ]}
        onPress={getData}
      >
        <Text style={styles.submitText}>Go</Text>
      </Pressable>

      <View style={styles.divider} />

      <View style={styles.buttonOptionsContainer}>
        <Animated.View style={styles.buttonOptions}>
          {symbolOptions && (
            <FlatList
              data={symbolOptions}
              keyExtractor={(item) => item.name}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatList}
              renderItem={({ item }) => (
                <SelectionButton
                  item={item}
                  buttonType="symbol"
                  onPress={() => handleSymbolInput(item)}
                  activeSelection={selectedSymbol}
                />
              )}
            />
          )}

          {socialMediaOptions && (
            <FlatList
              data={socialMediaOptions}
              keyExtractor={(item) => item.name}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatList}
              renderItem={({ item }) => (
                <SelectionButton
                  item={item}
                  buttonType="socialMedia"
                  onPress={() => handleSocialMediaInput(item)}
                  activeSelection={selectedSocialMedia}
                />
              )}
            />
          )}

          {timeWindowOptions && (
            <FlatList
              data={timeWindowOptions}
              keyExtractor={(item) => item.name}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatList}
              renderItem={({ item }) => (
                <SelectionButton
                  item={item}
                  buttonType="timeWindow"
                  onPress={() => handleTimeWindowInput(item)}
                  activeSelection={selectedTimeWindow}
                />
              )}
            />
          )}
        </Animated.View>
      </View>
    </View>
  );
};

export default OptionsForm;

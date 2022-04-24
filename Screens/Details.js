import { SafeAreaView, View, Text, Image, StatusBar, FlatList } from 'react-native';
import React from 'react';
import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { NFTData } from '../constants';
import {
  CircleButton,
  RectButton,
  SubInfo,
  FocusedStatusBar,
  DetailsDesc,
  DetailsBid
} from '../Components';

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingVertical: SIZES.font,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.5)',
        zIndex: 1
      }}>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />

      </View>
      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
      />

    </SafeAreaView>
  )
}

export default Details;
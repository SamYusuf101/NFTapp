import { View, Text, Image, TextInput } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES, assets } from '../constants';

const HomeHeader = ({ onSearch }) => {
  return (
    <View style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 90, height: 30 }}
        />
        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.person01}

            style={{ width: '100%', height: '100%' }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: 'absolute',
              width: 15,
              height: 16,
              bottom: 0,
              right: 0
            }}

          />
        </View>

      </View>
      <View style={{ marginVertical: SIZES.font }}>
        <Text style={{
          fontSize: SIZES.small,
          color: COLORS.red
        }}>
          Hi Sam 👋</Text>

        <Text style={{
          fontSize: SIZES.large, fontWeight: 'bold',
          color: COLORS.white, marginTop: SIZES.base / 2
        }}>
          Let's find a masterpiece</Text>

      </View>
      <View style={{ marginTop: SIZES.font }}>
        <View style={{
          width: '100%',
          borderRadius: SIZES.font,
          backgroundColor: COLORS.gray,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.small - 2
        }}>
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Search NFTs"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />

        </View>

      </View>
    </View>
  );
};

export default HomeHeader;

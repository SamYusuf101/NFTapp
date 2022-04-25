import { View, Text } from 'react-native';
import { React, useState } from 'react';
import { EthPrice, NFTTitle } from './SubInfo';
import { COLORS, SIZES } from '../constants';

const DetailDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readmore, setReadmore] = useState(false);
  return (
    <>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={24}
          subTitleSize={SIZES.small}
        />

        <EthPrice price={data.price} />

      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 0.8 }}>
        <Text style={{
          fontSize: 20,
          color: COLORS.primary
        }}> Description</Text>

        <View style={{ marginTop: SIZES.base }}>
          <Text style={{
            fontSize: SIZES.small,
            color: COLORS.secondary,
            lineHeight: 25
          }}>
            {text}
            {!readmore && '...'}
            <Text style={{
            fontSize: SIZES.small,
            fontFamily:'sans-serif-medium',
            color: COLORS.primary,
            
            }}
            onPress={() => {
              if(!readmore) {
                setText(data.description);
                setReadmore(true);

              }else {
                setText(data.description.slice(0, 100));
                setReadmore(false);
              }
            }}
            >
            {readmore ? 'Show Less' : 'Read More'}
            </Text>
          </Text>

        </View>

      </View>

    </>
  )
}

export default DetailDesc
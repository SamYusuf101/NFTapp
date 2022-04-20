import { View, Text } from 'react-native'
import React from 'react'
import { SIZES } from '../constants'

export const NFTTitle = () => {
  
}

export const EthPrice = () => {
  
}
export const ImageCmp = () => {
  
}
export const People = () => {
    return(
        <View style={{flexDirection:'row'}}>
        <Text>People</Text>
        </View>
    )
  
}
export const EndDate = () => {
    return(
        <View>
        <Text>EndDate</Text>
        </View>
    )
  
}
export const SubInfo = () => {
    return(
        <View style={{
            width:'100%',
            paddingHorizontal: SIZES.font,
            marginTop: -SIZES.extraLarge,
            flexDirection:'row',
            justifyContent:'space-between'
        }}>
        <People />
        <EndDate />
        
        </View>
    )
  
}







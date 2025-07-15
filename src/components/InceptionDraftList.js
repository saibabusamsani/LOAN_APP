import { View, Text } from 'react-native'
import React from 'react'


const InceptionDraftList=({drafts})=>{

    console.log("iceptions draft : ",drafts);
  return (
    <View>
      <Text>{`InceptionList count -> ${drafts.length}`}</Text>
    </View>
  )
};
export default InceptionDraftList;
import React, { useState, useEffect } from 'react'
import { WebView } from 'react-native-webview'
import { Text, View } from 'react-native';
import getUrl from '../../components/hooks/getUrl';


const WatchPage = ({ route }) => {

    const url = getUrl(route.params.episodePageData.episode)

    return (
        <View style={{ flex: 1 }}>
            <WebView
                source={{ uri: `${url}` }}
                onError={(event) => alert(`Webview error ${event}`)}
                allowsFullscreenVideo={true}
                javaScriptEnabled={true}
                scrollEnabled={false}
            />
        </View>
    );
}

export { WatchPage };
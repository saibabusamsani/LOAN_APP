import NetInfo from '@react-native-community/netinfo';

const checkForNetworkConnection = async () => {
  try {
    const state = await NetInfo.fetch();
    return state.isConnected && state.isInternetReachable;
  } catch (error) {
    console.error('Network check failed:', error);
    return false;
  }
};

export {checkForNetworkConnection};

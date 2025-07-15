import React, { useState, useEffect } from 'react';
import { View, TextInput } from 'react-native';
import LiveInceptionDraftList from '../../database/observers/LiveData';
import { useTheme } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';

const InceptionDraft = () => {
  const { colors } = useTheme();

  const [search, setSearch] = useState({
    typed: '',
    debounced: '',
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch((prev) => ({
        ...prev,
        debounced: prev.typed,
      }));
    }, 300);

    return () => clearTimeout(timer);
  }, [search.typed]);

  return (
    <View className="bg-surface flex-1 p-4">
      <View className="bg-white border border-primary flex-row items-center gap-1 px-3 rounded-md">
        <Feather name="search" size={20} color={colors.primary} />
        <TextInput
          placeholder="Search by Name"
          value={search.typed}
          onChangeText={(text) =>
            setSearch((prev) => ({ ...prev, typed: text }))
          }
          placeholderTextColor="#999"
          style={{ flex: 1, height: 40 }}
        />
      </View>

      <LiveInceptionDraftList search={search.debounced} />
    </View>
  );
};

export default InceptionDraft;

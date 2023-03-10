import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const ViewHeader = ({
    title,
    bookmark,
    bookmarked,
}) => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                navigation.goBack();
            }} 
            hitSlop={{ top: 32, bottom: 32, left: 32, right: 32}}
            activeOpacity={0.8}
            >
                <Icon name="chevron-back-outline" size={28} color="#DA5746" />
            </TouchableOpacity>
            <Text style={styles.title}>
                {title}
            </Text>
            <TouchableOpacity 
            onPress={bookmark}
            hitSlop={{ top: 32, bottom: 32, left: 32, right: 32}} 
            activeOpacity={0.8}
            >
              <Icon name={bookmarked ? 'md-heart' : 'heart-outline'} size={24} color="#DA5746" /> 
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 48,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F1F1F1',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#212121',
    },
})

export default ViewHeader

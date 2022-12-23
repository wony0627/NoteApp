import React from 'react'
import { Text, ScrollView, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { withContext } from 'react-simplified-context'
import ViewHeader from '../components/ViewHeader'
import { useRoute } from '@react-navigation/native'

const ViewScreen = ({articles,toggle,}) => {
    const route = useRoute()
    const id = route.params.id
    const article = articles.find((a) => {
        return a.id === id
    })
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <ViewHeader 
            title={article.title} 
            bookmarked={article.bookmarked}
            bookmark={() => {
                toggle(id)
            }} />
            <ScrollView>
                <TouchableOpacity activeOpacity={0.8} onLongPress={() =>  navigation.navigate('Edit', { id: id })} >
                <Text style={styles.content}>
                    {article.content}
                </Text>
                </TouchableOpacity>
                <Text style={styles.date}>
                    {article.date}
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: 20,
        fontSize: 16,
        lineHeight: 20,
        color: '#424242',
    },
    date: {
        padding: 20,
        paddingTop: 20,
        fontSize: 12,
        color: '#BDBDBD',
    }
})

export default withContext(ViewScreen)

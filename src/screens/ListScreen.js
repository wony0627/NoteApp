import React from 'react'
import { FlatList, SafeAreaView, StyleSheet } from 'react-native'
import { withContext } from 'react-simplified-context'
import Header from '../components/Header'
import ArticleItem from '../components/ArticleItem'

const ListScreen = ({
    articles,
    remove,
}) => {
    return (
    <SafeAreaView style={styles.container} >
        <Header title="λμ κΈ" />
        <FlatList
        data={articles}
        renderItem={({ item}) => {
            return <ArticleItem article={item}
            remove={() => {
                remove(item.id)
            }}/>
        }}
        keyExtractor={(item) => {
            return `${item.id}`
        }}
        />
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default withContext(ListScreen)

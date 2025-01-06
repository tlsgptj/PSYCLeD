import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface Post {
    id: string;
    title: string;
    content: string;
}

const RecentFiles: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        // Mock data for testing
        const mockData: Post[] = [
            { id: '1', title: 'Post 1', content: 'Content of post 1' },
            { id: '2', title: 'Post 2', content: 'Content of post 2' },
            { id: '3', title: 'Post 3', content: 'Content of post 3' },
        ];
        setPosts(mockData);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Recent Posts</Text>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.post}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.content}>{item.content}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    post: {
        marginBottom: 16,
        padding: 16,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        fontSize: 14,
        marginTop: 8,
    },
});

export default RecentFiles;

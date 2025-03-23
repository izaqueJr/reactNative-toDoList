import { useEffect, useState } from 'react';
import { View, FlatList, Alert, Text, Image } from 'react-native';
import { styles } from './styles';
import Form from '@/src/components/Form';
import Empty from '@/src/components/Empty';
import Task from '@/src/components/Task';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Task = {
    id: number;
    text: string;
    done: boolean;
};

const STORAGE_KEY = '@tasks';

export default function Home() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskItem, setTaskItem] = useState<string>('');

    useEffect(() => {
        const loadTasks = async () => {
            try {
                const storedTasks = await AsyncStorage.getItem(STORAGE_KEY);
                if (storedTasks) {
                    const parsed = JSON.parse(storedTasks);
                    setTasks(parsed);
                }
            } catch (error) {
                console.log('Erro ao carregar tasks:', error);
            }
        };

        loadTasks();
    }, []);


    useEffect(() => {
        const saveTasks = async () => {
            try {
                await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
            } catch (error) {
                console.log('Erro ao salvar tasks:', error);
            }
        };

        saveTasks();


    }, [tasks]);

    const handleAddTask = () => {
        if (!taskItem.trim()) return;

        const newTask: Task = {
            id: Date.now(),
            text: taskItem.trim(),
            done: false,
        };

        setTasks(prev => [...prev, newTask]);
        setTaskItem('');
    };

    const handleTaskDone = (id: number) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, done: !task.done } : task
        );

        const sortedTasks = updatedTasks.sort((a, b) => Number(a.done) - Number(b.done));
        setTasks(sortedTasks);
    };

    const handleParticipantRemove = (id: number) => {
        Alert.alert('Remover Task', 'Deseja remover a task?', [
            { text: 'Não', style: 'cancel' },
            {
                text: 'Sim',
                onPress: () => {
                    const newTasks = tasks.filter(task => task.id !== id);
                    setTasks(newTasks);
                    Alert.alert('Task removida');
                },
            },
        ]);
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('@/assets/images/icons/icon-logo.png')} />
            </View>


            <View style={styles.mainContainer}>
                <Form
                    taskItem={taskItem}
                    setTaskItem={setTaskItem}
                    handleAddTask={handleAddTask}
                />

                <View style={styles.counterContainer}>
                    <View style={styles.counter}>
                        <Text style={styles.counterLabel}>Criadas</Text>
                        <Text style={styles.counterNumber}>{tasks.length}</Text>
                    </View>

                    <View style={styles.counter}>
                        <Text style={styles.counterLabelDone}>Concluídas</Text>
                        <Text style={styles.counterNumber}>{tasks.filter(task => task.done).length}</Text>
                    </View>
                </View>
                <FlatList
                    data={tasks}
                    keyExtractor={item => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={<Empty />}
                    renderItem={({ item }) => (
                        <Task
                            text={item.text}
                            done={item.done}
                            id={item.id}
                            onRemove={() => handleParticipantRemove(item.id)}
                            handleTaskDone={handleTaskDone}
                        />
                    )}
                />
            </View>
        </View>
    );
}

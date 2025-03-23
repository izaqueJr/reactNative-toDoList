import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { IconCheck, IconCheckContainer } from '../Icons';

interface TaskProps {
    text: string;
    id: number;
    done: boolean;
    onRemove: () => void;
    handleTaskDone: (id: number) => void;
}
const Task = ({ text, id, done, handleTaskDone, onRemove }: TaskProps) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => handleTaskDone(id)}
                style={styles.button} >

                {
                    done ? <IconCheck /> : <IconCheckContainer />
                }

            </TouchableOpacity>

            <Text style={done ? styles.textDone : styles.text}> {text} </Text>
            <TouchableOpacity
                onPress={onRemove}
                style={styles.button} >
                <Image source={require('@/assets/images/icons/icon-remove.png')} />
            </TouchableOpacity>
        </View>
    )
}
export default Task;
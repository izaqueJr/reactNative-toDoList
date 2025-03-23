 
import { TextInput, TouchableOpacity, View, FlatList, Alert, Image } from 'react-native';
import { styles } from './styles';
 
interface FormProps {
    taskItem: string;
    setTaskItem: (name: string) => void;
    handleAddTask: () => void;
}

export default function Form({
    taskItem,
    setTaskItem,
    handleAddTask
}:FormProps) {
 
    return (
        <View style={styles.form}>
            <TextInput
                value={taskItem}
                onChangeText={setTaskItem}
                style={styles.input}
                placeholder='Adicione uma nova tarefa'
                placeholderTextColor={"#6b6b6b"}
            />
            <TouchableOpacity
                onPress={() => { handleAddTask() }}
                style={styles.button} >
                 <Image source={require('@/assets/images/icons/icon-add.png')} />
            </TouchableOpacity>
        </View>

    );
}

 
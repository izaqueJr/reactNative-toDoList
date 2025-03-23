
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

export default function Empty() {

    return (
        <View style={styles.empty}>

            <Image style={styles.emptyImage} source={require('@/assets/images/icons/icon-list-empty.png')} />
            <Text style={styles.listEmptyNameTitle}>
                Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.listEmptyText}>
                Crie tarefas e organize seus itens a fazer
            </Text>

        </View>

    );
}


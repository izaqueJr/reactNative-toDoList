import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import Participant from '../../components/Participant';

export default function Home() {
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState<string>('');

    const handleParticipantAdd = () => {
        if (participants.includes(participantName)) {
            Alert.alert('Participante já adicionado', 'Esse participante já foi adicionado a lista de presença');
            return;
        }
        setParticipants(prevState => [...prevState, participantName]);
        setParticipantName('');
        console.log('Adicionando participante');

    }

    const handleParticipantRemove = (name: string) => {
        const newParticipants = participants.filter(participant => participant !== name);
     
        Alert.alert('Remover participante', `Deseja remover o participante "${name}" da lista de presença?`, [
            {
                text: "Não",
                style: "cancel"
            },
            {
                text: "Sim",
                onPress: () => {
                    Alert.alert('Participante removido', `O participante "${name}" foi removido da lista de presença`);
                    setParticipants(newParticipants);
                }
            }
        ]);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title} key="1">Nome do evento</Text>

            <View style={styles.form}>
                <TextInput
                    value={participantName}
                    onChangeText={e => setParticipantName(e)}
                    style={styles.input}
                    placeholder='Nome do Participante'
                    placeholderTextColor={"#6b6b6b"}
                />
                <TouchableOpacity
                    onPress={() => { handleParticipantAdd() }}
                    style={styles.button} >
                    <Text style={styles.buttonText}> + </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={participants}
                keyExtractor={item => item}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <>
                        <Text style={styles.listEmptyName}>
                            Ninguém chegou no evendo ainda? 😢
                        </Text>
                        <Text style={styles.listEmptyName}>
                            Adicione pessoas a sua lista de presença
                        </Text>
                    </>

                }
                renderItem={({ item }) => <Participant name={item} onRemove={() => { handleParticipantRemove(item) }} />}
            />
        </View>
    );
}



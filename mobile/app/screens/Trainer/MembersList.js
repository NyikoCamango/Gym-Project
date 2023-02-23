import React, {useEffect, useState, useCallback} from "react"
import { ScrollView, Pressable } from "native-base"
import { List, Divider } from 'react-native-paper';
import TopBar from "../../components/Topbar";
import { useFocusEffect } from '@react-navigation/native';
import { getUser } from "../../globals/userUtils";
import Moment from 'moment'

const MembersList = ({navigation}) => {

    const [members, setMembers] = useState([])


    const getMembers = async (id) => {
        let url = `https://fetch-your-body.herokuapp.com/public/traineesByTrainerId/${id}`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            },
        });
        
        const {trainees} = await response.json();
        setMembers(trainees);
    }
    useFocusEffect(
        useCallback(() => {
            getUser().then(u => getMembers(u.id))
        }, [])
    )

    return (
        <>
            <TopBar title="Members List" />
            <ScrollView>
                {console.log(members?.[0])}
                <List.Section>
                {members?.map(mem => 
                    <Pressable onPress={() => navigation.navigate({
                        name: 'MemberSchedule',
                        params: {...mem}
                    })}>
                            <List.Item
                                title={mem?.names + ' est: ' + Moment(mem?.goalStart).format('DD MMM YY')}
                                description={'streak:'+ mem?.streak + ' level: ' + mem?.level}
                                left={props => <List.Icon {...props} icon="account-circle"/>}
                                right={props => <List.Icon {...props} icon="chevron-right"/>}
                            />
                    
                    <Divider />
                    </Pressable>)}
                </List.Section>
                
            </ScrollView>
        </>
    )
}

export default MembersList
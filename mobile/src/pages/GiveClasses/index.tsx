import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import giveClassesBGImage from '../../assets/images/give-classes-background.png'

function GiveClasses() {

    const { goBack } = useNavigation();

    function handleNavigateGoBack(){
        goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground resizeMode='contain' source={giveClassesBGImage} style={styles.content}>
                <Text style={styles.title}> Quer ser um Proffy?</Text>
                <Text style={styles.description}> Para começar, você precisa se cadastrar como professor na nossa plataforma WEB</Text>
            </ImageBackground>
            <RectButton style={styles.okButton} onPress={handleNavigateGoBack}>
                <Text style={styles.OkButtonText}>Tudo Bem!</Text>
            </RectButton>
        </View>
    ) 
}

export default GiveClasses;
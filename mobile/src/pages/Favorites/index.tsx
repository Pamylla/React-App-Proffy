import React, { useState, useEffect } from 'react';
import { View, AsyncStorage } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'; 

import styles from './styles'
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

function Favorites(){
    const [favorites, setFavorites] = useState([]);

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
          if (response) {
            const favoritedTeachers = JSON.parse(response);

            setFavorites(favoritedTeachers);
          }
        });
      }

      useFocusEffect( () => {
      loadFavorites();  
    })
      
    return (
        <View  style={styles.container}> 
            <PageHeader title="Meus Proffys Favoritos <3"/>

            <ScrollView 
                style={styles.teacherList}
                contentContainerStyle= {{ paddingHorizontal: 16, paddingBottom: 24}}> 

            {favorites.map((teacher: Teacher) => {
                return (
                    <TeacherItem 
                        key={teacher.id}
                        teacher={teacher}
                        favorited />
                )
            })}
        </ScrollView>
        
        </View>           
    )
}

export default Favorites;
import React, { useEffect, useState } from 'react';
import { IonAvatar, IonItem, IonLabel, IonList, IonListHeader } from '@ionic/react';
import { Preferences } from '@capacitor/preferences';
import { Toast } from '@capacitor/toast';
import CharacterCard from '../CharacterCard/CharacterCard';
const CharactersContainer = () => {
  const [characters,setCharacters] = useState([]);
  useEffect(() => {
    const CheckCache = async () => {
      await Preferences.get({key:'characters'}).then(async (response) => {
        if (response.value && JSON.parse(response.value).length > 0){
          setCharacters(JSON.parse(response.value))
        }else{
          let response = await getData()
          Preferences.set({key:'characters', value:JSON.stringify(response.results)})
          setCharacters(response.results)
          
        }
      })
    }
    CheckCache();
  }, [])
  const getData = async () => {
    try{const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    return data
      }catch(error){
      console.log(error)
      Toast.show({
        text: 'There was an error getting the data',
        duration:"short"
      })
  }}
  const deleteCharacter = async (id) => {
    await Preferences.get({key:'characters'}).then(async (response) => {
      if (response.value){       
        let charactersAux=JSON.parse(response.value)
        const newCharacters = charactersAux.filter((character => character.id !== id))
        setCharacters(newCharacters)
        Preferences.set({key:'characters', value:JSON.stringify(newCharacters)})
        Toast.show({
            text: 'The character was deleted successfully',
            duration:"short"
          })
        }      
    })

  }

  return (
    <IonList>
      {characters.map((character,index) => (
        <CharacterCard 
        character={character} index={index} onDelete={deleteCharacter}/>
      ))}
    </IonList>
  );
}

export default CharactersContainer;
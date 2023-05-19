import React, { useEffect, useState } from 'react';
import { IonAvatar, IonItem, IonLabel, IonList, IonListHeader } from '@ionic/react';
import { Preferences } from '@capacitor/preferences';
import { Toast } from '@capacitor/toast';
import CharacterCard from '../CharacterCard/CharacterCard';
const CharactersContainer = () => {
  const [characters,setCharacters] = useState([]);
  const [getDataStatus, setGetDataStatus] = useState(false);
  useEffect(() => {
    const CheckCache = async () => {
      await Preferences.get({key:'characters'}).then(async (response) => {
        if (response.value && JSON.parse(response.value).length > 0){
          setCharacters(JSON.parse(response.value))
          setGetDataStatus(true)
        }else{
          let response = await getData()
          if (response.info){
            Preferences.set({key:'characters', value:JSON.stringify(response.results)})
            setCharacters(response.results)
        }
      }
      })
    }
    CheckCache();
  }, [])
  const getData = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    if(response.status != 200){
      Toast.show({
        text: 'There was an error getting the data',
        duration:"short"
      })
    }else{
      const data = await response.json();
      setGetDataStatus(true)
      return data

    }      
  }
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
    <>
    {getDataStatus === true ? <IonList>
      {characters.map((character,index) => (
        <IonItem key={index}>
        <CharacterCard 
        character={character} index={index} onDelete={deleteCharacter}/>
        </IonItem>
      ))}
    </IonList> :null}
    
  </>
  );
}

export default CharactersContainer;
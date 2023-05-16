import React, { useEffect } from 'react';
import { IonItem, IonLabel, IonList, IonListHeader } from '@ionic/react';
import { Preferences } from '@capacitor/preferences';
import { Toast } from '@capacitor/toast'
const CharactersContainer = () => {
  // const showHelloToast = async () => {
  //   await Toast.show({
  //     text: 'Hello!',
  //   });
  // };
  // showHelloToast();
  fetch("https://rickandmortyapi.com/api/character/2")
    .then((response) => response.json())  
    .then((dog) => console.log(dog));
  Preferences.get({key:'name'}).then((name) => {
    if(name.value){
      console.log(name.value);
    }else{
      Preferences.set({key:'name', value:'Rick'})
      console.log("Se guardo el nombre")
    }
  })

  return (
    <IonList>
      <IonListHeader>
        <IonLabel>Characters</IonLabel>
      </IonListHeader>
      <IonItem>
        <IonLabel>Pokémon Yellow</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Mega Man X</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>The Legend of Zelda</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Pac-Man</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Super Mario World</IonLabel>
      </IonItem>
    </IonList>
  );
}

export default CharactersContainer;
import React from 'react';
import { IonItem, IonLabel, IonList, IonListHeader } from '@ionic/react';
import { Preferences } from '@capacitor/preferences';
import { Toast } from '@capacitor/toast'
const CharactersContainer = () => {
  const showHelloToast = async () => {
    await Toast.show({
      text: 'Hello!',
    });
  };
  showHelloToast();
  // fetch("https://rickandmortyapi.com/api/character/2")
  //   .then((response) => response.json())  
  //   .then((dog) => console.log(dog));
  // (Preferences.get({key:'name'})).then((value) => {
  //   Toast.show({
  //     text: 'Rick ya se encuentra registrado en la cache',
  //   });
  // },() =>{
  //   Preferences.set({key:'name', value:'Rick'});
  //   Toast.show({
  //     text: 'Se ha registrado a Rick en la cache',
  //   });

  // })
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
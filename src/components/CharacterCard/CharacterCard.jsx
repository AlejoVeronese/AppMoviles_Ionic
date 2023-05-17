import { IonAvatar, IonItem, IonLabel, IonButton, IonModal,IonCard,IonCardHeader,IonCardContent,IonCardTitle, IonButtons, IonAlert} from '@ionic/react';
import {useState} from 'react';
const CharacterCard = ({ character , index, onDelete}) => {
    const [showModal, setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    

return(
    <IonItem key={index}>
        <IonAvatar slot='start'>
          <img src={character.image} alt={character.name}/>
        </IonAvatar>
        <IonLabel>
          <h2>{character.name}</h2>
          <p>{character.species}</p>
          <p>{character.status}</p>
        </IonLabel>
    <IonModal isOpen={showModal}>
        <IonCard>
        <img alt={character.name} src={character.image} height={250}/>
        <IonCardHeader>
        <IonCardTitle>{character.name}</IonCardTitle>
      </IonCardHeader>
        <IonCardContent>
        <p>{character.status}</p>
        <p>{character.species}</p>
        <p>{character.gender}</p>
        <p>{character.origin.name}</p>
        <p>{character.location.name}</p>
        <IonButton fill="clear" onClick={() => setShowModal(false)}>Close</IonButton>
        </IonCardContent>
        </IonCard>
    </IonModal>
    <IonButton expand="block" onClick={() => setShowModal(true)} >Open</IonButton>
    <IonButton id="present-alert" expand="block" color="danger" onClick={()=>setShowAlert(true)}>Delete</IonButton>
    <IonAlert
        isOpen={showAlert}
        header="Alert!"
        message="Are you sure you want to delete this character?"
        buttons ={[
            {text:'Confirm',
             handler:()=>{onDelete(character.id); setShowAlert(false)},
            },
            {text:'Cancel',
             handler:()=>{setShowAlert(false)},
            },
        ]}
        onDidDismiss={() => setShowAlert(false)}>
        
        </IonAlert>

    </IonItem>
    // </IonButton>

)
}

export default CharacterCard;
import { ref } from "vue";

const blocks =ref([{
  title:'Inscriptions',
  content: 'La saison des inscriptions de l’année 2024-2025 se tiendront du 12 au 15 juin! Vous êtes très nombreux à vous (ré)inscrire, une belle récompense pour les enseignants et bénévoles du TSLA. Retrouvez toutes les informations concernant votre inscription dans l’onglet inscriptions& tarifs',
  img: 'data:image/gif;base64,{{Profile.Photo}}',
  ref: '/club/inscriptions'
},{
    title:'Fête du TSLA',
    content:'Le <string>Dimanche 16 Juin 2024, le TSLA fête le tennis !</strong><br/> De 10h à 17h, finale du tournois interne, animations toute la journée, restauration sur place.',
    img:'',
    ref:'/rencontres/annimations'
}]);

function getBlocks(){
    return{
        blocks
    }
}
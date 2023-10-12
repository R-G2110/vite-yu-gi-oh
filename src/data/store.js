import { reactive } from 'vue';


export const store = reactive({
  apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
  cardList: [], 
  cardList2: [
    {
      id: '34541863',
      name: '\"A\" Cell Breeding Device',
      archetype: "Alien",
      card_images: [
        {
          id: '34541863',
          image_url:'https://images.ygoprodeck.com/images/cards/34541863.jpg',
          image_url_small:"https://images.ygoprodeck.com/images/cards_small/34541863.jpg",
          image_url_cropped:"https://images.ygoprodeck.com/images/cards_cropped/34541863.jpg"
        }
      ]
    }
  ]
})
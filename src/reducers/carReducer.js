const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

  export const carReducer = (state = initialState, action) => {
      switch(action.type) {
          case 'BUY_ITEM': 
          console.log(state, action)
            const newFeature = state.additionalFeatures.map(item => item.id === action.payload ? state.car.features.push(item) : item)

            const newPrice = state.car.feature.map(item => state.additionalPrice + item.price)


            return {
                ...state,
                additionalPrice: newPrice,
                car: {
                     ...state.price, ...state.name, ...state.image,
                     features: newFeature
                },
                additionalFeatures: [...state.additionalFeatures]

            }          
    
          default:
              return state;
      }
  }

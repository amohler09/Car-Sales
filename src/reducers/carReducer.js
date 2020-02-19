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
          console.log(state, action, action.payload)
          const newPrice = (state.additionalPrice + action.payload.price)
            
          return {
                ...state,
                additionalPrice: newPrice,
                car: {
                    ...state.car,
                    features: [...state.car.features,
                                action.payload]
                }
            };
        case 'REMOVE_FEATURE':
            console.log(state, action, action.payload)
            const Price = (state.additionalPrice - action.payload.price)
            const filteredFeatures = state.car.features.filter(item => item.id !== action.payload.id)

            return {
                ...state,
                additionalPrice: Price,
                car: {
                    ...state.car,
                    features: filteredFeatures
                }
            }

    
          default:
              return state;
      }
  }

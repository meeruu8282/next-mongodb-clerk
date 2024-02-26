interface dataTypeCard {
  cardId: number;
  title: string;
  description: string;
  features: string[];
}

interface Product {
  title: string;
  price: string;
  productId: string;
}

interface dataTypeSub {
  duration: string;
  products: Product[];
}

export const cardDescription: dataTypeCard[] = [
    {
      cardId: 0,
      title: 'Independent Doctor',
      description: 'Enhanced features for \nindependent doctors.', //"\n" = new line
      features: [
        'Appointment management',
        'Custom branding',
        'Multiple specialty listings',
      ]
    },
    {
      cardId: 1,
      title: 'Clinic',
      description:
        'Perfect for small clinics with more providers and advanced features.',
      features: [
        'Appointment management',
        'Custom branding and clinic profile',
        'EHR integration',
      ]
    },
    {
      cardId: 2,
      title: 'Hospital',
      description:
        'Suitable for small hospitals with limited departments.',
      features: [
        'Appointment management',
        'Provider and department profiles for up to 10 departments',
        'Reporting and analytics',
      ]
    }
]

export const subscription: dataTypeSub[] = [
  {
    duration: 'monthly', //Do not change the duration value
    products: [
      {
        title: 'Independent Doctor',
        price: '$29/month',
        productId: 'price_123stripe1' //Placeholder Stripe productId
      },
      {
        title: 'Clinic',
        price: '$99/month',
        productId: 'price_123stripe2' //Placeholder Stripe productId
      },
      {
        title: 'Hospital',
        price: '$499/month',
        productId: 'price_123stripe3' //Placeholder Stripe productId
      }
    ]
  },
  {
    duration: 'quarterly', //Do not change the duration value
    products: [
      {
        title: 'Independent Doctor',
        price: '$25/month', //Placeholder price
        productId: 'price_123stripe4', //Placeholder Stripe productId
      },
      {
        title: 'Clinic',
        price: '$84/month', //Placeholder price
        productId: 'price_123stripe5' //Placeholder Stripe productId
      },
      {

        title: 'Hospital',
        price: '$424/month', //Placeholder price
        productId: 'price_123stripe6' //Placeholder Stripe productId
      }
    ]
  },
  {
    duration: 'yearly', //Do not change the duration value
    products: [
      {

        title: 'Independent Doctor',
        price: '$23/month', //Placeholder price
        productId: 'price_123stripe7' //Placeholder Stripe productId
      },
      {

        title: 'Clinic',
        price: '$79/month', //Placeholder price
        productId: 'price_123stripe8' //Placeholder Stripe productId
      },
      {

        title: 'Hospital',
        price: '$399/month', //Placeholder price
        productId: 'price_123stripe9' //Placeholder Stripe productId
      }
    ]
  }
];

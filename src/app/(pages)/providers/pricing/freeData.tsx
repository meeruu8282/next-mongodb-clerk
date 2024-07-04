interface dataTypeCard {
    cardId: number;
    title: string;
    description: string;
    features: string[];
  }
  
  interface Product {
    title: string;
    text: string;
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
        description: 'Perfect for independent and sole physician.', //"\n" = new line
        features: [
          'Fast appointment booking and payment',
          'Unlimited Video and In-person consultation',
          'Fully Intergrated EHR',
          'Digital Rx and Diagnostics',
          '24/7 Data Insight & Patient Management',
          'Single doctor',
  
        ]
      },
      {
        cardId: 1,
        title: 'Clinic',
        description:
          'Perfect for Small Clinics',
        features: [
          'Fast appointment booking and payment',
          'Unlimited Video and In-person consultation',
          'Fully Intergrated EHR',
          'Digital Rx and Diagnostics',
          '24/7 Data Insight & Patient Management',
          'Max 10 doctors',
        ]
      },
      {
        cardId: 2,
        title: 'Hospital',
        description:
          'Ideal for Small Hospitals with Mutiple Locations.',
        features: [
          'Fast appointment booking and payment',
          'Unlimited Video and In-person consultation',
          'Fully Intergrated EHR',
          'Digital Rx and Diagnostics',
          '24/7 Data Insight & Patient Management',
          'More than 10 doctors',
        ]
      }
  ]
  
  export const subscription: dataTypeSub[] = [
    {
      duration: 'monthly', //Do not change the duration value
      products: [
        {
          title: 'Independent Doctor',
          text: '$10,49 per doctor/mon 15% fee per consultation',
          price: 'First 90 Days $0per doctor/month and 16% fee per consultation',
          productId: 'price_123stripe1' //Placeholder Stripe productId
        },
        {
          title: 'Clinic',
          text: '$8,69 per doctor/mon 15% fee per consultation',
          price: 'First 90 Days $0per doctor/month and 16% fee per consultation',
          productId: 'price_123stripe2' //Placeholder Stripe productId
        },
        {
          title: 'Hospital',
          text: '$6,90 per doctor/mon 15% fee per consultation',
          price: 'First 90 Days $0per doctor/month and 16% fee per consultation',
          productId: 'price_123stripe3' //Placeholder Stripe productId
        }
      ]
    },
    {
      duration: 'quarterly', //Do not change the duration value
      products: [
        {
          title: 'Independent Doctor',
          text: '$26,75 per doctor/mon 15% fee per consultation',
          price: 'First 90 Days $0per doctor/month and 16% fee per consultation', //Placeholder price
          productId: 'price_123stripe4', //Placeholder Stripe productId
        },
        {
          title: 'Clinic',
          text: '$22,16 per doctor/mon 15% fee per consultation',
          price: 'First 90 Days $0per doctor/month and 16% fee per consultation', //Placeholder price
          productId: 'price_123stripe5' //Placeholder Stripe productId
        },
        {
  
          title: 'Hospital',
          text: '$17,60 per doctor/mon 15% fee per consultation',
          price: 'First 90 Days $0per doctor/month and 16% fee per consultation', //Placeholder price
          productId: 'price_123stripe6' //Placeholder Stripe productId
        }
      ]
    },
    {
      duration: 'yearly', //Do not change the duration value
      products: [
        {
  
          title: 'Independent Doctor',
          text: '$94,41 per doctor/mon 15% fee per consultation',
          price: 'First 90 Days $0per doctor/month and 16% fee per consultation', //Placeholder price
          productId: 'price_123stripe7' //Placeholder Stripe productId
        },
        {
  
          title: 'Clinic',
          text: '$78,21 per doctor/mon 15% fee per consultation',
          price: 'First 90 Days $0per doctor/month and 16% fee per consultation', //Placeholder price
          productId: 'price_123stripe8' //Placeholder Stripe productId
        },
        {
  
          title: 'Hospital',
          text: '$62,10 per doctor/mon 15% fee per consultation',
          price: 'First 90 Days $0per doctor/month and 16% fee per consultation', //Placeholder price
          productId: 'price_123stripe9' //Placeholder Stripe productId
        }
      ]
    }
  ];
  
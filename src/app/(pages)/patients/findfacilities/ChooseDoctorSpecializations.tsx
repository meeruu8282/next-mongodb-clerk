import React from 'react';
import style from './findfacilities.module.css';
import SmallImageCard from '../components/SmallImageCard';

const doctorSpCards = [
  {
    text: 'Obstetrician &\n Gynecologist',
    image: '/womanAndDoctor.jpg',
    altText: 'Obstetrician and Gynecologist',
    link: '/#'
  },
  {
    text: 'Primary\n Care',
    image: '/patientInHospitalBed.jpg',
    altText: 'Primary care',
    link: '/#'
  },
  {
    text: 'Pediatrician',
    image: '/pediatrician.jpg',
    altText: 'Pediatrician',
    link: '/#'
  },
  {
    text: 'Dermatologist',
    image: '/dermatologist.jpg',
    altText: 'Dermatologist',
    link: '/#'
  },
  {
    text: 'Ophthalmologist',
    image: '/ophthalmologist.jpg',
    altText: 'Ophthalmologist',
    link: '/#'
  },
  {
    text: 'Otolaryngologist',
    image: '/otolaryngologist.jpg',
    altText: 'Otolaryngologist',
    link: '/#'
  },
  {
    text: 'Psychologist',
    image: '/psychologist.jpg',
    altText: 'Psychologist',
    link: '/#'
  },
  {
    text: 'Pulmonologist',
    image: '/pulmonologist.jpg',
    altText: 'Pulmonologist',
    link: '/#'
  }
]

interface ChooseDoctorSpecializationsProps {
  title?: string;
}

const ChooseDoctorSpecializations: React.FC<ChooseDoctorSpecializationsProps> = ({
  title
}) => {
  return (

    <div className="w-full flex justify-center items-center flex-col">
      <h1 className={`${style.chooseDocSpecTitle} text-2xl font-semibold tracking-[-0.02em] leading-[2.4rem] self-start`}>
        {title}
      </h1>

      <div className={`${style.cardsContainer} w-full grid grid-cols-4 gap-6 mt-6`}>
        {doctorSpCards.map((data, id) => (
          <div key={id} className={`${style.cardsContent} h-[215px] max-w-[300px]
          group overflow-hidden rounded-[25px]`}>
            <SmallImageCard
              image={data.image}
              cardText={data.text}
              altImage={data.altText}
              cardLink={data.link}
            />
          </div>
        ))}
      </div>

    </div>
  )
}

export default ChooseDoctorSpecializations

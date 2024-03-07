import React from 'react'
import Hovertextbox from '../../providers/platforms/labCenters/hovertextbox'

interface UseCarelyoRightNowProps {
  header: string
  paragraph: string
  image: string

  header01: string
  paragraph01: string
  header02: string
  paragraph02: string
  header03: string
  paragraph03: string
  header04: string
  paragraph04: string
}

const UseCarelyoRightNow = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-normal">
        Use <span className=" font-extrabold">Carelyo</span> right now
      </h2>
      <p className="text-center font-light max-w-xl mx-auto mt-5">
        Here's a step-by-step guide on how to utilize our services, including telemedicine,
        electronic health records (EHRs), and our streamlined workflow
      </p>
      <div className="w-full lg:flex-row flex-col flex gap-6 mt-6">
        <div className="image-container w-full lg:w-1/2 flex justify-center items-center">
          <img src="/girlWithMask.png" alt="?" />
        </div>
        <div className="button-container w-full lg:w-1/2">
          <div className="flex flex-col">
            <Hovertextbox
              header01="01. Find a Provider Near You"
              paragraph01="For your first medical help, find a nearby provider. Search online or use healthcare apps to locate options nearby."
            />
            <Hovertextbox
              header01="02. Register with the Provider"
              paragraph01="After choosing a provider, sign up. This typically includes sharing your basic and insurance info if available."
            />
            <Hovertextbox
              header01="03. Book a Visit"
              paragraph01="Decide whether you want to talk to a doctor through a video call (telemedicine) or meet them in person. Schedule your chosen type of visit with the provider."
            />
            <Hovertextbox
              header01="04. Access Medical Records"
              paragraph01="After the visit, you can often see your medical records online. This lets you check your past appointments, test results, and treatment details from anywhere you have internet access."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UseCarelyoRightNow

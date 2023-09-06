import CheckboxItem from "../Components/checkboxItem";
import CarelyoButton from "../Components/getStartedButton";
import CustomContentBox from "../Components/customContentBox";
export default function Pricing() {
  return (
    <div className=" justify-center items-center ">
      <div className="bg-blue-500 flex  justify-center">
        <div className="w-[921px] h-[108px] flex text-center ">
          <div className=" flex-row w-[838px] h-[52px] font-[Poppins] ">
            <div className=" text-center text-3xl">
              <h1 className=" justify-end font-semibold inline-block bg-yellow-500">
                Choose Your Plan
              </h1>
            </div>
            <div className="w-[921px] h-[32px] opacity-50 ">
              <p className="font-[Poppins] font-normal inline-block mt-4">
                Choose the plan that suits your needs and subscribe to the
                Carelyo platform
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="  flex   w-[1190px] h-[463px]">
        <CustomContentBox
          title="Independent Doctor"
          monthlyCost="$29/month"
          descriptionLines={["Enhanced features for", "independent doctors."]}
          features={[
            "Appointment management",
            "Custom branding",
            "Multiple specialty listings",
          ]}
          buttonText="Get Started"
        />
        <CustomContentBox
          title="Clinic"
          monthlyCost="$99/month"
          descriptionLines={[
            "Perfect for small clinics with a more providers and advanced features.",
          ]}
          features={[
            "Appointment management",
            "Custom branding",
            "Multiple specialty listings",
          ]}
          buttonText="Get Started"
        />

        <CustomContentBox
          title="Hospital"
          monthlyCost="$29/month"
          descriptionLines={["Enhanced features for", "independent doctors."]}
          features={[
            "Appointment management",
            "Custom branding and clinic profile",
            "EHR integration",
          ]}
          buttonText="Get Started"
        />
      </div>
    </div>
  );
}

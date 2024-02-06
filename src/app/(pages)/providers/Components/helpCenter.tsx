import HelpCard from "./helpCard";

export default function () {
  return (
    <div className="relative flex w-[95%] lg:w-[90%] flex-wrap justify-center lg:justify-between">
      <div className="w-[70%] mt-6 md:mt-12 md:mb-2 mb-20 text-center md:text-left md:w-[90%]">
        <h1 className="text-[Poppins] text-[32px] md:text-[24px] leading-[29px] tracking-[0em] left-0 font-semibold mt-5">Help Center</h1>
        <p className="h-[22px] text-[Poppins] text-[19px] md:text-[16px] leading-[22px] tracking-[0em] left-0 text-[#9C9C9C] mt-6">At Carelyo, we are committed to providing you with the guidance and technical support you need.</p>
      </div>
      <HelpCard
        icon={"/helpCardImg.png"}
        header={"Getting Started"}
        paragraph={
          `If you're new to Carelyo, our "Getting Started" section is designed to help you kickstart your journey.`
        } />
      <HelpCard
        icon={"/helpCardImg.png"}
        header={"User Guides"}
        paragraph={
          "If you're looking for step-by-step instructions on using our platform, our user guides are here to assist you."
        } />
      <HelpCard
        icon={"/helpCardImg.png"}
        header={"Account Settings"}
        paragraph={
          "To ensure that you have complete control, we offer a dedicated section for managing your account settings."
        } />
      <HelpCard
        icon={"/helpCardImg.png"}
        header={"FAQ"}
        paragraph={
          "Our FAQs cover a wide range of topics, from general platform usage to specific features and functionalities."
        } />
      <HelpCard
        icon={"/helpCardImg.png"}
        header={"Trust and Safety"}
        paragraph={
          "We want you to have peace of mind while using Carelyo, knowing that your personal information is safeguarded."
        } />
      <HelpCard
        icon={"/helpCardImg.png"}
        header={"Live and Chat Support"}
        paragraph={
          "For real-time assistance, our live chat support is available to any urgent questions or concerns you may have."
        } />
    </div>
  )
}
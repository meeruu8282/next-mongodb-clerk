import HelpCard from "./helpCard";

export default function () {
    return (
        <div className="relative flex w-[1258px] flex-wrap">
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
             }/>
            <HelpCard 
             icon={"/helpCardImg.png"}
             header={"Account Settings"}
             paragraph={
               "To ensure that you have complete control, we offer a dedicated section for managing your account settings."
             }/>
              <HelpCard 
             icon={"/helpCardImg.png"}
             header={"FAQ"}
             paragraph={
               "Our FAQs cover a wide range of topics, from general platform usage to specific features and functionalities."
             }/>
             <HelpCard 
             icon={"/helpCardImg.png"}
             header={"Trust and Safety"}
             paragraph={
               "We want you to have peace of mind while using Carelyo, knowing that your personal information is safeguarded."
             }/>
             <HelpCard 
             icon={"/helpCardImg.png"}
             header={"Live and Chat Support"}
             paragraph={
               "For real-time assistance, our live chat support is available to any urgent questions or concerns you may have."
             }/>

        </div>
    )
}
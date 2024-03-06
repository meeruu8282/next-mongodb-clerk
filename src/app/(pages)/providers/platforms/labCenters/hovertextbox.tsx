import style from "../../platforms/labCenters/labCenter.module.css"

interface HovertextboxProps {
  header01: string
  paragraph01: string
}

const Hovertextbox: React.FC<HovertextboxProps> = ({
  header01,
  paragraph01,
}) => {
  return (
    <div className="group">
      <div className={`${style.hoverboxMain} flex flex-col justify-center
      items-center min-w-[120px] max-w-[660px] rounded-[25px] px-9 py-8
      group-hover:bg-[#fafafa] group-hover:outline group-hover:outline-[2px]
      group-hover:outline-sage group-hover:shadow-[10px_25px_85px_-10px_rgba(69,172,97,0.14)]`}>

        <div className="w-fit flex flex-col gap-4">
          <h1 className={`${style.hoverboxHeader} font-poppins text-2xl
          font-semibold leading-8 text-left`}>
            {header01}
          </h1>

          <p className={`${style.hoverboxParagraph} font-poppins leading-7
          tracking-tight text-left opacity-50`}>
            {paragraph01}
          </p>
        </div>

      </div>
      {/* Green line under the box */}
      <div className="w-[77%] ml-10 border-[1px] border-sage max-h-[4px]
      group-hover:border-transparent">
      </div>
    </div>
  )
}

export default Hovertextbox

import style from './svgarrow.module.css'

const MySVGComponent = ({ reverse }) => {
  // Bestämmer om scale-x-[-1] ska läggas till baserat på värdet av flipX
  const scaleXClass = reverse ? 'scale-x-[-1]' : '';

    return (
      <div className={scaleXClass}>
           <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className=" group hover:cursor-pointer"  >
        <rect width="44" height="44" rx="22" transform="matrix(-1 0 0 1 44 0)"  className=" flex flex-row-reverse fill-current group-hover:text-sage text-[#E7E7E9] arrowbackgound" />
        <g clipPath="url(#clip0_375_1438)">
          <path d="M26.62 31.0098C26.13 31.4998 25.34 31.4998 24.85 31.0098L16.54 22.6998C16.15 22.3098 16.15 21.6798 16.54 21.2898L24.85 12.9798C25.34 12.4898 26.13 12.4898 26.62 12.9798C27.11 13.4698 27.11 14.2598 26.62 14.7498L19.38 21.9998L26.63 29.2498C27.11 29.7298 27.11 30.5298 26.62 31.0098Z"  className="    fill-current group-hover:text-white text-[#181818] " />
        </g>
        <defs>
          <clipPath id="clip0_375_1438">
            <rect width="24" height="24"  transform="matrix(-1 0 0 1 34 10)" />
          </clipPath>
        </defs>
      </svg>
      </div>
   
    );
  }
  
  export default MySVGComponent;
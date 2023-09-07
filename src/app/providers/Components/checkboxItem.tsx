const CheckboxItem: React.FC = () => {
  return (
    <div className="w-[333.98] h-[24px] ">
      <div className="flex">
        <div className="w-[24px] h-[24px] border-[2px] rounded-lg border-[#45AC60] text-[#45AC60] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CheckboxItem;

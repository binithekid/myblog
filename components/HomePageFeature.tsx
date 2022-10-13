import React from "react";
import sunshine from "../public/sunshine.jpeg";

const HomePageFeature = () => {
  return (
    <div className='flex flex-row w-full mb-8 gap-2 bg-white shadow-sm rounded-lg p-8'>
      <div className='w-1/2 '>
        <img src={sunshine.src} className='shadow-sm' />
      </div>
      <div className='w-1/2'>
        <h1 className='font-bold text-4xl text-gray font-inter mb-3 ml-2'>
          Do not be foolish
        </h1>
        <p className='ml-2 font-light text-lg text-gray-700'>
          Ms Veasey, who represented herself, said video evidence showed 27
          people in her home but maintained it was not a party. She admitted she
          was in the wrong for inviting people from outside her household to the
          property, which she shared with seven other people. She added she
          would have paid a smaller fine but felt the £10,000 fine was unjust.
          "It seems like a bit of a con. They're trying to pull money out of
          people, pushing people through court cases," she said. "I think it's a
          large waste of time. I've had numerous court cases, and they probably
          spent more on these court cases out of the taxpayers' money than the
          fine would have been in the first place." She felt the CPS hoped
          people would be "scared" and pay the fines rather than try to fight
          it, she added.
        </p>
        <button className='rounded-lg ml-2 mt-5 px-8 py-3 shadow-sm transition duration-500 transform hover:-translate-y-1 hover:shadow-lg inline-block border'>
          Read More
        </button>
      </div>
    </div>
  );
};

export default HomePageFeature;

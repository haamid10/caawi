import React from 'react'

const AboutUs = () => {
  return (
    <div className= " mt-12 mb-12 ">

        <h1 className="font-bold text-4xl text-center mb-32">About US</h1>
        <div className= "w-full flex flex-row-reverse md:flex-col gap-2 text-center px-6 ">

            <p className=" flex flex-col text-start mt-12  text-md md:text-sm font-semibold  ">
               <h3 className=" text-center mb-12 text-4xl text-teal-300">vision</h3>          
                The contents of Lorem Ipsum app do not constitute advice and should not
               be relied upon in making or refraining from making, any decision. All
               material contained on Lorem Ipsum is provided without any or warranty of
               any kind. You use the material on Lorem Ipsum at your own discretion
            </p>
          <img className="w-[35rem] p-8 md:p-2 rounded-lg" src="./volunter2.jpg" alt="" />

        </div>

        {/* card one */}

        <div className= "w-full flex flex-row md:flex-col gap-2 text-center px-6 mt-12">

          <p className=" flex flex-col text-start mt-12 md:text-sm text-md font-semibold  ">
          <h3 className=" text-center mb-12 text-4xl text-teal-300">Mission</h3>          
          The contents of Lorem Ipsum app do not constitute advice and should not
          be relied upon in making or refraining from making, any decision. All
          material contained on Lorem Ipsum is provided without any or warranty of
          any kind. You use the material on Lorem Ipsum at your own discretion
          </p>
          <img className="w-[35rem] p-8 md:p-2 rounded-lg" src="./volunter2.jpg" alt="" />

      </div>
      {/* card two */}

      <div className= "w-full flex flex-row-reverse  md:flex-col gap-2 text-center px-6 mt-12">

          <p className=" flex flex-col text-start mt-12 md:text-sm text-md font-semibold  ">
            <h3 className=" text-center mb-12 text-4xl text-teal-300">value</h3>          
            The contents of Lorem Ipsum app do not constitute advice and should not
            be relied upon in making or refraining from making, any decision. All
            material contained on Lorem Ipsum is provided without any or warranty of
            any kind. You use the material on Lorem Ipsum at your own discretion
          </p>
        <img className="w-[35rem] p-8 md:p-2 rounded-lg" src="./volunter2.jpg" alt="" />

      </div>
      {/* card three */}

  </div>


      
    
  )
}

export default AboutUs

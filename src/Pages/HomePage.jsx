import React from "react";
import Images from "../assets/Images";
import { useQuery } from "react-query";
import { Advice } from "../Services";

function HomePage() {
  const { data, refetch } = useQuery({
    queryKey: "advice",
    queryFn: () => Advice(),

    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleAdvice = () => {
    refetch();
  };

  return (
    <section className="bg-DarkGrayishBlue max-w-sm h-full mx-4 my-14 rounded-xl md:mx-auto">
      <div className="flex flex-col items-center justify-center h-full ">
        <h1 className="text-base text-NeonGreen font-mono tracking-widest mt-10">
          ADVICE #{data?.slip?.id}
        </h1>
        <p className=" font-Manrope text-lg text-white text-center mx-6 mt-7">
          {data?.slip?.advice}
        </p>

        <img src={Images.PDMobile} alt="mobile" className="mt-10" />

        {/* rounded button with in dice */}
        {/* <div className="flex flex-row items-center justify-center mt-10 -mb-7 hover:shadow-lg hover:shadow-NeonGreen "> */}
        {/* </div> */}
        <button
          onClick={handleAdvice}
          className="flex flex-row mt-10 -mb-7 items-center justify-center bg-NeonGreen rounded-full h-16 w-16 hover:shadow-2xl hover:shadow-NeonGreen"
        >
          <img src={Images.IconDice} alt="dice" className="h-7 w-7" />
        </button>
      </div>
    </section>
  );
}

export default HomePage;

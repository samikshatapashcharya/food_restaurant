import React from "react";

const Delivery = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h3 className="text-orange-500  font-bold text-2xl text-center">
        Quick Delivery App
      </h3>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[550px] mx-auto my-4"
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">Get The App</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Limitless Convenience on-demand
          </h1>
          <p>
            Experience limitless convenience on-demand with our food delivery
            service! Indulge in the luxury of having your favorite meals
            delivered straight to your doorstep whenever you desire. Our
            seamless and efficient platform ensures that delicious,
            restaurant-quality food is just a few clicks away. Enjoy the freedom
            to savor a diverse array of cuisines without leaving the comfort of
            your home. With our commitment to prompt and hassle-free deliveries,
            we redefine convenience, making your dining experience effortlessly
            delightful. Elevate your culinary journey with our on-demand food
            delivery—because great meals should be enjoyed on your terms.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            {" "}
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;

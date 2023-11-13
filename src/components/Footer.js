import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full m-auto px-4 py-2 bg-[#24262b]">
      <div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h1 className="w-full text-3xl font-bold text-orange-500">
            FlavorFusion
          </h1>
          <p>
            Welcome to FlavorFusion, where culinary creativity meets exquisite
            taste! Immerse yourself in a culinary adventure that transcends
            borders and blends flavors from around the world. Our restaurant is
            a haven for food enthusiasts seeking a symphony of tastes and
            textures. From bold and spicy to subtle and savory, our chefs
            artfully craft dishes that ignite the senses. At FlavorFusion, every
            meal is a celebration of diverse global cuisines harmoniously
            brought together on one menu. Whether you crave the zesty notes of
            Asian stir-fries, the comforting warmth of Mediterranean classics,
            or the bold spices of Latin American favorites, we have something to
            tantalize every palate.
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare className="cursor-pointer" size={30} />
            <FaInstagram className="cursor-pointer" size={30} />
            <FaTwitterSquare className="cursor-pointer" size={30} />
            <FaGithubSquare className="cursor-pointer" size={30} />
            <FaDribbbleSquare className="cursor-pointer" size={30} />
          </div>
        </div>

        <div className="lg:col-span-2 flex justify-between mt-6 ml-72">
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Our Menu</h6>
            <ul>
              <li className="py-2 text-sm">Biryani</li>
              <li className="py-2 text-sm">Chicken</li>
              <li className="py-2 text-sm">Pasta</li>
              <li className="py-2 text-sm">Burger</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Quick Links</h6>
            <ul>
              <li className="py-2 text-sm">About Us</li>
              <li className="py-2 text-sm">Contact Us</li>
              <li className="py-2 text-sm">Menu</li>
              <li className="py-2 text-sm">Order</li>
              <li className="py-2 text-sm">Services</li>

            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 text-sm">New York</li>
              <li className="py-2 text-sm">USA</li>
              <li className="py-2 text-sm">India</li>
              <li className="py-2 text-sm">Canada</li>
            </ul>
          </div>


         
        </div>
      -

        <div className="text-center pl-20 pr-20 mt-5">
        <p className='text-center'>Copyright &copy; 2023. All Rights Reserved.</p>
      </div>

      
      </div>
    </div>
  );
};

export default Footer;

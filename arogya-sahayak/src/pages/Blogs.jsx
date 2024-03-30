import React from "react";
import Blog1 from "../images/post_1.webp";
import Blog2 from "../images/post_2.webp";
import Blog3 from "../images/post_3.webp";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";

const Blogs = () => {
  return (
    <div className="mt-10">
      <div>
        <h2 className="text-3xl text-blue-800 font-semibold text-center">
          BLOG POSTS
        </h2>
        <h1 className="text-5xl font-bold text-center mt-2">Latest Updates</h1>

        <div className="mt-[70px] flex flex-wrap gap-4 justify-center">
          <div className="border shadow-md  shadow-blue-100 h-[470px] w-[350px] rounded-2xl hover:-mt-6 transition-all duration-300 ease-in-out ">
            <img
              src={Blog1}
              className="h-[230px] w-[350px] rounded-2xl items-center"
              alt="Blog Post 1"
            />
            <div className="mt-6 ml-8">
              <p className="text-md font-semibold text-gray-500 text-start">
                March 16, 2024
              </p>
              <div className="flex flex-row gap-3 -mt-8 ml-40">
                <FaInstagram className="border rounded-full h-[35px] w-[35px] p-2 text-blue-500 border-blue-500" />
                <TiSocialFacebook className=" border rounded-full h-[35px] w-[35px] p-2 text-blue-500 border-blue-500" />
                <FaXTwitter className="border rounded-full h-[35px] w-[35px] p-2 text-blue-500 border-blue-500" />
              </div>
              <p className="text-2xl font-semibold mt-4">
                The Benefits of Mindfulness Meditation for Stress and Anxiety
              </p>
              <p className="mt-4 text-md font-semibold text-gray-600">
                Learn More
              </p>
            </div>
          </div>

          <div className="border shadow-md  shadow-blue-100 h-[470px] w-[350px] rounded-2xl hover:-mt-6 transition-all duration-300 ease-in-out">
            <img
              src={Blog2}
              className="h-[230px] w-[350px] rounded-2xl items-center"
              alt="Blog Post 2"
            />
            <div className="mt-6 ml-8">
              <p className="text-md font-semibold text-gray-500 text-start">
                March 16, 2024
              </p>
              <div className="flex flex-row gap-3 -mt-8 ml-40">
                <FaInstagram className=" border rounded-full h-[35px] w-[35px] p-2 text-blue-500 border-blue-500" />
                <TiSocialFacebook className=" border rounded-full h-[35px] w-[35px] p-2 text-blue-500 border-blue-500" />
                <FaXTwitter className=" border rounded-full h-[35px] w-[35px] p-2 text-blue-500 border-blue-500" />
              </div>
              <p className="text-2xl font-semibold mt-4">
                The Benefits of Mindfulness Meditation for Stress and Anxiety
              </p>
              <p className="mt-4 text-md font-semibold text-gray-600">
                Learn More
              </p>
            </div>
          </div>

          <div className="border shadow-md   shadow-blue-100 h-[470px] w-[350px] rounded-2xl hover:-mt-6 transition-all duration-300 ease-in-out">
            <img
              src={Blog3}
              className="h-[230px] w-[350px] rounded-2xl items-center"
              alt="Blog Post 3"
            />
            <div className="mt-6 ml-8">
              <p className="text-md font-semibold text-gray-500 text-start">
                March 16, 2024
              </p>
              <div className="flex flex-row gap-3 -mt-8 ml-40">
                <FaInstagram className="border rounded-full h-[35px] w-[35px] p-2 text-blue-500 border-blue-500" />
                <TiSocialFacebook className="border rounded-full h-[35px] w-[35px] p-2 text-blue-500 border-blue-500" />
                <FaXTwitter className="border rounded-full h-[35px] w-[35px] p-2 text-blue-500 border-blue-500" />
              </div>
              <p className="text-2xl font-semibold mt-4">
                The Benefits of Mindfulness Meditation for Stress and Anxiety
              </p>
              <p className="mt-4 text-md font-semibold text-gray-600">
                Learn More
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

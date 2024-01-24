import React from "react";
import { Link, useNavigate } from "react-router-dom";

//arrow back icon
import { IoArrowBackCircle } from "react-icons/io5";

//add icon
import { IoIosAddCircle, IoIosSave } from "react-icons/io";

//save icon
import { TfiSave } from "react-icons/tfi";

//import img for vid link and file link
import vidUpload from "../../assets/vidUpload.svg";
import quizLink from "../../assets/quizLink.svg";
import Footer from "../Footer";

const AddTopicTitlePage = () => {
  //use navigate to back
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="flex">
        {/* sidebar */}
        <div className="h-[100vh] flex flex-col items-center lg:w-[250px] 2xl:w-[375px] bg-[#126912]">
          <div
            className="flex items-center mt-3 cursor-pointer "
            onClick={goBack}>
            <span className="text-[2.5rem] text-white ">
              <IoArrowBackCircle />
            </span>
            <span className="text-[1rem] pl-1 text-white">Back</span>
          </div>
          <div className="hidden lg:flex lg:border-b lg:border-white w-[90%] "></div>
          <div>
            <p className="text-white w-[3vw] text-center py-10">HTML & CSS</p>
          </div>
          <div>
            <p className="py-2 text-white">Topic 1: Title</p>
          </div>
          <div>
            <p className="py-2 text-white">Topic 2: Title</p>
          </div>
          <div>
            <p className="py-2 text-white">Topic 3: Title</p>
          </div>
          <div className="flex items-center justify-center mt-10 cursor-pointer">
            <div className="text-white text-[2rem] pr-2">
              <IoIosAddCircle />
            </div>
            <span className="text-white">Add New Topic</span>
          </div>
        </div>
        {/* add topic title */}
        <div className="h-[100vh] w-full pt-2 ">
          <div className="flex items-center justify-end w-full ">
            <Link to="/displaytopic">
              <div className="flex items-center gap-2 pr-5 cursor-pointer">
                <div className="text-[#126912] text-[1.5rem]">
                  <span class="text-[#126912] font-semibold"></span>
                  <IoIosSave />
                </div>
                <span className="text-[#126912] font-semibold"></span>
              </div>
            </Link>
          </div>
          <div className="w-[90%] m-auto">
            <span className="lg:text-[2rem] 2xl:text-[48px] font-semibold">
              Course Title
            </span>
            <div className="flex items-center ">
              <span className="lg:text-[1.5rem] 2xl:text-[36px] pr-2">
                Chapter Title:
              </span>
              <input
                type="text"
                name=""
                id=""
                placeholder="Add Topic Title"
                className="bg-[#BCE8B1] rounded-lg placeholder:text-[#626262] placeholder:pl-2 outline-none pl-2"
              />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Add Topic Description"
              className="bg-[#BCE8B1] resize-none  lg:min-w-[100%] 2xl:h-[264px] lg:h-[25vh] placeholder:font-bold placeholder:text-center placeholder:py-16
              outline-none pl-3 pt-3 rounded-lg placeholder:text-[#070101] placeholder:text-opacity-[55%] mt-5"
            />
          </div>
          <div className="flex w-[90%] m-auto items-center justify-center lg:gap-x-[5rem] lg:mt-[3rem]">
            <div className="relative 2xl:w-[491px] 2xl:h-[282px] lg:w-[20vw] lg:h-[20vh] bg-[#126912] rounded-lg flex items-center justify-center cursor-pointer">
              <img
                src={vidUpload}
                alt=""
                className="lg:w-[3rem] 2xl:w-[84px] 2xl:h-[87px]"
              />
              {/* rotation line not responsive */}
              {/* <div className="lg:rotate-[25.9deg] 2xl:rotate-[29.34deg] lg:w-[20.5rem] 2xl:w-[100%] bg-black h-[.004rem] absolute"></div>
              <div className="lg:rotate-[-25.9deg] 2xl:rotate-[29.34deg] lg:w-[20.5rem] 2xl:w-[100%] bg-black h-[.004rem] absolute"></div> */}
            </div>
            <div className=" relative 2xl:w-[491px] 2xl:h-[282px] lg:w-[20vw] lg:h-[20vh] bg-[#126912] rounded-lg flex items-center justify-center cursor-pointer">
              <img
                src={quizLink}
                alt=""
                className="lg:w-[3rem] 2xl:w-[84px] 2xl:h-[87px]"
              />
              {/* rotation line not responsive */}
              {/* <div className="lg:rotate-[25.9deg] 2xl:rotate-[29.34deg] lg:w-[20.5rem] 2xl:w-[100%] bg-black h-[.004rem] absolute"></div>
              <div className="lg:rotate-[-25.9deg] 2xl:rotate-[29.34deg] lg:w-[20.5rem] 2xl:w-[100%] bg-black h-[.004rem] absolute"></div> */}
            </div>
          </div>
          <div className="mt-5">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTopicTitlePage;
// 1/19/204

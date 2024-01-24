import React, { useContext, useState } from "react";

//import mock data json file
import data from "../../mockData/MockData.json";
import Footer from "../Footer";
import DashboardCardHover from "./DashBoardCardHover";
import { DashBoardContext } from "../context/DashBoardContext";

const DashboardCard = () => {
  // *NOTE
  //if data is coming from db use useState hook to store the data
  //sample: const [courses, setCourses] = useState([])

  //*NOTE
  //use GET function of axios and use useEffect hook
  /*sample: useEffect(() => {
  loadCourses();

  }, []);
  
    const loadCourses = async () => {
    const result = await axios.get("http://localhost:8080/courses");
    setCourses(result.data);
    }
    */

  //after getting the data display it using map
  //get your react hook where you store the data coming from db
  //sample: courses.map((course, idx) {return(your code here)});

  //*NOTE
  //for now I'll be displaying a data coming from a json format file
  //destructure the data
  const { courses } = data;

  //react hook for dashboardhover
  const { dashBoardHover, setDashBoardHover } = useContext(DashBoardContext);

  return (
    <div className="w-full h-[100vh] relative">
      {/* change bg color to provided img */}

      {/* 1/18/204 bg height 323px */}
      <div className="xl:h-[323px] relative flex flex-col items-center justify-center w-full py-10 bg-[url('https://img.freepik.com/fotos-premium/acuarela-abstracta-verde-textura-papel-blanco_7190-1311.jpg?w=996')] bg-cover shadow-lg lg:py-5">
        <p className="text-[1.8rem] lg:text-[2rem] font-bold text-white w-[80%] text-center xl:text-[3.5rem] 2xl:text-[64px] ">
          月伝で自分のやり方を学びましょう。
        </p>

        <p className="xl:text-[3rem] 2xl:text-[64px] italic lg:text-[1.7rem] font-bold text-[#67836B]  pb-10 lg:pb-15">
          Learn your way at Tsukiden.
        </p>


      </div>
      <div
        className=" xl:h-[330px] 2xl:w-[1519px] flex flex-col lg:flex-row lg:w-[90vw] 
      lg:m-auto lg:justify-center lg:mt-[4rem] items-center gap-5 mt-2 ">
        {courses.map((course, idx) => {
          return (
            // 1/11/2024

            <div
              key={idx}
              className="w-[95%] lg:w-[17vw] shadow-md rounded-sm xl:w-[271px] xl:h-[330px] bg-[#87D275] ">
              <div className="bg-[#BCE8B1] flex flex-col rounded-t-sm p-5 lg:h-[35%] justify-center">
                <p className="text-[#278510]">{course.courseNum}:</p>
                <p className="text-[#278510] font-bold xl:text-[1.1rem]  line-clamp-1">
                  {course.courseTitle}
                </p>
              </div>
              <div className="p-5 text-justify rounded-b-sm ">
                <p className=" line-clamp-4 xl:line-clamp-6">
                  {course.description}
                </p>
                <button
                  className="text-[#1E6C0B] pt-3 font-bold"
                  onClick={() => setDashBoardHover((prev) => !prev)}>
                  See more
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-10">
        <Footer />
      </div>

      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-[45%] left-1/2">
        {dashBoardHover && <DashboardCardHover />}
      </div>
    </div>
  );
};

export default DashboardCard;
// 1/12/2024

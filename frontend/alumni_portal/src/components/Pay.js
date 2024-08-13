import React from "react";
import pic from "./images/pay.jpg";
const Pay = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-10/12 flex  flex-row justify-center m-5 p-5">
        <div className="w-1/2 flex flex-col items-center ">
          <img
            className=" w-[300px] m-2 animate-pulse"
            src="https://alumni.mnit.ac.in/images/givbackheading.jpg"
          ></img>
          <p className=" mt-10 p-2 font-semibold text-left">
            NIT Silchar is one of the oldest NITs, generating world class engineers,
            managers, architects and scientists. The transition from student to
            alumni is not just a change in status it's a stepping stone towards
            carving out a fulfilling career and making a meaningful impact on
            the world.
          </p>
          <p className="p-2 font-semibold text-left">
            As alumni, you become ambassadors of your Alma mater. Whether
            through mentoring, guest lectures, or supporting initiatives, you
            have the opportunity to give back and contribute to the growth of
            future generations.
          </p>
        </div>
        <div className="w-1/2 flex justify-center">
          <img
            className="w-[600px] md:flex justify-center hidden  items rounded-xl"
            src={pic}
          ></img>
        </div>
      </div>
      <div>
        <h1 className="text font-bold text-3xl text-center">
          Ways to Give Back
        </h1>
        <div className=" m-3 w-full flex justify-center">
          <div className="w-10/12 ">
            <div className=" grid grid-cols-3 m-2 p-2 bg-blue-300 rounded-xl ">
              <div className="m-3 bg-white rounded-lg">
                <div>
                  <h1 className="text-2xl font-semibold  text-center ">
                    Donate to Scholarship
                  </h1>
                  <p className="m-2 text-center">
                    Empower deserving students with the gift of education.
                    Contribute to scholarship funds that make possible for
                    bright and ambitious individuals to be part of NITS.
                  </p>
                </div>
              </div>
              <div className="m-3 p-2 bg-white rounded-lg ">
                <div>
                  <h1 className="text-2xl font-semibold  text-center ">
                    Support Academic Departments
                  </h1>
                  <p className="m-2 text-center">
                    Direct your support to specific academic departments or
                    programs that had a significant impact on their academic
                    journey. Help them thrive and continue to inspire future
                    students. Mentorship and Networking: Alumni can share their
                    expertise, insights, and professional networks with current
                    students and fellow alumni. Mentorship programs, networking
                    events, and alumni career panels offer valuable
                    opportunities for students to gain guidance and connections
                    within their fields of interest.
                  </p>
                </div>
              </div>
              <div className="m-3 p-2 bg-white rounded-lg ">
                <div>
                  <h1 className="text-2xl font-semibold  text-center ">
                    Refurbishing, Renovating Hostels
                  </h1>
                  <p className="m-2 text-center">
                    The institute recognize the instrumental role that hostel
                    life plays in a student’s overall well being and
                    development. Proving a safe and home living experience to
                    students is one of the key objective of NITS . As alumni,
                    come together and contribute to revamp its hostel
                    infrastructure on campus not just with bricks and mortar,
                    but with the spirit of shared memories.
                  </p>
                </div>
              </div>
              <div className="m-3 p-2 bg-white rounded-lg">
                <div>
                  <h1 className="text-2xl font-semibold  text-center ">
                    Invest in Campus Development
                  </h1>
                  <p className="m-2 text-center">
                    From modernizing facilities to creating sustainable spaces,
                    your donation can play a crucial role in enhancing the
                    physical environment of NITS.
                  </p>
                </div>
              </div>
              <div className="m-3 p-2 bg-white rounded-lg">
                <div>
                  <h1 className="text-2xl font-semibold  text-center ">
                    Online Donation
                  </h1>
                  <p className="m-2 text-center text-lg">
                    To be added in Future.......
                  </p>
                </div>
              </div>
              <div className="m-3 p-2 bg-white rounded-lg ">
                <div>
                  <h1 className="text-2xl font-semibold  text-center ">
                    Corporate Social Responsibility (CSR) Fund
                  </h1>
                  <p className="m-2 text-center">
                    Alumni may help in raising corpus fund using their wide
                    network with industry. Note: Donations to National
                    Institute of Technology, Silchar are exempted under section
                    80G(5)(vi) of Income Tax Act 1961.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" m-3 p-3 mt-7 w-10/12">
        <h1 className="text-3xl font-bold">Donations from Alumni</h1>
        <p>
          <ol className="m-3">
            <li className="m-2  ">
              <h1>
                1.Approx 18 lakh was donated by 1973 batch for procuring a new
                Ambulance for people in medical need.
              </h1>
            </li>
            <li className="m-2  " i>
              <h1>
                2.Approx 18 lakh was donated by 1973 batch for procuring a new
                Ambulance for people in medical need.
              </h1>
            </li>
            <li className="m-2  ">
              <h1>
                3.Approx 18 lakh was donated by 1973 batch for procuring a new
                Ambulance for people in medical need.
              </h1>
            </li>
            <li className="m-2  ">
              <h1>
                4.Approx 18 lakh was donated by 1973 batch for procuring a new
                Ambulance for people in medical need.
              </h1>
            </li>
            <li className="m-2  ">
              <h1>
                5.Approx 18 lakh was donated by 1973 batch for procuring a new
                Ambulance for people in medical need.
              </h1>
            </li>
            <li className="m-2  ">
              <h1>
                6.Approx 18 lakh was donated by 1973 batch for procuring a new
                Ambulance for people in medical need.
              </h1>
            </li>
          </ol>
        </p>
      </div>
    </div>
  );
};

export default Pay;

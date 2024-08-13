import React, { useState } from "react";

const Abo = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex flex-col md:flex-row justify-between">
        {/* Left Section */}
        <div className="md:w-1/3 bg-white p-6 mb-4">
          <h1 className="font-bold text-3xl mb-4">Useful Links</h1>
          <ul className="list-disc list-inside">
            <li className="mb-2">
              <a
                href="http://www.nits.ac.in/aboutus/visionandmission.php"
                className="text-blue-600 hover:underline"
              >
                Our Vision and Mission
              </a>
            </li>
            <li className="mb-2">
              <a
                href="http://www.nits.ac.in/aboutus/objectivesandvalues.php"
                className="text-blue-600 hover:underline"
              >
                Our Objectives and Values
              </a>
            </li>
            <li className="mb-2">
              <a
                href="http://www.nits.ac.in/aboutus/directormessage.php"
                className="text-blue-600 hover:underline"
              >
                Message from the Director
              </a>
            </li>
            <li className="mb-2">
              <a
                href="http://www.nits.ac.in/aboutus/financecommittee.php"
                className="text-blue-600 hover:underline"
              >
                The Finance Committee
              </a>
            </li>
            <li className="mb-2">
              <a
                href="http://www.nits.ac.in/aboutus/senatecommittee.php"
                className="text-blue-600 hover:underline"
              >
                Senate Committee
              </a>
            </li>
            <li className="mb-2">
              <a
                href="http://www.nits.ac.in/aboutus/buildingandworkscommittee.php"
                className="text-blue-600 hover:underline"
              >
                The Building & Works Committee
              </a>
            </li>
          </ul>
        </div>
          <div className="bg-slate-200 w-[1px]"></div>
        {/* Right Section */}
        <div className="md:w-2/3 bg-white p-6 ">
          <h1 className="font-bold text-3xl mb-4">History</h1>
          <div className="text-base leading-relaxed">
            <p>
              In the late fifties, the Government of India decided to establish
              Regional Engineering Colleges (RECs) under the Quality Technical
              Education Policy – one each in every major state – with the prime
              objective of imparting quality technical education throughout the
              country and to foster national integration.
            </p>
            {!expanded ? (
              <>
                <p className="mt-4">
                  These Regional Engineering Colleges were established as joint
                  ventures of the Government of India and the respective State
                  Governments. Assam is considered as the flag bearer of the
                  Northeast India and so in the year 1967 the 15th REC was
                  officially established in Silchar. However, it took almost a
                  decade for REC Silchar to start its academic programmes due to
                  various constraints.
                </p>
                <button
                  onClick={toggleExpand}
                  className="text-blue-600 hover:underline mt-2"
                >
                  Read more
                </button>
              </>
            ) : (
              <>
                <p className="mt-4">
                  The first batch of students were admitted in 1977 in the BE
                  program in 3 branches of engineering namely, Civil Engineering,
                  Mechanical Engineering, and Electrical Engineering. The total
                  intake in the first batch was 60 students.
                </p>
                <p className="mt-4">
                  The inadequate infrastructure facilities consisted of only a part
                  of a hostel, two Assam type buildings (for classes and
                  administration), a workshop building, seven faculty quarters and
                  a few staff quarters when the College started its academic
                  programme in November 1977. Initially under the guidance of the
                  then Principal Dr. H. R. Chablani, the classes started with only
                  four full time Faculty members.
                </p>
                <p className="mt-4">
                  The College started its academic programme with affiliation from
                  Gauhati University. The first batch of BE students were awarded
                  degrees in the year 1982-83. Subsequently, two more branches,
                  namely, Electronics and Telecommunication Engineering, and
                  Computer Science and Engineering started functioning from the
                  year 1983 and 1987, respectively. The affiliation was later shifted
                  to Assam University in 1994.
                </p>
                <p className="mt-4">
                  On the basis of the report of the High Powered Joint Expert
                  Committee of AICTE and UGC under the chairmanship of Prof. S. K.
                  Joshi, Director General of Council for Scientific and Industrial
                  Research (CSIR), Regional Engineering College Silchar has been
                  transformed and upgraded to National Institute of Technology,
                  Silchar with the status of Deemed University on 28th June 2002.
                  The institute has been taken over by Government of India and
                  subsequently made into a fully funded Central Government Autonomous
                  Institution.
                </p>
                <p className="mt-4">
                  This ensures a better financial status for NIT Silchar and will
                  accelerate its growth ensuring that it becomes one of the premier
                  technological institutes of not just the North- East but the entire
                  nation. The institute has remodeled its curriculum and academic
                  activities in line with that of the IITs.
                </p>
                <p className="mt-4">
                  With its Deemed University status, the institute started awarding
                  degrees from the year 2002 and the first convocation of the
                  institute was held on 16 February 2004. The Government of India
                  declared the Institute as an Institute of National Importance by
                  enacting the National Institutes of Technology Act 2007.
                </p>
                <button
                  onClick={toggleExpand}
                  className="text-blue-600 hover:underline mt-2"
                >
                  Read less
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abo;

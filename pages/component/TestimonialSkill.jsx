import React, { useEffect, useState } from "react";

const TestimonialSkill = () => {
  const [data, setData] = useState([]);
  const [mainData, setMainData] = useState(data);
  const [pagination, setPagination] = useState(0);
  const handleApi = async () => {
    const response = await fetch("api/testimonial");
    const apiData = await response.json();
    console.log(apiData);
    setData(apiData.slice(0, 1));
  };
  const handleForword = (id) => {
    setData(data.slice(1, 2));
  };
  //   const handleBack = () => {
  //     setMainData(data.slice(id - 1 - id));
  //   };
  useEffect(() => {
    handleApi();
  }, []);
  return (
    <>
      {" "}
      <div className="test_main">
        <div className="test_main1">
          <div className="skill">
            {data &&
              data.map((item, i) => {
                return (
                  <>
                    <div>
                      {item.id}
                      {item.title}
                      {item.description}
                    </div>
                    <button
                      onClick={() => {
                        handleBack(i.id);
                      }}
                    >
                      back
                    </button>
                    <button
                      onClick={() => {
                        handleForword(item.id);
                      }}
                    >
                      Forward
                    </button>
                  </>
                );
              })}{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSkill;

import React, { useEffect, useState } from "react";

const Card = () => {
  const [data, setData] = useState([]);
  const handleApiData = async () => {
    const response = await fetch("/api/card");
    const apiData = await response.json();
    console.log(apiData);
    setData(apiData);
  };
  useEffect(() => {
    handleApiData();
  }, []);
  return (
    <div>
      <div className="card_main_card">
        <div className="card_main">
          {data &&
            data.map((item, i) => {
              return (
                <>
                  <div key={i} className="card_individual">
                    <img src={item.img} alt={item.description} />
                    <div className="card_content">
                      <div className="card_header">
                        <h2>{item.Topic}</h2>
                        <br />
                        <h3>{item.description}</h3>
                      </div>
                      <div className="card_footer">
                        <div>
                          <a href={item.link}>GitHub Link</a>
                        </div>
                        <div className="card_teck_stack">{item.tech_use}</div>
                      </div>
                      <a href={item.download}>
                        <div className="card_teck_stack2">Download</div>
                      </a>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Card;

import React, { useState } from "react";

const SomeSkill1 = () => {
  const [item, setItem] = useState("");
  const [itemAdd, setItemAdd] = useState([]);
  const handleAdd = () => {
    setItemAdd((preValue) => {
      return [...preValue, item];
    });
    setItem("");
  };
  const handleDelete = (id) => {
    const newData = itemAdd.filter((i) => i !== id);
    setItemAdd(newData);
  };
  return (
    <div>
      <hr />
      <h2>Some another skills 🎉</h2>
      <div className="skills">
        <div className="skil_section1">
          <label htmlFor="item">Enter Skill</label>
          <br />
          <input
            type="text"
            placeholder="Enter your skill"
            value={item}
            onChange={(e) => {
              setItem(e.target.value);
            }}
          />{" "}
          <br />
          <div className="button1" type="submit" onClick={handleAdd}>
            Add Item
          </div>
          {itemAdd ? (
            <div className="item_add">
              {itemAdd &&
                itemAdd.map((item, i) => {
                  return (
                    <>
                      <div className="item_main" key={i}>
                        <div className="item">
                          {item}{" "}
                          <span
                            onClick={() => {
                              handleDelete(item);
                            }}
                          >
                            X
                          </span>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SomeSkill1;

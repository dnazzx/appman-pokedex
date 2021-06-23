import React, {useEffect} from "react";
import {
  getListPokedex,
  getMyPokedex,
  removeCard,
} from "../redux/actions/cardAction";
import { calStr, calWeak, calDamage, calHappiness } from "../functions/calStat";
import { useDispatch, useSelector } from "react-redux";

function HookCard() {
  const cards = useSelector(state => state.card)
  const dispatch = useDispatch()

  const handleRemove = (item) => {
    dispatch(removeCard(item));
  };

  useEffect(() => {
    dispatch(getMyPokedex());
  }, []);

  const renderPokedex = (item, index) => {
    return (
      <div className="card" key={index}>
        <div className="card-pic">
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className="card-details">
          <h2>{item.name}</h2>
          <table>
            <tbody>
              <tr>
                <td>HP</td>
                <th>
                  <div className="progress_bar">
                    <span
                      style={{
                        display: "block",
                        width:
                          item.hp >= 100
                            ? 100 + "%"
                            : item.hp + "%" && isNaN(item.hp)
                            ? 0 + "%"
                            : item.hp + "%",
                        height: "1.7rem",
                        backgroundColor: "#f3701a",
                        borderRadius: "30px",
                      }}
                    ></span>
                  </div>
                </th>
              </tr>
              <tr>
                <td>STR</td>
                <th>
                  <div className="progress_bar">
                    <span
                      style={{
                        display: "block",
                        width: calStr(item.attacks) + "%",
                        height: "1.7rem",
                        backgroundColor: "#f3701a",
                        borderRadius: "30px",
                      }}
                    ></span>
                  </div>
                </th>
              </tr>
              <tr>
                <td>WEAK</td>
                <th>
                  <div className="progress_bar">
                    <span
                      style={{
                        display: "block",
                        width: calWeak(item.weaknesses) + "%",
                        height: "1.7rem",
                        backgroundColor: "#f3701a",
                        borderRadius: "30px",
                      }}
                    ></span>
                  </div>
                </th>
              </tr>
            </tbody>
          </table>
          <div className="happiness">
            <img src={cuteimg} alt="HAPPINESS" />
            {calHappiness(
              item.hp,
              calWeak(item.weaknesses),
              calDamage(item.attacks)
            )}
          </div>
        </div>
        <div className="card-remove">
          <button
            type="button"
            onClick={() => {
              handleRemove(item);
            }}
          >
            X
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="card-area">
      <div className="card-body">
        {cards.selected.map((item, index) => {
          return renderPokedex(item, index);
        })}
      </div>
      <div className="card-footer"></div>
    </div>
  );
}
  
  export default HookCard;
  
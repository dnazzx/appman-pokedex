// eslint-disable-next-line
import React, { useEffect } from "react";
import { getMyPokedex, removeCard } from "../redux/actions/cardAction";
import { calStr, calWeak, calDamage, calHappiness } from "../functions/calStat";
import { useDispatch, useSelector } from "react-redux";

interface pokedex_item {
  id: string,
  name: string,
  imageUrl: string,
  hp: number,
  number: number,
  attacks: { damage: number }[],
  weaknesses: [{
    value: number
  }]
}
type statePokedex = {
  selected: [],
  query: pokedex_item[]
}
type pokedex = {
  card: statePokedex
}

function CardType() {

  const cards = useSelector((state: pokedex) => state.card)

  const dispatch = useDispatch()

  const handleRemove = (item: object) => {
    dispatch(removeCard(item));
  };

  useEffect(() => {
    dispatch(getMyPokedex());
  }, [dispatch]);

  const renderPokedex = (item: pokedex_item, index: number) => {
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
            {/* <img src={cuteimg} alt="HAPPINESS" /> */}
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

export default CardType;

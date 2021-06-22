import React, {useEffect} from "react";
import {
  getMyPokedex,
  removeCard,
} from "../redux/actions/cardAction";
import { calStr, calWeak, calDamage, calHappiness } from "../functions/calStat";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";

function HookCard() {
const cards = useSelector(state => state.card)

  const handleRemove = (item) => {
    console.log(item)
    removeCard(item);
  };

  useEffect(() => {
    // console.log(cards)
    getMyPokedex();
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

const mapStateToProps = (state) => ({
    card: state.card,
  });
  HookCard.propTypes = {
    removeCard: PropTypes.func.isRequired,
    getMyPokedex: PropTypes.func.isRequired,
  };
  
  export default connect(mapStateToProps, {
    getMyPokedex,
    removeCard,
  })(HookCard);
  
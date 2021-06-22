import React, {useState, useEffect} from 'react'
import searchimg from "../search.png";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  getMyPokedex,
  addCard,
} from "../redux/actions/cardAction";
import { calStr, calWeak, calDamage, calHappiness } from "../functions/calStat";

type pokedex = {
  card: statePokedex
}
type statePokedex = {
  loading: boolean,
  selected: [],
  query: pokedex_item[]
}
interface pokedex_item {
    id: string,
    name: string,
    imageUrl: string,
    hp: number,
    number: number,
    attacks: [{
      damage: number
    }],
    weaknesses: [{
      type: string,
      value: number
    }]
}
interface Props {
  getMyPokedex: ({}, search: string) => void, 
  addCard: ({}) => unknown
}


function HookModal(Props:Props) {
    const [search, setSearch] = useState<string>('')
    const [count, setCount] = useState<number>(1)

    const selectCard = (state: pokedex) => state.card         

    const cards = useSelector(selectCard)
    // console.log(cards.query)

    const handleOnInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value.toLowerCase())
        getMyPokedex({}, search)
    };

    const handleClick = (item: object) => {
      Props.addCard(item);
    };

    const loadPage = () => {
        setCount(count + 1);
    };

    const loadButton = () => {
        return (
          <div className="body-footer">
            <button
              onClick={loadPage}
              style={{
                fontSize: "25px",
                padding: "0.2rem 1rem",
                backgroundColor: "transparent",
                color: "#dc7777",
                border: "1px solid #f3f4f7",
                boxShadow: "inset 0 1px 3px #d4d4d4",
                cursor: "pointer",
              }}
            >
              Load More
            </button>
          </div>
        );
      };

    const renderPokedex = (item: pokedex_item, index: number) => {
        return (
          <div className="card" key={index}>
            <div className="card-pic">
              <img src={item.imageUrl} alt={item.name} />
            </div>
            <div className="card-details">
              <h2>{item.name.toUpperCase()}</h2>
              <table>
                <colgroup>
                  <col style={{ width: "100px" }}></col>
                </colgroup>
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
                {calHappiness(
                  item.hp,
                  calWeak(item.weaknesses),
                  calDamage(item.attacks)
                )}
              </div>
            </div>
            <div className="card-add">
              <button
                type="button"
                onClick={() => {
                  handleClick(item);
                }}
              >
                Add
              </button>
            </div>
          </div>
        );
      };

      useEffect(() => {
        // Props.getMyPokedex({}, search);
      }, []);

    return (
        <div className="menu-footer">
          <label className="menu-btn" htmlFor="modal-state">
            <p className="btn-icon">+</p>
          </label>
          <input
            type="checkbox"
            name="modal-state"
            id="modal-state"
            className="modal-state"
          />
          <div className="modal-overlay">
            {/* modal */}
            <div className="modal">
              <div className="modal-header">
                <input
                  type="text"
                  placeholder="Find pokemon"
                  id="searchinput"
                  className="search-input"
                  value={search}
                  onChange={handleOnInputChange}
                />
                <img
                  src={searchimg}
                  className="search-img"
                  alt="search_photo"
                />
              </div>
              <div className="modal-body">
                {cards.query.map((card: pokedex_item, index: number) => {
                  if (index >= 20 * count) return null;
                  return renderPokedex(card, index);
                })}
                {cards.query.length > 20 * count
                  ? loadButton()
                  : ""}
              </div>
            </div>
            <label
              htmlFor="modal-state"
              className="modal-overlay-close"
            ></label>
          </div>
        </div>
    )
}

const mapStateToProps = (state: pokedex) => ({
    card: state.card
});

HookModal.propTypes = {
    addCard: PropTypes.func.isRequired,
    getMyPokedex: PropTypes.func.isRequired,
    calStr: PropTypes.func.isRequired,
    calWeak: PropTypes.func.isRequired,
    calDamage: PropTypes.func.isRequired,
    calHappiness: PropTypes.func.isRequired,
};
  
export default connect(mapStateToProps, {
    getMyPokedex,
    addCard,
    calStr,
    calWeak,
    calDamage,
    calHappiness
})(HookModal);

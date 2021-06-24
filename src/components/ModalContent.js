import React from "react";
import searchimg from "../search.png";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getListPokedex,
  getMyPokedex,
  addCard,
} from "../redux/actions/cardAction";
import { calStr, calWeak, calDamage, calHappiness } from "../functions/calStat";

class ModalContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      loading: false,
      itemPerPage: 20,
      load: 1,
    };
  }
  /* Component */
  componentWillMount() {
    this.props.getListPokedex();
  }
  componentWillUpdate() {
    this.props.getMyPokedex({}, this.state.query);
  }

  /* event handle */
  handleOnInputChange = (event) => {
    const query = event.target.value.toLowerCase();
    this.setState({ query, loading: true });
  };
  handleClick = (item) => {
    this.props.addCard(item);
  };
  loadPage = () => {
    this.setState({ load: this.state.load + 1 });
  };

  /*--------------- Calculate Status Pokedex (Start)--------------- */

  /*--------------- Calculate Status Pokedex (End) --------------- */

  loadButton = () => {
    return (
      <div className="body-footer">
        <button
          onClick={this.loadPage}
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

  renderPokedex = (item, index) => {
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
            {/* <img src={cuteimg} alt="HAPPINESS" /> */}
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
              this.handleClick(item);
            }}
          >
            Add
          </button>
        </div>
      </div>
    );
  };

  render() {
    return (
      <>
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
                  onChange={this.handleOnInputChange}
                />
                <img
                  src={searchimg}
                  className="search-img"
                  alt="search_photo"
                />
              </div>
              <div className="modal-body">
                {this.props.card.query.map((card, index) => {
                  if (index >= 20 * this.state.load) return null;
                  return this.renderPokedex(card, index);
                })}
                {this.props.card.query.length > 20 * this.state.load
                  ? this.loadButton()
                  : ""}
              </div>
            </div>
            <label
              htmlFor="modal-state"
              className="modal-overlay-close"
            ></label>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  card: state.card,
});
ModalContent.propTypes = {
  getListPokedex: PropTypes.func.isRequired,
  addCard: PropTypes.func.isRequired,
  getMyPokedex: PropTypes.func.isRequired,
  calStr: PropTypes.func.isRequired,
  calWeak: PropTypes.func.isRequired,
  calDamage: PropTypes.func.isRequired,
  calHappiness: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  getListPokedex,
  getMyPokedex,
  addCard,
  calStr,
  calWeak,
  calDamage,
  calHappiness
})(ModalContent);

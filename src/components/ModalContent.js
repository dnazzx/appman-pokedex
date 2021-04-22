import React from "react";
import searchimg from "../search.png";
import cuteimg from "../cute.png";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getListPokedex,
  getMyPokedex,
  addCard,
} from "../redux/actions/cardAction";

class ModalContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      listCard: [],
      loading: false,
    };
  }
  componentWillMount() {
    this.props.getListPokedex();
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.card.query !== this.props.card.query) {
      this.setState({ query : nextProps.query })
    }
  }
  renderPokedex = (item, index) => {
    return (
      <div className="card" key={index}>
        <div className="card-pic">
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className="card-details">
          <h2>{item.name.toUpperCase()}</h2>
          <table>
            <tbody>
              <tr>
                <td>HP</td>
                <th>{item.hp}</th>
              </tr>
              <tr>
                <td>STR</td>
                <th>
                  <div className="progress">
                    <div className="bar">{item.hp}</div>
                  </div>
                </th>
              </tr>
              <tr>
                <td>WEAK</td>
                <th>{item.hp}</th>
              </tr>
            </tbody>
          </table>
          <div className="happiness">
            <img src={cuteimg} alt="HAPPINESS" />
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
  onchange = (e) => {
    const query = e.target.value;
    console.log(query);
    if (!query) {
      this.setState({ query, listCard: {} });
    } else {
      this.setState({ query, loading: true }, () => {
        this.props.getMyPokedex();
      });
    }
  };

  handleClick = (item) => {
    this.props.addCard(item);
    this.props.getMyPokedex(item.id);
  };

  render() {
    // console.log(this.props.card)
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
                  onChange={this.onchange}
                />
                <img
                  src={searchimg}
                  className="search-img"
                  alt="search_photo"
                />
              </div>
              <div className="modal-body">
                {this.props.card.query.map((card, index) => {
                  return this.renderPokedex(card, index);
                })}
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
};

export default connect(mapStateToProps, {
  getListPokedex,
  getMyPokedex,
  addCard,
})(ModalContent);

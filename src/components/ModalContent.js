import React  from 'react';
import searchimg from "../search.png";
import cuteimg from "../cute.png";
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { getListPokedex, getMyPokedex, addCard } from '../redux/actions/cardAction'

class ModalContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            search: ""
        };
    }
    componentDidMount() {
		this.props.getListPokedex();
        // console.log(this.props.getListPokedex())
	}

    renderPokedex = (item,index) => {
        // const { search } = this.state;
        return (
            <div className="card" key={index}>
                <div className="card-pic">
                    <img src={item.imageUrl} alt={item.name}/>
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
                            <img src={cuteimg} alt="HAPPINESS"/>
                        </div>
                    </div>
                    <div className="card-add">
                        <button type="button" onClick={()=>{this.handleClick(item)}}>Add</button>
                    </div>
            </div>
        );
    };
    onchange = e => {
        this.setState({ search: e.target.value });
    };

    handleClick  = (item) => {
        console.log(item)
        this.props.addCard(item);
        this.props.getMyPokedex(item.id);
    }

    render() {
        const { search } = this.state;
        let filteredPokedex = this.props.card.listPokedex;
        console.log(filteredPokedex)
        if (search !== '' && search) {
            filteredPokedex = filteredPokedex.filter(pokedex => {     
            if (pokedex.name.toLowerCase().includes(search) !== false)
                return pokedex.name.toLowerCase().includes(search)
            else if (pokedex.name.toUpperCase().includes(search) !== false)
                return pokedex.name.toUpperCase().includes(search)
            else if (pokedex.type.toLowerCase().includes(search) !== false)
                return pokedex.type.toLowerCase().includes(search)
            else if (pokedex.type.toUpperCase().includes(search) !== false)
                return pokedex.type.toUpperCase().includes(search)
            return null
        })}
        
        // console.log(filteredPokedex)
        return (
            <>
                <div className="menu-footer">
                    <label className="menu-btn" htmlFor="modal-state">
                        <p className="btn-icon">+</p>
                    </label>
                    <input type="checkbox" name="modal-state" id="modal-state" 
                    className="modal-state"/>
                    <div className="modal-overlay">
                        {/* modal */}
                        <div className="modal">
                            <div className="modal-header">
                                <input type="text" placeholder="Find pokemon" id="searchinput" className="search-input" onChange={this.onchange}/>
                                <img src={searchimg} className="search-img" alt="search_photo"/>
                            </div>
                            <div className="modal-body">
                                {filteredPokedex.map((item, index)=> {
                                    return this.renderPokedex(item, index);
                                })}
                            </div>
                        </div>
                        <label htmlFor="modal-state" className="modal-overlay-close"></label>
                    </div>
                </div>
                
            </>
        ) 
    }
}

const mapStateToProps = (state) => ({
    card: state.card
})
ModalContent.propTypes = {
    getListPokedex: PropTypes.func.isRequired,
    addCard: PropTypes.func.isRequired,
    getMyPokedex: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { getListPokedex, getMyPokedex, addCard })(ModalContent);
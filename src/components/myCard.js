import React from 'react';
// import { useDispatch } from 'react-redux'
// import ListPokedex from './cards.json'
import cuteimg from "../cute.png";
import { getListPokedex, getMyPokedex, removeCard } from '../redux/actions/cardAction'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class myCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }
    componentDidMount() {
		this.props.getMyPokedex();
    }
    handleRemove = (id) => {
        console.log(id)
        this.props.removeCard(id);
    }
    renderPokedex = (item,index) => {
        // const { search } = this.state;
        return (
            <div className="card" key={index}>
                <div className="card-pic">
                    <img src={item.imageUrl} alt={item.name}/>
                </div>
                <div className="card-details">
                    <h2>{item.name}</h2>
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
                                        <div className="bar"></div>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <td>WEAK</td>
                                <th></th>
                            </tr>
                        </tbody>
                    </table>
                    <div className="happiness">
                        <img src={cuteimg} alt="HAPPINESS"/>
                    </div>
                </div>
                <div className="card-remove">
                    <button type="button" onClick={()=>{this.handleRemove(item.id)}}>X</button>
                </div>
            </div>        
        );
    };
    render() {
        let filteredPokedex = this.props.card.selected;
        return (
            <div className="card-area">
                <div className="card-body">
                    {/* {this.state.ListPokedex.cards.map((p,index) => ( */}
                        
                   {filteredPokedex.map((item, index)=> {
                        return this.renderPokedex(item, index);
                    })} 

                    {/* ))} */}
                </div>
                <div className="card-footer"></div>
            </div>
        ) 
    }
    
        
}

const mapStateToProps = (state) => ({
    card: state.card

})
myCard.propTypes = {
    getListPokedex: PropTypes.func.isRequired,
    removeCard: PropTypes.func.isRequired,
    getMyPokedex: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { getListPokedex, getMyPokedex, removeCard })(myCard);
import React, {Component}from 'react';
// import { useDispatch } from 'react-redux'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
// import ListPokedex from './cards.json'
import { getListPokedex } from '../redux/actions/cardAction'

class ModalCard extends Component {
    render() {
        console.log(getListPokedex)
        return (
            <>
                <div className="modal-body">
                    {/* {this.state.ListPokedex.map((p,index) => (
                        <div className="card" key={index}>
                            <div className="card-pic">
                                <img src={p.imageUrl} />
                        </div>
                        <div className="card-details">
                            <h2>{p.name}</h2>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>HP</td>
                                            <th>{p.hp}</th>
                                        </tr>
                                        <tr>
                                            <td>STR</td>
                                            <th>
                                                <div class="progress">
                                                    <div class="bar"></div>
                                                </div>
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>WEAK</td>
                                            <th>{p.hp}</th>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="happiness">
                                    <p>happiness</p>
                                </div>
                            </div>
                            <div className="card-add">
                                <button type="button">Add</button>
                            </div>
                        </div>
                    ))} */}
                </div>
            </>
        ) 
    }
}
const mapStateToProps = (state) => ({
    list: state.ListPokedex
})

ModalCard.propTypes = {
    getListPokedex: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { getListPokedex })(ModalCard);
import React from 'react';
// import { useDispatch } from 'react-redux'
// import ListPokedex from './cards.json'
// import { getListPokedex } from '../redux/actions/cardAction'

class myCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            // ListPokedex: ListPokedถex
        };
    }
    render() {
        // const dispatch = useDispatch();
        // useEffect(() => {
        //     dispatch(getListPokedex());
        // }, []);
        return (
            <>
                <div className="card-body">
                    {/* {this.state.ListPokedex.cards.map((p,index) => ( */}
                        <div className="card">
                            <div className="card-pic">
                                <img src/>
                            </div>
                            <div className="card-details">
                                <h2>NAME</h2>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>HP</td>
                                            <th></th>
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
                                            <th></th>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="happiness">
                                    <p>happiness</p>
                                </div>
                            </div>
                            <div className="card-remove">
                                <button type="button">Remove</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-pic">
                                <img src/>
                            </div>
                            <div className="card-details">
                                <h2>NAME</h2>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>HP</td>
                                            <th></th>
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
                                    <p>happiness</p>
                                </div>
                            </div>
                            <div className="card-remove">
                                <button type="button">Remove</button>
                            </div>
                        </div>
                    {/* ))} */}
                </div>
            </>
        ) 
    }
    
        
}

export default myCard;
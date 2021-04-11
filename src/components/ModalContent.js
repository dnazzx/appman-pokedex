import React  from 'react';
import search from "../search.png";
import ModalCard from './ModalCard'

class ModalContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }
    render() {
        return (
            <>
                <div className="menu-footer">
                    <label className="menu-btn" for="modal-state">
                        <p className="btn-icon">+</p>
                    </label>
                    <input type="checkbox" name="modal-state" id="modal-state" className="modal-state"/>
                    <div className="modal-overlay">
                        <label for="modal-state" className="modal-overlay-close"></label>
                        <div className="modal">
                            <div className="modal-header">
                                <input type="text" placeholder="Find pokemon" id="searchinput" className="search-input"/>
                                <img src={search} className="search-img"/>
                            </div>
                            <ModalCard/>
                        </div>
                    </div>
                </div>
                
            </>
        ) 
    }
    
        
}

export default ModalContent;
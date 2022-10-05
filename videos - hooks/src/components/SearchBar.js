import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState(''); //state = { term: '' };


    const onSubmit = event => {
        event.preventDefault();

        onFormSubmit(term); //this.props.onFormSubmit(this.state.term); //ana component'e mevcut arama teriminin ne olduğu bildirildi 
    };
    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input
                        type="text"
                        value={term}//value={this.state.term}
                        onChange={(event) => setTerm(event.target.value)} //onChange={onInputChange} onInputChange silinip orda yapılanı buraya arrow ile verdik //onChange={this.onInputChange} //e => this.setState({ term: e.target.value })
                    />
                </div>
            </form>
        </div>); // onSubmit forma özel forma yazılanları almaya yarayan attribute props geçilebilir
};


export default SearchBar;
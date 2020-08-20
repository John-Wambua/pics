import React from "react";


class SearchBar extends React.Component{
    state = { input: '' };

    onFormSubmit=(error)=>{
        error.preventDefault();

        this.props.onSubmit(this.state.input)
        // this.setState({input: ''})
    }
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div>
                        <label>Search For An Image</label>
                        <input onChange={e=>this.setState({ input: e.target.value })} className="field" type="text" value={this.state.input}/>
                    </div>

                </form>
            </div>

        )
    }

}
export default SearchBar;
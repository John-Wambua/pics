import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component{

    state = { images: [] }

     onSearchSubmit=async (input)=>{
        try {
            const resp = await unsplash.get('/search/photos',{
                params: {query:input}
            })
            const imageLinks=resp.data.results;
            this.setState({ images: imageLinks})
            console.log(resp.data.results)
        }catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div className="container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <div className="row" >
                    {this.state.images.map((image,i)=>
                        <div key={image.id} className="col-lg-3 col-sm-6" style={{marginBottom: '20px'}}><ImageList key={image.id} image={image}/></div>)}
                </div>


            </div>

        )
    }
}
export default App;
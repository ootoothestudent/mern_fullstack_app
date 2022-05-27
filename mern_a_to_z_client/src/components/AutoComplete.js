import React from "react";
import '../AutoComplete.css';
export default class AutoComplete extends React.Component{
    constructor(props){
        super(props);
        this.books =[
            'How to code ',
            'Code kings ',
            'Code kings vol iv ',
            'Code kings vol v ',
            'My little codie ',
            'My little codie II ',
        ];
        this.state = {
            suggestions:[],
            text :'',
        };
    }   
 onTextChanged = (e) =>{
        const value = e.target.value;
        let suggestions =[];
        if (value.length > 0){
        const regex = new RegExp(`^${value}`,'i');

         suggestions = this.books.sort().filter(v =>regex.test(v));
         }
         this.setState(()=>({suggestions, text : value}));
         
         }  
         
suggestionSelected(value){
    this.setState(()=>({
        text:value,
        suggestions:[],

    }))


}
//destructure suggestions
renderSuggestions(){
        const { suggestions }= this.state;
        if(suggestions.length === 0){
            
            return null;
        }
        return (
            <ul>
            {suggestions.map((book)=> <li onClick={()=> this.suggestionSelected(book)}>{book}</li>)}
            </ul> 

        );
    }
    render(){

        const {text}= this.state;
        return(
            

            <div className="AutoComplete"> 
            <h1 >auto complete test</h1>
            <input value={text} onChange={this.onTextChanged} type= "text"   placeholder='enter book name to search '/>
      
             {this.renderSuggestions()}
            
              </div>
           
        )
    }

}
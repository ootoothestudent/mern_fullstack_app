import React from "react";




export default class AutoComplete extends React.Component{
 constructor(props){
     super(props);
     this.books =[
        'How to code ',
        'Code kings ',
        'My little codie ',
     ];
     this.state = {
        suggestions:[],
     };
}

 onTextChanged = (e) =>{
        const value = e.target.value;
        let suggestions =[];
        if (value.length > 0){
        const regex = new RegExp(`^${value}`,'i');

         suggestions = this.books.sort().filter(v =>regex.test(v));
         }
         this.setState(()=>({suggestions}));
         
         }   
//destructure suggestions
renderSuggestions(){
    const { suggestions }= this.state;
    if(suggestions.length === 0){
        
        return null;
    }
    return (
        <ul>
        {suggestions.map((book)=> <li>{book}</li>)}
        </ul> 

    );
}
    render(){
        return(


            <div> 
            <h1 >auto complete test</h1>
          
            <input onChange={this.onTextChanged} type= "text"/>
      
             {this.renderSuggestions()}
            
              </div>
           
        )
    }

}
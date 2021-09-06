import React from 'react';

const Searchbox=({serachField,searchChange})=>{
    return(
        <div className='pa3'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type="serach" 
                placeholder="seach robots"
                onChange={searchChange}
            />
        </div>
        
    );
}

export default Searchbox;
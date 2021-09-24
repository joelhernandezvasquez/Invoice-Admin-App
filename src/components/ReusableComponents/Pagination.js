
import React from 'react';

const Pagination = ({totalItem,rangePerPage}) => {
    
    const numbersPage = [];
    const currentPage = 1;
    
   for(let i=1;i<=Math.ceil(totalItem/rangePerPage);i++)
   {
       numbersPage.push(i);
   }

    return (
        <div className="pagination">
          <ul className="pagination-items">
          <i className="fa fa-chevron-left arrow" aria-hidden="true"></i>
          
          { numbersPage.map(number =>{
              return (
               <div className={`item ${currentPage==number?'current-page':null}`}>
                   <li>{number}</li>
               </div>
               
              )
          }) }

           <i class="fa fa-chevron-right arrow" aria-hidden="true"></i>
          </ul>
         
        </div>
    )
}

export default Pagination;

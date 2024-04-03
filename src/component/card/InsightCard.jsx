import React from 'react'

const InsightCard = ({Label,Number}) => {
  return (
    <>
        
          <div class="card text-center ">
              <div class="card-body">
                  <h5 class="scoreCard">{Number}</h5>
                  <span class="scoreCard-title">{Label}</span>
              </div>
          </div>
       
        
      
    </>
  )
}

export default InsightCard

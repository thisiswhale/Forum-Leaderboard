import React, {Component} from 'react';

class Leaderboard extends Component {

  constructor() {
  	super();
    this.state ={
      topAllTime: [],
      top30Days: []
    }
  }

  componentWillMount(){
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
      .then(results => results.json())
      .then(data =>{
        console.log('this',data)
        // let topAllTime = data.results.map( user => {
        //     return(
        //
        //     )
        // })
    })

  }
  //
  // GetTopAllTime(){
  //   const hello = fetch
  //
  // }
  //
  // GetTop30Days(){
  //
  //
  // }

    render(){
      return(
        <div>
          <table className='table'>
           <tr>
             <th>#</th>
             <th>Camper Name</th>
             <th>Points in the Past 30 days</th>
             <th>Points All Time</th>
           </tr>
           <tr>
             <td>Jill</td>
             <td>Smith</td>
             <td>50</td>
           </tr>
           <tr>
             <td>Eve</td>
             <td>Jackson</td>
             <td>94</td>
           </tr>
         </table>
        </div>
      );
    }
}

export default Leaderboard;

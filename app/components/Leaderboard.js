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
    let allTimeUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
    let recent30Url = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';

    fetch(allTimeUrl)
      .then(results => results.json())
      .then(data =>{
        console.log('this',data)
        let topAllTime = data.map( (user,i) => { // i is 0, 1, 2, 3...
            return(
              <tr className='camper' key={i+1}>
                <th className='key' >{i+1}</th>
                <th className='username'><img src={user.img} style={styles.image} /> {user.username}</th>
                <th className='recent'>{user.recent}</th>
                <th className='all-time'>{user.alltime}</th>
              </tr>
            );
        });
        this.setState({topAllTime:topAllTime});
    });

    fetch(recent30Url)
      .then(results => results.json())
      .then(data =>{
        console.log('this',data)
        let top30Days = data.map( (user,i) => { // i is 0, 1, 2, 3...
            return(
              <tr className='camper' key={i+1}>
                <th className='key' >{i+1}</th>
                <th className='username'><img src={user.img} style={styles.image} /> {user.username}</th>
                <th className='recent'>{user.recent}</th>
                <th className='all-time'>{user.alltime}</th>
              </tr>
            );
        });
        this.setState({top30Days:top30Days});
    });
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
            <thead className='category'>
              <tr>
                <th>#</th>
                <th>Camper Name</th>
                <th>Points in the Past 30 days</th>
                <th>Points All Time</th>
              </tr>
           </thead>
           <tbody className='user-row'>
             {this.state.topAllTime}
           </tbody>
         </table>
        </div>
      );
    }
}

const styles = {
  image: {
    height: '50px',
    width: '50px'
  }
};
export default Leaderboard;

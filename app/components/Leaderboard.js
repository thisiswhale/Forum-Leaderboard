import React, {Component} from 'react';

class Leaderboard extends Component {

  constructor() {
    super();
    this.state = {
      topAll: [],
      topRecent: [],
      category: 'all'
    }
    this.renderTable = this.renderTable.bind(this);
    this.handleTableSort = this.handleTableSort.bind(this);
  }

  componentDidMount() {
    let topAll = [];
    let topRecent = [];

    const allTimeUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
    const recent30Url = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';

    fetch(allTimeUrl).then(results => results.json()).then(data => {
      data.forEach((user, i) => { // i is 0, 1, 2, 3...
        topAll.push({
          id: i + 1,
          img: user.img,
          username: user.username,
          recentPoints: user.recent,
          allTimePoints: user.alltime
        })
      });
      this.setState({topAll: topAll});
    });
    fetch(recent30Url).then(results => results.json()).then(data => {
      data.forEach((user, i) => {
        topRecent.push({
          id: i + 1,
          img: user.img,
          username: user.username,
          recentPoints: user.recent,
          allTimePoints: user.alltime
        })
      });
      this.setState({topRecent: topRecent});
    });
  }

  handleTableSort(category){
    if(category =='all'){
      this.setState({category:'all'})
    }else if(category == 'recent'){
      this.setState({category:'recent'})
    }
	}
  renderTable() {
    let order;
    if(this.state.category == 'all'){
      order = this.state.topAll;
    }
    else if(this.state.category == 'recent'){
      order = this.state.topRecent;
    }
    return (order.map((user, i) => {
      return (
        <tr className='camper' key={user.id}>
          <th className='key'>{user.id}</th>
          <th className='username'><img src={user.img} style={styles.image}/> {user.username}</th>
          <th className='recent'>{user.recentPoints}</th>
          <th className='all-time'>{user.allTimePoints}</th>
        </tr>
      )
    })
    );

  }

  render() {
    return (<div>
      <table className='table'>
        <thead className='category'>
          <tr>
            <th>#</th>
            <th>Camper Name</th>
            <th onClick={() => this.handleTableSort('recent')} id='recent'>Points in the Past 30 days</th>
            <th onClick={() => this.handleTableSort('all')} id='all-time'>Points All Time</th>
          </tr>
        </thead>
        <tbody className='user-row'>
          {this.renderTable()}
        </tbody>
      </table>
    </div>);
  }
  // render() {
  //   const camperTable = this.state.topAll.map((user, i) => {
  //     return (
  //         <tr className="camper" key={user.id}>
  //           <th className="key">{user.id}</th>
  //           <th className="username">
  //             <img src={user.img} style={styles.image} /> {user.username}
  //           </th>
  //           <th className="recent">{user.recentPoints}</th>
  //           <th className="all-time">{user.allTimePoints}</th>
  //         </tr>
  //     )
  //   })
  //   return (
  //     <div>
  //       <table className="table">
  //         <thead className="category">
  //           <tr>
  //             <th>#</th>
  //             <th>Camper Name</th>
  //             <th id="recent">Points in the Past 30 days</th>
  //             <th id="all-time">Points All Time</th>
  //           </tr>
  //          </thead>
  //          <tbody className='user-row' key='test'>
  //            {camperTable}
  //          </tbody>
  //       </table>
  //     </div>
  //   )
  // }
}

const styles = {
  image: {
    height: '50px',
    width: '50px'
  }
};
export default Leaderboard;

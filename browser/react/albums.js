import React, {Component} from 'react';




export default class Albums extends Component {

	constructor (props) {
		super();
		
	
	}
	render(){

		//console.log('albun:',this.state.albums[0]);


		return (

			<div className="col-xs-10">
	  <h3>Albums</h3>
	  <div className="row">
	  {

	  	this.props.albums ? 
	  	(
	  		this.props.albums.map((album)=>{
	  			<div className="col-xs-4">

			      <a className="thumbnail" href="#">
			        <img src={album.imageUrl} />
			        <div className="caption">
			          <h5>
			            <span>{album.name}</span>
			          </h5>
			          <ol>
			          <small>{album.songs.map(song => {return <li>{song.name}</li>})}</small>
			          </ol>
			        </div>
			      </a>
			    </div>


	  		});

	  		

	    )
	    : null;


	  }

	    


	  </div>
		</div>


			)
	}
}
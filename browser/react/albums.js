import React, {Component} from 'react';




export default class Albums extends Component {

	constructor (props) {
		super(props);
		console.log(props);
		
	
	}
	render(){
		return(
			<div className="col-xs-10">
				<h3>Albums</h3>
				<div className="row">
				{this.props.albums.map(album =>{
						return (
						<div key={album.id} className="col-xs-4">
					      <a className="thumbnail" href="#" onClick={() => {this.props.handleClick(album)
					      													console.log('in onclick', album)}}> 
					        <img src={album.imageUrl} />
					        <div className="caption">
					          <h5>
					            <span>{album.name}</span>
					          </h5>
					          <small>{album.songs.length} songs</small>
					        </div>
					      </a>
					    </div>
						)
					})}	
					</div>
				
			</div>

		)
	}

		

		

		

				

			
	}




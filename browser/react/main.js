	import React, {Component} from 'react';
	import Footer from './footer.js';
	import Sidebar from './sidebar.js';
	import Albums from './albums.js';
	import SingleAlbum from './singleAlbum.js';

	import axios from 'axios';
	let albumsData;

	

	const fakeAlbums = [
	  {
	    name: 'Abbey Road',
	    id: 1,
	    imageUrl: 'http://fillmurray.com/300/300',
	    songs: [
	      {
	        id: 1,
	        name: 'Romeo & Juliette',
	        artists: [ 
	          { name: 'Bill' } 
	        ],
	        genre: 'Funk',
	        audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
	      }, 
	      {
	        id: 2,
	        name: 'White Rabbit',
	        artists: [
	          { name: 'Bill' }, 
	          { name: 'Alice' }
	        ],
	        genre: 'Fantasy',
	        audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
	      }, 
	      {
	        id: 3,
	        name: 'Lucy in the Sky with Diamonds',
	        artists: [ 
	          { name: 'Bob' } 
	        ],
	        genre: 'Space',
	        audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
	      }
	    ]
	  },
	  {
	    name: 'Yellow Submarine',
	    id: 2,
	    imageUrl: 'http://fillmurray.com/300/300',
	    songs: [
	      {
	        id: 4,
	        name: 'London Calling',
	        artists: [ 
	          { name: 'Bill' } 
	        ],
	        genre: 'Punk',
	        audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
	      }
	    ]
	  }
	];


	export default class Main extends Component{
		constructor()
		{
			super();
			this.state={
				albums: [],
				selectedAlbum: {}
			}

			this.handleClick = this.handleClick.bind(this);
		}

		componentDidMount() {
			axios.get('/api/albums')
			  .then(res => { 
			    return res.data; 
			  })
			  .then(albumsFromServer => {
			  	console.log(albumsFromServer);

			    albumsFromServer = albumsFromServer.map(album => {
			      album.imageUrl = `/api/albums/${album.id}/image`;
			      return album;
			    });
			    this.setState({ albums: albumsFromServer });
		  	});

		}

		handleClick(album) {

			this.setState({
				selectedAlbum : album
			})

			

		}


		render(){
			return (


				<div id="main">
				<Sidebar />
				<Albums albums={this.state.albums} handleClick={this.handleClick}></Albums>

				<SingleAlbum album={this.state.selectedAlbum} />
				
				<Footer />

				</div>)
			}
	}
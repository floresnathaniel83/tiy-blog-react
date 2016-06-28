const React = require('react'),
	ReactDOM = require('react-dom')

const app = function() {

	const HomePage = React.createClass({
		render: function () {
			return ( <div id = "homeContainer">
						<Header/>
						<ContentHolder1/>
						<ContentHolder2/>
						<SearchHolder/>
						<TableHolder/>
					</div>
					)
			}

	})

	const Header = React.createClass({
		render: function () {
			return ( <div className = "blogHeader" >

						<img src = "http://magentanova.github.io/html-intro-1/images/houston.jpg"/>
						<img id = "logo" src = "http://magentanova.github.io/html-intro-1/images/ironyardlogo.png"/>

					</div>
					)
			
			}

		})

	const ContentHolder1 = React.createClass ({
		render: function () {
			return ( <div id = "column1">

						<h1>May 23 Starts a New Class of The Iron Yard Houston Students</h1>
						
						<img id = "classroom" src = "http://magentanova.github.io/html-intro-1/images/classroom.jpg"/>

						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum rerum consectetur suscipit et ut soluta asperiores eveniet vero dignissimos aliquam aspernatur, odit praesentium esse alias ex repellat voluptatem hic. Atque? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quasi perspiciatis praesentium quam, commodi. Nulla doloribus quas nesciunt, praesentium perspiciatis atque asperiores et id odit consectetur molestias provident repellat temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex obcaecati voluptatibus consectetur doloribus perferendis tempore. Ipsam explicabo, nisi, totam, sit ipsa, eos numquam cupiditate ex repellat dolores odit suscipit expedita.</p>
					</div>	
					
					)

				}

		})

	const ContentHolder2 = React.createClass ({
		render: function () {
			return ( <div id = "column2">
						<h4>THE IRON YARD | HOUSTON</h4>
						<p>Happenings and updates from the iron yard in Houston, TX</p>
					</div>
					)


		}



	})

	const SearchHolder = React.createClass ({
		render: function () {
			return ( <div id = "search">

						<h2>SEARCH</h2>
    					<input type="text" value="Search Keywords"/>

					</div> 


				)

		}




	})

	const TableHolder = React.createClass ({
		render: function () {
			return ( <div id = "table">

						<h5>Never miss a post!</h5>
					     
					    <img id="logo2"src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png"/>

						<div id="follow">+ follow</div>

					 </div>


					)


		}



	})

	ReactDOM.render(<HomePage/>, document.querySelector('.container'))
}

app()
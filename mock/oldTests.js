class LikeButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = { liked: false };
		toggleLike = toggleLike.bind(this);
	}

	render() {
		if (this.state.liked) {
			return 'You liked this.';
		}

		return (
				<button onClick={() => this.setState({ liked: true })}>
					Like
				</button>
			);
	}
}

function toggleLike()
{
	if (this.state.liked)
	{
		this.setState({liked: false});
	}
	else
	{
		this.setState({liked: true});
	}
}


class Toggler extends React.Component
{
	constructor(props) {
		super(props);
		this.state = { myinternalvar: "OFF" };

		this.printme = this.printme.bind(this);
		this.switchTo = this.switchTo.bind(this);
		this.render = this.render.bind(this);
		
	}

	printme() {
		console.log(this.state.myinternalvar);
	}

	switchTo()
	{
		console.log("Current state is:", this.state.myinternalvar);
		if (this.state.myinternalvar == "OFF")
		{
			this.setState({ myinternalvar: "ON" }, function() {
				console.log("Setting it to: ON", this.state.myinternalvar);
			}.bind(this));
		}
		else
		{
			this.setState({ myinternalvar: "OFF" }, function() {
				console.log("Setting it to: OFF", this.state.myinternalvar);
			}.bind(this));
		}
		toggleLike();
	}

	render()
	{
		let muhstate = this.state.myinternalvar;

		const renderThing = function()
		{
			if (muhstate == "OFF") {
				return <div>Its offline</div>;
			} else {
				return <div>I'm on</div>;
			}
		}

		return (
			<button onClick={this.switchTo} className="marginme">
					Toggle Me: {renderThing()}
			</button>
		);
	}

	// render() {
	//   if (this.state.myblahtest) {
	//     return 'blahtest_before.';
	//   }

	//   return (
	//       <button onClick={this.switchTo}>
	//         Blah test
	//       </button>
	//     );
	// }
}


function yeye()
{
	console.log("yeye");
}
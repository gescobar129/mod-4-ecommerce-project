state = { 
    shoes: []
  }

  getShoes = () => {
    fetch(`http://localhost:3000/shoes`)
    .then(r=>r.json())
    .then(data => {
      this.setState({shoes: data});
      console.log(data);
      
    })
  }
  

  render(){
    return (
      <div>
        {this.state.shoes.map(shoe => {
          return <ShoeCard key={shoe.id} shoe={shoe} />
        })}
      </div>
    );
  }

  componentDidMount = () => {
    this.getShoes()
  }

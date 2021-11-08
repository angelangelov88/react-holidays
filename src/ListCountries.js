import { HolidayAPI } from "holidayapi";
import { Component } from "react";

class ListCountries extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    const key = '6ed5a947-e77b-4b5f-8d89-f467c29db15a';
    const holidayApi = new HolidayAPI({ key });
    
     fetch("https://jsonplaceholder.typicode.com/users")
    
    // holidayApi.countries()
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    }
    )
    
    }

    render() {

      const { isLoaded, items } = this.state

      if (!isLoaded) {
        return <div>Loading...</div>
      } else {
        return (
          <div className="list-countires">
            <ul>
              {items.map(item => (
                <li key={item.id}>{item.name} | {item.email}</li>
              ))}
            </ul>          
          </div>
        )
  
      }

    }
    

  }

  export default ListCountries
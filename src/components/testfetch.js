import React from 'react';
import 'antd/dist/antd.min.css';


class TestFetch extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            data:''
        };
    }
    Clicked(){
        let url='http://localhost:8080/'
        fetch(url).then(res=>res.json()).then(data=>{
            this.setState({
                data:data}
            )
        }).catch(err=>{
            console.log(err)
        });
        // console.log((this.state.data))
    }
    render() {

        let Clicked=this.Clicked.bind(this);
        return(
            <div>
                <button onClick={Clicked}>CLick</button>
                <p>
                    {this.state.data}
                </p>
            </div>

        );
    }
}
export default TestFetch;
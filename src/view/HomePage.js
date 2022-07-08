import React from 'react';
import 'antd/dist/antd.min.css';
// import LayoutComponent from "../components/LayoutComponent";
import CardGrid from "../components/CardGrid";
import HorseLight from "../components/HorseLight";
import '../css/HomePage.css'
import TopMenu from "../components/TopMenu";
import {Pagination} from "antd";



class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array:this.props.array
        };

    }
    setCurrent = (current) => {
        this.setState({
            current: current
        })
        console.log(current)
    }

    render() {

        let setCurrent=this.setCurrent.bind(this);
        console.log(this.state.array);
        return (
            <div className="HomePage">
                <TopMenu/>
                <div className="Light">
                    <HorseLight/>
                </div>
                <div className="CardGrid">
                    <CardGrid array={this.state.array.slice(0,3)}/>

                </div>
                <div className="CardGrid">
                    <CardGrid array={this.state.array.slice(4,7)}/>
                </div>
                <div className="foot">
                    <Pagination current={this.state.current} total={50} onChange={setCurrent}/>
                </div>


            </div>

        );
    }
}
export default HomePage;
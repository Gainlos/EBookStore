import React from 'react';
import 'antd/dist/antd.min.css';
import {Carousel,Image} from 'antd';
import HaiBao1 from '../assets/haibao1.jpg';
import HaiBao2 from '../assets/haibao2.jpg';
import HaiBao3 from '../assets/haibao3.jpg';
import HaiBao4 from '../assets/haibao4.jpg';
class HorseLight extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const contentStyle = {
        height: '500px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
            width:'1500px'
    };
        return(
            <Carousel autoplay>
                <div>
                    <Image style={contentStyle} src={HaiBao1} />
                </div>
                <div>
                    <Image style={contentStyle} src={HaiBao2}  />
                </div>
                <div>
                <Image style={contentStyle} src={HaiBao3}  />
            </div>
                <div>
                <Image style={contentStyle} src={HaiBao4} />
            </div>
            </Carousel>
        );
    }
}

export default HorseLight;
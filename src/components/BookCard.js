import React from 'react';
import 'antd/dist/antd.min.css';
import {Card} from 'antd';
const {Meta}=Card;
class BookCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            url:'',
            title:'',
            description:''
        }
    }
    objToStrMap(obj){
        let strMap = new Map();
        for (let k of Object.keys(obj)) {
            strMap.set(k,obj[k]);
        }
        return strMap;
    }
    componentDidMount() {
        const Id=this.props.id;
        const Data=fetch("http://localhost:8080/bookdetail"+"?bookid="+Id,
            // {
            //     method:'POST',
            //     headers:{
            //         'Content-Type':'application/json;charset=UTF-8'
            //     },
            //     mode:'cors',
            //     cache:'default'
            // }
        ).then(res=>res.json()).then(data=>{
            this.setState({
                url:data.image,
                title:data.name,
                description:data.author
            });
        });

        console.log(Data)
        console.log(this.state.url)
    }
    render() {
        console.log(this.state.url)
        console.log(this.state.title)
        return (
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="BookCard" src={this.state.url} />}
            >
                <Meta title={this.state.title} description={this.state.description} />

            </Card>
        );
    }
}


export default BookCard;
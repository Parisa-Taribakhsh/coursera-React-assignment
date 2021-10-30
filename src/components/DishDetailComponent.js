import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    renderDishComments(dish){
        if (dish !== null){
            return (
                <div>
                    <h3>Comments</h3>
                    {dish.comments.map((comment)=>{
                        return(
                            <ul className="list-group" key={comment.id}>
                                <li >{comment.comment}</li>
                                <p>{comment.author},{new Date(comment.date).toDateString()}</p>
                            </ul>
                        )
                    })}
                </div>
            )
        }
        else{
            return(
                <div>
                </div>
            );
        }
    }

    render() {

        return (
            <div className=" row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-4">
                        {this.renderDishComments(this.props.dish)}
                    </div>
            </div>
        );
    }
}

export default DishDetail;
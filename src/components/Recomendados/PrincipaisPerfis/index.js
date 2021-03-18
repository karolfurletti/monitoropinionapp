import React from 'react'
import './index.css'

import Typography from '@material-ui/core/Typography';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Badge from '@material-ui/core/Badge';
import AccountBoxIcon from '@material-ui/icons/AccountBox';







  


function PrincipaisPerfis  (props){

console.log('daleeee')
console.log(props)   

    return (
        <div className="PrincipaisPerfis-Perfis">

            <div className="icon">
                <AccountBoxIcon></AccountBoxIcon>
            </div>

            <div className="name">
                <Typography>{props.item.author}</Typography>
            </div>

            <div className="coluna_dados">
                <Badge color="secondary">
                    <ChatBubbleIcon className="NegativeIcon"/>
                </Badge>
                <Badge color="secondary">
             
                
                <div>
                  <Typography className="teor">Negativos</Typography>
                </div>


                <div>
                    <Typography className="number">{props.item.negative_opinions}</Typography>
                </div>


                </Badge>
                </div>

                <div className="coluna_dados">             
                    <Badge color="secondary">
                        <div>
                            <ChatBubbleIcon className="PositiveIcon"/>
                        </div>
                    </Badge>
                    <Badge color="secondary">
                 
                    <div>
                        <Typography className="teor"> Positivos</Typography>
                    </div>

                    <div>
                        <Typography className="number">{props.item.positive_opinions}</Typography>
                    </div>
                    </Badge>
                </div>
            
        </div>
        
        
     
    )
}

export default PrincipaisPerfis
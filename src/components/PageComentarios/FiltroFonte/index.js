import React, {PureComponent} from 'react'
import Typography from '@material-ui/core/Typography';


import './index.module.css'



import FacebookIcon from '@material-ui/icons/Facebook';

import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import HttpIcon from '@material-ui/icons/Http';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';


import Radio from '@material-ui/core/Radio';



import Filtros from '../../../Filtros'

const FiltrosOBJ = new Filtros()


class LChart extends PureComponent {

    constructor(props){
        super(props)
        this.state = {
          selectedValue: 'a',
          ordenar: '',
          data: this.props.chart_opinions,
          opacity: {
            uv: 1,
            pv: 1,
          },
        };
      }

      render() {

        return (

<div className="item-classificador">
                <div className="item">
                    <AllInclusiveIcon></AllInclusiveIcon>
                    <Typography>Todos</Typography>
                    <Typography>12</Typography>
                    <Radio
                        checked={this.state.selectedValue === 'a'}
                        onChange={this.handleChange}
                        value="a"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                </div>

                <div className="item">
                    <TwitterIcon></TwitterIcon>
                    <Typography>Twitter</Typography>
                    <Typography>12</Typography>
                    <Radio
                        checked={this.state.selectedValue === 'b'}
                        onChange={this.handleChange}
                        value="b"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                </div>

                <div className="item">
                    <InstagramIcon></InstagramIcon>
                    <Typography>Instagram</Typography>
                    <Typography>12</Typography>
                    <Radio
                        checked={this.state.selectedValue === 'c'}
                        onChange={this.handleChange}
                        value="c"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                </div>

                <div className="item">
                    <FacebookIcon></FacebookIcon>
                    <Typography>Facebook</Typography>
                    <Typography>12</Typography>
                    <Radio
                        checked={this.state.selectedValue === 'd'}
                        onChange={this.handleChange}
                        value="d"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                </div>

                <div className="item">
                    <CollectionsBookmarkIcon></CollectionsBookmarkIcon>
                    <Typography>Tripadvisor</Typography>
                    <Typography>12</Typography>
                    <Radio
                        checked={this.state.selectedValue === 'e'}
                        onChange={this.handleChange}
                        value="e"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                </div>

                <div className="item">
                    <CollectionsBookmarkIcon></CollectionsBookmarkIcon>
                    <Typography>Yelp</Typography>
                    <Typography>12</Typography>
                    <Radio
                        checked={this.state.selectedValue === 'f'}
                        onChange={this.handleChange}
                        value="f"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                </div>

                <div className="item">
                    <CollectionsBookmarkIcon></CollectionsBookmarkIcon>
                    <Typography>Google Reviews</Typography>
                    <Typography>12</Typography>
                    <Radio
                        checked={this.state.selectedValue === 'g'}
                        onChange={this.handleChange}
                        value="g"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'g' }}
                    />
                </div>

                <div className="item">
                    <HttpIcon></HttpIcon>
                    <Typography>Web</Typography>
                    <Typography>12</Typography>
                    <Radio
                        checked={this.state.selectedValue === 'h'}
                        onChange={this.handleChange}
                        value="h"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                </div>



            </div>
        )}

}

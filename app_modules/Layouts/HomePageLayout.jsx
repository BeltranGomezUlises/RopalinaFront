import React, { Component } from 'react';
import {
  Card,
  Image,
  Icon,
} from 'semantic-ui-react';
import { Carousel } from 'react-bootstrap';
import {
  MainImageContainer,
  MainImage,
  CardsContainer,
  ImageContainer,
  TitleH1,
  Description,
} from '../../styledcomponents/home';
import * as utils from '../../utils.js';
import numeral from 'numeral';

const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIn0.kJdFAfN1eP6-4vEjv0lTRVsmj4L3RAJ60nl3vJFAfoLAK5tSkf-Qh-B8lyerGnA9oFnQIlVrEXj9xrYV6RKzLQ';

export default class HomePageLayout extends Component{

  constructor(props){
    super(props);
    this.state = {
      garments: [],
    }
  }

  componentWillMount() {
    fetch('http://74.208.178.83:8080/Ropalinda/api/garments', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': token //localStorage.getItem('tokenSesion')
      }
    }).then((res) => res.json())
      .then((r) => {
        utils.evalResponse(r, () => {
          this.setState({ garments: r.data })
        })
      });
  }

  showGarmentDetail(id){
    
  }

  render(){
    const {
      garments,
    } = this.state;

    return(
      <div style={{ marginTop: '110px' }}>
        <MainImageContainer>
          <Carousel>
            <Carousel.Item>
              <MainImage src="../../assets/Slider1.png" />
            </Carousel.Item>
            <Carousel.Item>
              <MainImage src="../../assets/Slider2.png" />
            </Carousel.Item>
            <Carousel.Item>
              <MainImage src="../../assets/Slider3.png" />
            </Carousel.Item>
          </Carousel>
        </MainImageContainer>
        <TitleH1>New arrivals</TitleH1>
        <Description>
          ¡Disfruta de los nuevos productos que tenemos para ti!. Personaliza tu prenda y luce un estilo único.
        </Description>
        <CardsContainer>
          {
            garments.map((garment) => (
              <Card style={{ marginTop: '0', cursor: 'pointer', margin: '20px' }} key={garment.id} onClick={this.showGarmentDetail(garment.id)}>
                <ImageContainer>
                  <Image
                    className="image-card"
                    style={{ height: '100%', width: '100%', objectFit: 'cover', transition: 'all 0.25s' }}
                    src={`http://74.208.178.83:8080/Ropalinda/api/utilities/getFile/${garment.image}`} />
                </ImageContainer>
                <Card.Content>
                  <Card.Header>{garment.name}</Card.Header>
                  <Card.Meta>
                    <span className='date'>{garment.subcategory.name}</span>
                  </Card.Meta>
                  <Card.Description>
                    {garment.description}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='dollar' />
                    {numeral(garment.price).format('0,0.00')}
                  </a>
                </Card.Content>
              </Card>
            ))
          }
          {
            garments.map((garment) => (
              <Card style={{ marginTop: '0', cursor: 'pointer', margin: '20px' }} key={garment.id}>
                <ImageContainer>
                  <Image
                    className="image-card"
                    style={{ height: '100%', width: '100%', objectFit: 'cover', transition: 'all 0.25s' }}
                    src={`http://74.208.178.83:8080/Ropalinda/api/utilities/getFile/${garment.image}`} />
                </ImageContainer>
                <Card.Content>
                  <Card.Header>{garment.name}</Card.Header>
                  <Card.Meta>
                    <span className='date'>{garment.subcategory.name}</span>
                  </Card.Meta>
                  <Card.Description>
                    {garment.description}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='dollar' />
                    {numeral(garment.price).format('0,0.00')}
                  </a>
                </Card.Content>
              </Card>
            ))
          }
          {
            garments.map((garment) => (
              <Card style={{ marginTop: '0', cursor: 'pointer', margin: '20px' }} key={garment.id}>
                <ImageContainer>
                  <Image
                    className="image-card"
                    style={{ height: '100%', width: '100%', objectFit: 'cover', transition: 'all 0.25s' }}
                    src={`http://74.208.178.83:8080/Ropalinda/api/utilities/getFile/${garment.image}`} />
                </ImageContainer>
                <Card.Content>
                  <Card.Header>{garment.name}</Card.Header>
                  <Card.Meta>
                    <span className='date'>{garment.subcategory.name}</span>
                  </Card.Meta>
                  <Card.Description>
                    {garment.description}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='dollar' />
                    {numeral(garment.price).format('0,0.00')}
                  </a>
                </Card.Content>
              </Card>
            ))
          }
        </CardsContainer>
      </div>
    )
  }

}

import React from 'react';
import styled from "styled-components";
import { Button} from 'culturetrip-ui/dist/components/Button';
import fetch from 'node-fetch';

const ImgsWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const ImgWrapper = styled.div`
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
  width: 200px;
  font-size: 12px;
  vertical-align: top;
`;

const Img = styled.img`
  object-fit: cover;
  height: 150px;
  width: 200px;
`;

export class PlacesToStay extends React.Component {
  static async getData() {
    const json = await fetch('https://api.theculturetrip.com/api/v1/hotel-content/items/hotel/hotel-zelos-san-francisco-soma')
      .then(res => res.json());
    const images = json.additionalImages.map(img => ({
      src: img.src,
      text: img.caption[0].text
    }));
    return {
      images
    }
  }

  constructor(props) {
    super(props);
    const { images } = props;
    this.state = {
      images
    };
  }

  componentDidMount() {
    if (!this.state.images) {
      PlacesToStay.getData()
        .then(({images}) => this.setState({images}))
    }
  }

  render() {
    const images = this.state.images;
    return (
      <div>
        <h1>Places to stay</h1>
        <Button variant="primary" type="button" size="medium" onClick={() => console.log('clicked')}>Click</Button>
        {
          images ? <ImgsWrapper>
            {
              images.map(img => <ImgWrapper>
                  <Img src={img.src} />
                  <div>{img.text}</div>
                </ImgWrapper>
              )
            }
          </ImgsWrapper> : <div>Loading...</div>
        }

      </div>
    );
  }
}

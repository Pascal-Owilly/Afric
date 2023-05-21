import React, { useState } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import './CardSect.css';
import cardimg2 from '../img/cardimg2.jpeg';
import cardimg from '../img/cardimg.jpeg';
import img4 from '../img/img4.jpeg';
import sargassum from '../img/sargassum.jpeg';
import img7 from '../img/img7.jpeg';
import plant5 from '../img/plant5.jpeg';
import how8 from '../img/how7.jpeg';
import how1 from '../img/how1.jpeg';
import drench from '../img/img11.jpeg';
import drench1 from '../img/dremch1.jpeg';
import person2 from '../img/person2.jpeg';
import cimg1 from '../img/c-img1.jpeg';
import c_img1 from '../img/img12.jpeg';
import cimg3 from '../img/cimg3.jpeg';
import img9 from '../img/img9.jpeg';
import img5 from '../img/img5.jpeg';
import bloom from '../img/blom.jpeg';
import {Link } from 'react-router-dom';

import lobster from '../fonts/Lobster/Lobster-Regular.ttf'
import './fonts.css';

const cardData = [
  {
    title: "Seaweed ",
    description: " ",
    img: cardimg2,
  },
  // {
  //   title: "Seaweed",
  //   description: "",
  //   img:  img4,
  // },
  {
    title: "Seaweed",
    description: "",
    img: cimg1
  },
  {
    title: "Seaweed",
    description: "",
    img:cardimg,
  },
  {
    title: "Seaweed",
    description: "",
    img: img9
  },
];

const CardCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("");

  // slide for mobile

  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    { id: 1, title: 'Seaweed', image: img9 },
    { id: 2, title: 'Seaweed', image: cardimg },
    { id: 3, title: 'Seaweed', image: cimg1 },
    { id: 4, title: 'Seaweed', image: cardimg2},
    // { id: 5, title: 'Seaweed', image: img4 },
  ];

    // Calculate the next index
    const nextIndex = () => {
      const next = currentSlide + 1;
      return next >= cards.length ? 0 : next;
    };
  
    // Calculate the previous index
    const prevIndex = () => {
      const prev = currentSlide - 1;
      return prev < 0 ? cards.length - 1 : prev;
    };

    // end mobile slide

  const handleNextClick = () => {
    setSlideDirection("left");
    setTimeout(() => {
      setSlideDirection("");
      setStartIndex((startIndex) => Math.min(startIndex + 2, cardData.length - 3));
    }, 300);
  };

  const handlePrevClick = () => {
    setSlideDirection("right");
    setTimeout(() => {
      setSlideDirection("");
      setStartIndex((startIndex) => Math.max(startIndex - 2, 0));
    }, 300);
  };


  const lobster = {
    fontFamily: 'lobster',
    fontWeight:'300',
    fontSize:'16px',
    // padding:'1rem',
  };

  const lobsterheading = {
    fontFamily: 'lobster',
    fontWeight:'300',
    // fontSize:'16px',
    marginBottom:'2rem',
    // padding:'1rem',
  };

  return (
    <>
    <Container style={{position:'relative', zIndex:1}}>
    <hr />
    <h3 style={lobsterheading} className=" mt-1">We are converting calamity into a range of sustainable products.</h3>
    <Row>
    <Col md={3}>
    
    <img src={how1} style={{width:'100%'}}/>
    <p>
     Here is how we are doing that...
     </p>
     
    <h5 style={lobster}>Deforestation is on the rise</h5>
<ul>
  <li style={{}}>Agricultural practices are using a lot of pesticides and fertilizers.</li>
  <li style={{}}>We are dumping our wastewater into the oceans.</li>
  <li style={{}}>All of this has put an overload of nutrients in the oceans.</li>
</ul>

    </Col>
    <Col md={3}>
    <img src={sargassum} style={{width:'100%'}}/>
<h5 style={lobster}>Nutrients like nitrogen and phosphorus</h5>
<p style={{}}>This has given rise to a seaweed called Sargassum... </p>
</Col>
<Col md={3}>
<img src={img4} style={{width:'100%'}}/>
<p>It feeds on these nutrients and has grown enormously. It extends to West and East Africa, including Kenya. It creates something called Algae mats
  which kill coral reefs and animal populations. Also, it has a rotting egg stench, which impacts tourism.  </p>

</Col>
<Col md={3}>
<img src={bloom} style={{width:'100%'}}/>
<p>Fisheries are frustrated as it ends up in their nets.</p>
</Col>
<Row>
  <Col md={9}>

<h3 style={lobsterheading}>Mwani Africa is on a mission to mitigate this challenge</h3>
<img src={person2} style={{width:'100%'}}/>
<p>We as saviours assist in conservation, beach rehabilitation and empower smallholder communities, mostly women, youth and the vulnerable. We enhance livelihoods by creating jobs, beach Rehabilitation and Seaweed aquaculture
</p>
  </Col>
  <Col md='3'>
  <Col md={2} style={{width:'90%', margin:'auto'}}>
          <h4 style={{}} className='mt-5'>Benefit Company and Living Wage Employer.</h4>
          <p style={{}}>As a certified and registered Benefit Company, and a living-wage employer Mwani Africa is held accountable by external third-party organizations to ensure their actions genuinely benefit people and the planet.</p>
          {/* <p style={{}}>On behalf of our three primary stakeholders — Mother Earth, our First Nations Partners and our shareholders — we have an imperative to demonstrate that both profitable business growth and environmental stewardship can be achieved in harmony.</p> */}
        </Col>
  </Col>
</Row>


<Col md={5}>
<h4>We are also looking into protein supplements for food and feed</h4>
<img src={how8} style={{width:'100%'}}/>
Then mention we have items under <Link style={{fontWeight:''}} as={Link} onClick={() => {  window.scrollTo(0, 0); }} to="/research" className="" > research</Link>

</Col>
<Col md={6}>
<p style={lobster}>Bioprospecting and sustainable utilization of African aquatic natural
    resources. </p>
    <img src={c_img1} style={{width:'100%'}}/>
  <p>
  As a scientist, climate change activist, and conservationist, I lead a skilled team dedicated to effecting positive change on our planet. We are committed to employing innovative solutions and community-based approaches to address environmental challenges.
 </p>
</Col>

  </Row>
   <Row>
    </Row>          
   <Row className='cardsect-content'>
      <Container className='' style={{}}>

        <Row>
      
      <Col md={6}>


 </Col>
<Col md={6}>
      
{/* <p className="text-cente" style={{}}>Mwani Africa is on a mission */}
{/* to produce climate-positive biomass in the ocean, reduce greenhouse gas emissions and build a more resilient food system by producing products for land-based farmers.</p> */}

<img className='p-only' src={cimg3} style={{width:'100%'}}/>
{/* <hr /> */}
    {/* <p style={{}}>  Mwani Africa has built a team of experts to grow, process and produce seaweed-based products for regenerative agriculture — biostimulants and agrifeeds.</p> 
    <p style={{}}> We are cultivators (compared to wild harvesters), which means we grow local seaweeds from seed on low-impact farms in the ocean. The infrastructure includes anchors on the seafloor, floats on the surface and tensioned ropes in between.</p>
    <p style={{}}>In the fall, we collect reproductive material from the vicinity of each farm site, to protect the genetic diversity of each species. We create a spore solution from the reproductive material and grow our seaweed seedlings in our custom nursery. We plant those seedlings on the ocean farms in the winter and monitor their growth until they are ready to be harvested in the spring. The harvested biomass is then transported to a processing facility where it is washed and frozen and available for the production of our products.</p>
    <p style={{}}>By partnering with coastal First Nations, we are cultivating seaweed in the ocean at scale to restore marine ecosystems. We then harvest that biomass to produce products that make positive impacts on the environment and build a more resilient food system.
        We are focusing on delivering products in three key areas:</p> */}
        </Col>
        </Row>
        <Row className='mb-4'>
        <Col md={12}>
          
          <div>
            {/* <hr /> */}
            <Row>
            <Col md={4}>
              <div>
            <p className='mt-4  ' style={lobster}>Farm Biostimulants</p>
            <p style={{}}>Biostimulants are applied to plants to enhance nutrition efficiency, abiotic stress tolerance, and crop quality traits.</p>
            <img src={plant5} style={{width:'100%'}}/>
          </div>
                </Col>
              <Col md={4}>
              <div>
            <p className='mt-4  ' style={lobster}>Feed Additives</p>
            <div 
             style={{
              backgroundImage: `linear-gradient(rgb(128, 0, 128, .6), rgb(128, 0, 128, .6)), url(${img9})`,
              backgroundColor:'white',
              backgroundAttachment: "fixed",
              backgroundRepeat:'noRepeat',
              backgroundSize: "contain",
              color: "white",
              height:'40vh',     
}}>
            <h3 className="d-flex justify-center  p-1" style={lobsterheading}>
            Seaweed-based additives are used in insect protein for purposes of improving the quality of feed and the animals’ health & growth.
</h3>
</div>
            
          </div>
              </Col>
             
                <Col md={4}>
                <div>
            <p className='mt-4  ' style={lobster}>Ecosystem Services</p>
            <p style={{}}>As seaweed grows in the ocean it provides benefits to the ecosystem that deserve to be measured and valued</p>
            <img src={drench} style={{width:'100%'}}/>
          </div>
                </Col>
            </Row>
            {/* <Row className='coastal'>
              <p className='coastal' style={lobster}>Every touch point makes a positive difference. And we are doing this in partnership with coastal First Nations.</p>
            
            </Row> */}
            {/* <h4 style={{}} className="mt-2">#TRULYGOOD</h4> */}
          
            {/* <p style={{}}>Mwani Africa believes it is vital to consider the social, economic and environmental impact of its purchases.
            Each member of our team aims to support our independent local businesses first while seeking the best value for products and services. Our goal is to purchase at least 50% of our core products locally.
            We also have a strong commitment to partners to offer contract labour and employment opportunities to their members first, and our team aims to procure supplies and equipment from First Nations owned service providers wherever possible.</p> */}
            <Row>
            {/* <img src={person2} style={{width:'100%'}}/> */}
              <Col md={4} className=''>
              <div>
            <p style={lobster}>Environmental</p>
            <img src={cardimg} style={{width:'100%', marginLeft:'auto'}}/>
            <p style={{}}>We grow seaweed to restore marine ecosystems and produce products that help mitigate climate change.</p>
          </div>
              </Col>
              <Col md={4} className='mt-3'>
              <div>
            <h4 style={lobster}>Social</h4>
            <img src={img5} style={{width:'100%', margin:'auto'}}/>
            <p style={{}}>We form integrated partnerships with First Nations and local coastal communities to tackle threats to the world’s food supply.</p>
          </div>
                </Col>
                <Col md={4} className='mt-3'>
                <div>
            <h4 style={lobster}>Governance</h4>
            <Row className='certified-bg'
    style={{
                          backgroundImage: `linear-gradient(rgb(128, 0, 128, .6), rgb(128, 0, 128, .6)), url(${img4})`,
                          backgroundColor:'white',
                          backgroundAttachment: "fixed",
                          backgroundRepeat:'noRepeat',
                          backgroundSize: "contain",
                          color: "white",
                          height:'40vh',
                          
    }}>
     
        <h3 className="d-flex justify-center" style={lobsterheading}>
 We are legally committed to conducting business in a socially responsible and sustainable way.
</h3>
      
    </Row>
          </div>
                </Col>
            </Row>
          </div>        
        </Col>
        </Row>
        </Container>
    </Row>
    </Container>  
    <Container >


      <hr />
      <Row className="enterprise">
      <h3 className='' style={lobsterheading}>Social Enterprise</h3>
      <p className="">Our social enterprise model leverages innovation to assist local coastal community, smallholder farmers, mostly women and youth, in climate resilient Seaweed farming.</p>
      <h5 className="mt-0">Application</h5>
          <p>Depending on the type of fertilizer used, its qualities, or the expected results, application involves the following ...</p>
        <Col md={3} style={{height:'100%'}}> 
        <p style={lobster} className="mt-2">Fertilizers</p>
          
          <Card className="enterprise-card">  
          <img src={how1} style={{width:'100%'}}/>
          <p>Fertilizers are organic or inorganic substances that improve the soil’s chemical, biological, and physical characteristics. These are compounds designed to correct any nutrient deficiency detected in the soil.</p>
          </Card>
         </Col>

        <Col md={3} className='' style={{marginTop:'0'}}>
      
           <h5 className='mt-2' style={lobster}>Fertigation</h5>
           <Card className="enterprise-card"> 
             <p >Fertigation consists of the dissolution of different fertilizers in the irrigation water. Therefore, the nutrients are equally distributed throughout the land so the plants can absorb them.</p>
           </Card>
        </Col>  
        <Col md={3}>
        
           <p className='mt-2 ' style={lobster} >Drenching (Soil/Root) Application</p>
          
           <Card className="enterprise-card mb-3">  
           <img src={drench1} style={{width:'100%'}}/>
           <p>The soil or root process involves directly/indirectly applying fertilizer to the base of the plant, either diluted in water or directly. This way, the aim is to bring the nutrients closer to the roots to assimilate more quickly.</p></Card>
           </Col>
           <Col md={3}>
           <p className='mt-2' style={lobster}>Foliar</p>
     <Card className="enterprise-card mb-3">  <p>Its purpose is to quickly make primary nutrients such as phosphorus, nitrogen, and potassium available to the plant.

On many occasions, the nutrients are very fixated on the soil, and the crops do not assimilate them, so this application always corrects the deficiencies.

Foliar fertilizers on plants, are applied as mists, sprays and/or drenches. The leaves then absorb them. When foliar is absorbed, its effects are appreciated very quickly.</p></Card>
         
</Col>
          
                  

     
        
      </Row>
     

    
    </Container>
   

 

    </>

  );
};

export default CardCarousel;

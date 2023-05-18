import React, { useState } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import './CardSect.css';
import cardimg2 from '../img/cardimg2.jpeg';
import cardimg from '../img/cardimg.jpeg';
import img4 from '../img/img4.jpeg';
import person2 from '../img/person2.jpeg';
import cimg1 from '../img/c-img1.jpeg';
import cimg3 from '../img/cimg3.jpeg';
import img9 from '../img/img9.jpeg'


const cardData = [
  {
    title: "Seaweed ",
    description: " ",
    img: cardimg2,
  },
  {
    title: "Seaweed",
    description: "",
    img:  img4,
  },
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
    { id: 5, title: 'Seaweed', image: img4 },
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

  return (
    <>
    <Container style={{position:'relative', zIndex:1}}>

    <h5 className=" mt-1" style={{color:'#666666', fontFamily:'cursive', fontWeight:'bold'}}>This startup is converting calamity into a range of sustainable products.<br /> Here is how it's doing that...<hr /></h5>
   <Row>
    <Col md={4}>
    <h5 style={{color:'#666666', fontFamily:'cursive', fontWeight:'bold'}}>Deforestation is on the rise</h5>
<ul>
  <li style={{ fontSize: '14px', color:'#666666' }}>Agricultural practices are using a lot of pesticides and fertilizers.</li>
  <li style={{ fontSize: '14px', color:'#666666' }}>We are dumping our wastewater into the oceans.</li>
  <li style={{ fontSize: '14px', color:'#666666' }}>All of this has put an overload of nutrients in the oceans.</li>
</ul>
    </Col>
    <Col md={4}>
    <h5 style={{color:'#666666', fontFamily:'cursive', fontWeight:'bold'}}>Nutrients like nitrogen and phosphorus</h5>
<p style={{ fontSize: '14px', color:'#666666' }}>This has given rise to a seaweed called Sargassum. It feeds on these nutrients and has grown enormously. It extends to West and East Africa, including Kenya. It creates something called Algae mats which kill coral reefs and animal populations. Also, it has a rotting egg stench, which impacts tourism. Fisheries are frustrated as it ends up in their nets. </p>
<p style={{ fontSize: '14px', color:'#666666' }}>Mwani Africa is on a mission to solve this by converting Sargassum into useful materials. We produce a natural biostimulant and soil conditioner, applied to to plants and soils to enhance nutritional efficiency and resilience. 
We produce a natural protein feed additive.
We produce a natural clothing material.
 We have developed the world's first Seaweed-based grow medium for vertical gardens</p>
    </Col>
    <Col md={4}>
    <img src={cimg3} style={{width:'100%'}}/>
     
    </Col>
    </Row>          
      <h4 className=" mb-4" style={{color:'#666666', fontFamily:'cursive', fontWeight:'bold'}}>The ocean covers 70% of our planet and plays a critical role in regulating our climate. Yet it remains an area of focus with the least amount of investment.</h4>
    <div className="card-carousel c-only cardsect mt-4" style={{height:'65vh'}}>
      <div className={`card-carousel-container cardsect-carousel-container ${slideDirection}`}>
        <Row>
          {cardData.slice(startIndex, startIndex + 3).map((card, index) => (
            <Col key={index} className="">
              <Card className="cool-card">
                
              <div className=" " style={{height:'300px'}}>
                <Row>
                  <Col>
                <h4 className="card-title cardsect-title" style={{textAlign:'left'}} >{card.title}</h4>
                </Col>
                <Col>
                <p className="card-description cardsect-description" style={{textAlign:'right'}} >{card.description}</p>
                </Col>
                </Row>
                <Card.Img src={card.img} />                
              </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div className="card-carousel-buttons mt-3 text-center" >
        <button style={{width:'120px', border:'none', borderRadius:'25px'}} className='cardsect-carousel-buttons' onClick={handlePrevClick} disabled={startIndex === 0}>
        &#8249; &#8249;&#8249; &nbsp; Prev
        </button>&nbsp;
        <button style={{width:'120px', border:'none', borderRadius:'25px'}} className='cardsect-carousel-buttons' onClick={handleNextClick} disabled={startIndex >= cardData.length - 3}>
          Next  &nbsp; &#8250;&#8250;&#8250;
        </button>
      </div>
    </div>

    {/* mobile slide */}

    <div className="card-carousel cardsect p-only">
      <div className="card-carousel-container cardsect-carousel-container" >
        <Row style={{width:'100%'}}>
         
        {cards.map((card, index) => {
          const active = index === currentSlide;
          const classNames = ['slidecard'];
          if (active) classNames.push('active');
          return (
            <div className={classNames.join(' ')} key={card.id}>
              <Col>
              <h2>{card.title}</h2>
              </Col>
              <Col>
              < img src={card.image} style={{width:'100%'}}/>
              </Col>
            </div>
          );
        })}
        
        </Row>
      </div>
      <div className="slidebutton-container ">
        <button className="" style={{width:'120px', border:'none', borderRadius:'25px', backgroundColor: 'rgb(207, 169, 71)', color:'white' }}  onClick={handlePrevClick} onClick={() => setCurrentSlide(prevIndex)}>&#8249; &#8249;&#8249; &nbsp; Prev</button>&nbsp;&nbsp;&nbsp;
        <button className="" style={{width:'120px', border:'none', borderRadius:'25px', backgroundColor: 'rgb(207, 169, 71)', color:'white' }}  onClick={handlePrevClick} onClick={() => setCurrentSlide(nextIndex)}>Next  &nbsp; &#8250;&#8250;&#8250;</button>       
      </div>
    </div>
<hr className="p-only"/>
    <Row className='cardsect-content'>
      <Container className='' style={{}}>
        <div>
          <Container >
            <Row>
              <Col md={4}>
              <p style={{ fontSize: '14px', color:'#666666' }}>Seaweed forests are an integral part of improving ocean health and supporting high levels of biodiversity in marine environments by forming crucial habitats, producing oxygen, mitigating acidification, and capturing carbon. As with many ecosystems, the impacts of climate change have been detrimental to naturally occurring seaweed forests, and therefore they require protection and restoration.</p>
              </Col>
              <Col md={4}>
              <p style={{ fontSize: '14px', color:'#666666' }}>Cultivating seaweed on low-impact ocean farms has the ability to not only restore ecosystems, but also to increase the resilience of coastal economies and global food systems. This is because seaweed has a long list of potential uses once harvested. </p>
                </Col>
                <Col md={4}>
                <p style={{ fontSize: '14px', color:'#666666' }}>Ocean cultivated seaweed requires no freshwater, fertilizers, pesticides or arable land to grow. It utilizes nutrients from the sea, is renewable and fast growing. It is the definition of regenerative aquaculture and this burgeoning sector directly supports the development of Canada’s growing Blue Economy.</p>
                </Col>
            </Row>
          </Container>        
          </div>
        <Row>
        <hr />
      <Col md={6}>
<img className="mb-5" src={img4} style={{width:'100%'}}/>

 </Col>
<Col md={6}>
      
<h4 className="text-cente" style={{color:'#666666', fontFamily:'cursive', fontWeight:'bold'}}><i> Mwani Africa is on a mission
to produce climate-positive biomass in the ocean, reduce greenhouse gas emissions and build a more resilient food system by producing products for land-based farmers. </i></h4>
<hr />
    <p style={{ fontSize: '14px', color:'#666666' }}>  Mwani Africa has built a team of experts to grow, process and produce seaweed-based products for regenerative agriculture — biostimulants and agrifeeds.</p> 
    <p style={{ fontSize: '14px', color:'#666666' }}> We are cultivators (compared to wild harvesters), which means we grow local seaweeds from seed on low-impact farms in the ocean. The infrastructure includes anchors on the seafloor, floats on the surface and tensioned ropes in between.</p>
    <p style={{ fontSize: '14px', color:'#666666' }}>In the fall, we collect reproductive material from the vicinity of each farm site, to protect the genetic diversity of each species. We create a spore solution from the reproductive material and grow our seaweed seedlings in our custom nursery. We plant those seedlings on the ocean farms in the winter and monitor their growth until they are ready to be harvested in the spring. The harvested biomass is then transported to a processing facility where it is washed and frozen and available for the production of our products.</p>

        </Col>
        </Row>
        <Row className='mb-4'>
        <Col md={12}>
          <p style={{ fontSize: '14px', color:'#666666' }}>By partnering with coastal First Nations, we are cultivating seaweed in the ocean at scale to restore marine ecosystems. We then harvest that biomass to produce products that make positive impacts on the environment and build a more resilient food system.
        We are focusing on delivering products in three key areas:</p>
          <div>
            <Row>
              <Col md={4}>
              <div>
            <h4 style={{color:'#666666', fontFamily:'cursive', fontWeight:'bold'}}>FEED ADDITIVES</h4>
            <p style={{ fontSize: '14px', color:'#666666' }}>Seaweed-based additives are used in insect protein for purposes of improving the quality of feed and the animals’ health & growth.</p>
          </div>
              </Col>
              <Col md={4}>
              <div>
            <h4 style={{color:'#666666', fontFamily:'cursive', fontWeight:'bold'}}>FARM BIOSTIMULANTS</h4>
            <p style={{ fontSize: '16px', lineHeight: '26px', color:'#666666' }}>Biostimulants are applied to plants to enhance nutrition efficiency, abiotic stress tolerance, and crop quality traits.</p>
          </div>
                </Col>
                <Col md={4}>
                <div>
            <h4 style={{color:'#666666', fontFamily:'cursive', fontWeight:'bold'}}>ECOSYSTEM SERVICES</h4>
            <p style={{ fontSize: '16px', lineHeight: '26px', color:'#666666' }}>As seaweed grows in the ocean it provides benefits to the ecosystem that deserve to be measured and valued</p>
          </div>
                </Col>
            </Row>
            <Row className='coastal'>
              <p style={{ fontSize: '28px', lineHeight: '26px' }}>Every touch point makes a positive difference. And we are doing this in partnership with coastal First Nations.</p>
            </Row>
            <h4 style={{color:'#666666', fontFamily:'cursive', fontWeight:'bold'}} className="mt-2">#TRULYGOOD</h4>
            <p style={{ fontSize: '14px', color:'#666666' }}>Mwani Africa, in its effort to be Truly Good, believes it is vital to consider the social, economic and environmental impact of its purchases.</p>
            <p style={{ fontSize: '14px', color:'#666666' }}>Each member of our team aims to support our independent local businesses first while seeking the best value for products and services. Our goal is to purchase at least 50% of our core products locally.</p>
            <p style={{ fontSize: '14px', color:'#666666' }}>We also have a strong commitment to our First Nations partners to offer contract labour and employment opportunities to their members first, and our team aims to procure supplies and equipment from First Nations owned service providers wherever possible.</p>
            <Row>
            <img src={person2} style={{width:'100%'}}/>
              <Col md={4} className='mt-3'>
              <div>
            <h4 style={{color:'#666666', fontFamily:'cursive', fontWeight:'bold'}}>ENVIRONMENTAL</h4>
            <p style={{ fontSize: '14px', color:'#666666' }}>We grow seaweed to restore marine ecosystems and produce products that help mitigate climate change.</p>
          </div>
              </Col>
              <Col md={4} className='mt-3'>
              <div>
            <h4 style={{color:'#666666', fontFamily:'cursive', fontWeight:'bold'}}>SOCIAL</h4>
            <p style={{ fontSize: '14px', color:'#666666' }}>We form integrated partnerships with First Nations and local coastal communities to tackle threats to the world’s food supply.</p>
          </div>
                </Col>
                <Col md={4} className='mt-3'>
                <div>
            <h4 style={{color:'#666666', fontFamily:'cursive', fontWeight:'bold'}}>GOVERNANCE</h4>
            <p style={{ fontSize: '14px', color:'#666666' }}>As a certified B Corp. and a Benefit Company, we are legally committed to conduct business in a responsible and 

sustainable way. </p>
          </div>
                </Col>
            </Row>
            
            <Row>
              <Col md={10}>
                <p style={{ fontSize: '16px', lineHeight: '26px', color:'#666666' }}>Mwani Africa recognizes that we operate on the traditional territories of the coastal First Nations of BC and we are grateful for the opportunity to do so. We currently have agreements with the &nbsp;
                  <span ><a target="_blank" style={{ fontSize: '18px', lineHeight: '26px', color:'#666666' }} href="https://www.sitemodify.com/site/36aff82f/?nee=true&ed=true&showOriginal=true&preview=true&dm_try_mode=true&dm_checkSync=1">Tsawout</a></span>&nbsp;
                  <span ><a target="_blank" style={{ fontSize: '18px', lineHeight: '26px', color:'#666666' }} href="https://www.uchucklesaht.ca/">Uchucklesaht</a></span> &nbsp;
                  <span ><a target="_blank" style={{ fontSize: '18px', lineHeight: '26px', color:'#666666' }} href="https://tseshaht.com/">Tseshaht</a></span>&nbsp;
                  <span ><a target="_blank" style={{ fontSize: '18px', lineHeight: '26px', color:'#666666' }} href="https://www.klahoose.org/">Klahoose</a></span>&nbsp;
                  <span ><a target="_blank" style={{ fontSize: '18px', lineHeight: '26px', color:'#666666' }} href="https://www.ahousaht.ca/"> Ahousaht</a></span>&nbsp;
                  <span ><a target="_blank" style={{ fontSize: '18px', lineHeight: '26px', color:'#666666' }} href="http://www.metlakatla.ca/">Metlakatla </a></span>&nbsp;
                  <span ><a target="_blank" style={{ fontSize: '18px', lineHeight: '26px', color:'#666666' }} href="https://gitxaalanation.com/">Gitxaala</a></span>&nbsp;
                  </p>
              </Col>
            </Row>
          </div>        
        </Col>
        </Row>
        </Container>
    </Row>
    

   
   
    </Container>

   
    <Container >
    <Row className='certified-bg'style={{height:'40vh'}}>
      <Col md={12}>
        <h2 style={{display:'flex', alignItems:'center', justifyContent:'center', height:'40vh'}}>
      As a certified B Corp and
Benefit Company, we are legally committed to conducting business in a socially responsible and sustainable way.
</h2>
      </Col>
    </Row>
    </Container>
    <Container>
      <Row>
        <Col md={12} style={{width:'90%', margin:'auto'}}>
          <h4 style={{color:'#666666', fontFamily:'cursive', fontWeight:'bold'}} className='mt-2'>B Corp, Benefit Company and Living Wage Employer.</h4>
          <p style={{ fontSize: '16px', lineHeight: '26px', color:'#666666' }}>As a certified B Corp, a registered Benefit Company in British Columbia, and a living-wage employer Mwani Africa is held accountable by external third-party organizations to ensure their actions genuinely benefit people and the planet.</p>
          <p style={{ fontSize: '16px', lineHeight: '26px', color:'#666666' }}>On behalf of our three primary stakeholders — Mother Earth, our First Nations Partners and our shareholders — we have an imperative to demonstrate that both profitable business growth and environmental stewardship can be achieved in harmony.</p>
        </Col>
        <Col md={5}>

        </Col>
      </Row>
    </Container>
    </>

  );
};

export default CardCarousel;

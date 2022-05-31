import React from 'react'
import './activity.css'
import ACTIVITYIMAGES from '../../Assets/Images/ActivityPage-Images/ActivityImages';

const Activity = () => {

const leftContainerCards=[
  {
    id: 1,
    image: ACTIVITYIMAGES.funCity,
    cardTopPara:'Special Offer at Fun City - Century Mall',
    cardTitle:'Century Mall, Deira',
    buttonLeftText:'Be the first to review',
    bottomText:'Ages 3 - 9',
    bottomLeftText:'Distance:2102.5 KM',
    bottomRightText:'AED 99',
    buttonText:'Book Now',
  },
  {
    id: 2,
    image: ACTIVITYIMAGES.parkDubai,
    cardTopPara:'Al Khazzan Park Dubai',
    cardTitle:'Al Safa Street, Jumeirah',
    buttonLeftText:'5.0',
    bottomText:'Ages 0 - 16',
    bottomLeftText:'Distance:2113.5 KM',
    buttonText:'',
  },
  {
    id: 3,
    image: ACTIVITYIMAGES.myGym,
    cardTopPara:'My Gym UAE',
    cardTitle:'My Gym UAE, Jumeirah',
    buttonLeftText:'5.0',
    bottomText:'Ages 0 - 10',
    bottomLeftText:'Distance:2115.5 KM',
    buttonText:'Book Now',
  },
  {
    id: 4,
    image: ACTIVITYIMAGES.funCity,
    cardTopPara:'My Gym UAE',
    cardTitle:'My Gym UAE, Jumeirah',
    buttonLeftText:'5.0',
    bottomText:'Ages 0 - 10',
    bottomLeftText:'Distance:2115.5 KM',
    buttonText:'Book Now',
  },
]

const rightContainerCards=[
  {
    id: 1,
    image: ACTIVITYIMAGES.premierPadel,
    cardTitle:'Premier Padel Kids Academy',
    bottomLeftButtonText:'Be the first to review',
    bottomRightText:'AED 294',
  },
  {
    id: 2,
    image: ACTIVITYIMAGES.freedomPizza,
    cardTitle:'Freedom Pizza & More - Kids Catering by local',
    bottomLeftButtonText:'Be the first to review',
    bottomRightText:'AED 20',
  },
  {
    id: 3,
    image: ACTIVITYIMAGES.fitness,
    cardTitle:'Enhance Fitness',
    bottomLeftButtonText:'Be the first to review',
    bottomRightText:'AED 0',
  },
]

    document.title='Best Things to do with your Kids in UAE | Kidzapp';
  return (
    <div className='marginFromHeader activity-page'>
      <section className="filter">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-10">
              <div className="row leftContent">
                <div className="col-md-2">
                <input className="form-control mr-sm-2" type="search" placeholder="Search 🔍" aria-label="Search"/>
                </div>
                <div className="col-md-2">
                <select class="form-control" id="exampleFormControlSelect1">
      <option value=''>City</option>
      <option>Dubai</option>
      <option>Abu Dhabi</option>
      <option>Sharjah</option>
      <option>Ajman</option>
    </select>
                </div>
                <div className="col-md-2">
                <select class="form-control" id="exampleFormControlSelect1">
      <option value=''>Area</option>
      <option>All Area</option>
    </select>
    </div>
                <div className="col-md-2">
                <select class="form-control" id="exampleFormControlSelect1">
      <option value=''>All Dates</option>
      <option>Today</option>
      <option>Weekend</option>
    </select>
                </div>
                <div className="col-md-2">
                <select class="form-control" id="exampleFormControlSelect1" >
      <option value=''>Category*</option>
      <option>Spring Fun</option>
      <option>Eat Out</option>
      <option>Animal Fun</option>
      <option>Play and Fun</option>
    </select>
                </div>
                <div className="col-md-2">
            <select class="form-control" id="exampleFormControlSelect1" disabled>
      <option value=''>Sub Category</option>
      <option>Spring Fun</option>
      <option>Eat Out</option>
      <option>Animal Fun</option>
      <option>Play and Fun</option>
    </select>
            </div>
              </div>
            </div>

            <div className="col-md-2 rightContent">
          <button className='btn'>More Filter</button>
            </div>
          </div>
        </div>
      </section>

      <section className="searchResultSection py-3 container">
<div className="row">
  <div className="col-md-8 leftContainer">
<p className='mainPara pb-1'>Search Results</p>
<div className="col-md-12">
  {leftContainerCards.map(card=>{
    return(
      <div key={card.id} className="card-items">
       <div class="card">
  <div class="row no-gutters">
    <div class="col-md-6">
      <img src={card.image} class="card-img" alt="..."/>
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <p className='card-top-para'>{card.cardTopPara}</p>
        <h6 class="card-title">{card.cardTitle}</h6>
        <button className='btn starRateButton absolute-center mb-2'>
          <img className='mr-2' src="https://drfsb8fjssbd3.cloudfront.net/images/new-white-star.svg" alt="..." /> 
          <span> {card.buttonLeftText}</span>
        </button>
        <h6 class="card-text bottom-text mb-0">{card.bottomText}</h6>
      <div className="row">
 <div className="col-md-6" align='left'><h6>{card.bottomLeftText}</h6></div>
       <div className="col-md-6" align='right'><h6>{card.bottomRightText}</h6></div>
      </div>
      <button className= {`${!card.buttonText?'d-none' : 'btn bottomButton'}`}>{card.buttonText}</button>
      </div>
    </div>
  </div>
</div>
      </div>
    )
  })}

</div>

  </div>
  <div className="col-md-4 rightContainer">
<p className='mainPara pb-1 '>Featured</p>
<div className="col-md-12">
  {rightContainerCards.map(card=>{
    return(
      <div key={card.id} className="card-items">
<div class="card">
  <img src={card.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-title">{card.cardTitle}</p>
    <div className="row">
      <div className="col-md-6" align='left'>
        <button className='btn starRateButton absolute-center'>
          <img className='mr-2' src="https://drfsb8fjssbd3.cloudfront.net/images/new-white-star.svg" alt="..." /> 
          <span> {card.bottomLeftButtonText}</span>
        </button>
        </div>
      <div className="col-md-6" align='right'><h6>{card.bottomRightText}</h6></div>
    </div>
  </div>
</div>
      </div>
    )
  })}
</div>
  </div>
</div>
      </section>
    </div>
  )
}

export default Activity
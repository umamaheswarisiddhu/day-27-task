import './App.css';
import Content from './Content'
import Products from './Products'
import Footer from './Footer'
import Cart from './Cart'
import { useState } from 'react';




function App() {

  let spec = [
    {
      id: 1,
      brand: "ENFLIED METEOR 350",
      view: true,
      sale: false,
      price: "230000 - 250000",
      photo: "https://www.royalenfield.com/content/dam/royal-enfield/india/motorcycles/landing/continental-gt-new.jpg"
    },
    {
      id: 2,
      brand: "ENFLIED CLASSIC 350",
      rate: "***",
      view: false,
      sale: true,
      price: 200000,
      photo: "https://images.carandbike.com/bike-images/big/royal-enfield/classic-350/royal-enfield-classic-350.jpg?v=49"
    },
    {
      id: 3,
      brand: "ENFLIED BULLET TRIALS",
      view: false,
      sale: true,
      price: 160000,
      photo: "https://www.royalenfield.com/content/dam/royal-enfield/india/motorcycles/meteor/colours/studio-shots/fireball-yellow/18-yellow.png"
    },
    {
      id: 4,
      brand: "ENFLIED THUNDERBIRD",
      rate: "***",
      view: false,
      sale: false,
      price: 1400000,
      photo: "https://i.pinimg.com/736x/15/f5/1e/15f51e1c7f772a7a2076ab0604f450cf.jpg"
    },
    {
      id: 5,
      brand: "ENFLIED HIMALAYAN",
      price: 1800000,
      view: false,
      sale: true,
      photo: "https://images.hindustantimes.com/auto/auto-images/bikes/royalenfield/royalenfieldmeteor350/1630601675177_royalenfieldmeteor350-1"
    },
    {
      id: 6,
      brand: "ENFLIED INTERCEPTOR",
      price: "1300000 - 1500000",
      view: true,
      sale: false,
      photo: "https://www.rushlane.com/wp-content/uploads/2021/06/royal-enfield-new-motorcycle-launch-price-may-2021-1200x675.jpg"
    },
    {
      id: 7,
      brand: "ENFLIED BULLET CLASICC 350CC",
      price: 1800000,
      rate: "***",
      view: false,
      sale: true,
      photo: "https://i.pinimg.com/736x/1d/ce/ae/1dceae5c0615fb34328e3bd0001e88e8.jpg"
    },
    {
      id: 8,
      brand: "ENFLIED BULLET",
      price: 200000,
      rate: "***",
      view: false,
      sale: false,
      photo: "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=http://cms.haymarketindia.net/model/uploads/modelimages/Royal-Enfield-Classic-350-130120211558.png&w=872&h=578&q=75&c=1"
    }
  ]

  const [items, setitems] = useState([])
  const [totals, settotal] = useState(0)

  let addcart = (item) => {
    setitems([...items, item]);
    settotal(totals + item.price);
  }

  let handleremove = (item) => {
    let indexs = items.some(obj => obj.id === item.id)
    let newcart = items.splice(indexs, 1);
    setitems([...newcart])
    settotal(totals - item.price)
  }
  return (

    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
              <li className="nav-item"><a class="nav-link" href="#!">About</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#!">All Products</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                  <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Content />
      <div className='row'>
        <div className='col-sm-12 col-md-8 col-lg-10'>
          <section class=" py-5">
            <div class="container px-4 px-lg-5 mt-5">
              <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {spec.map((data) => {
                  return <Products datas={data} buttonclick={addcart} cart={items} />
                })}
              </div>
            </div>
          </section>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-2'>
          <ol class="list-group list-group-numbered container"><br></br><br></br>
            <div className='text-center fw-bolder fs-1 '>Cart</div>
            {items.map((itemdata) => {
              return <Cart data={itemdata} handle={handleremove} />
            })}
          </ol>
          <div className='fw-bolder fs-5'>Total : $ {totals} </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default App;


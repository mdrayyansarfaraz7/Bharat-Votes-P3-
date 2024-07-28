import { Link } from "react-router-dom";

function State(){
    const states = [
        { name: 'Andhra Pradesh', image: 'Andhra Pradesh.png' },
        { name: 'Arunachal Pradesh', image: 'Arunachal Pradesh.png' },
        { name: 'Assam', image: 'Assam.png' },
        { name: 'Bihar', image: 'Bihar.png' },
        { name: 'Chhattisgarh', image: 'Chattisgar.png' },
        { name: 'Goa', image: 'Goa.png' },
        { name: 'Gujarat', image: 'Gujarat.png' },
        { name: 'Haryana', image: 'Haryana.png' },
        { name: 'Himachal Pradesh', image: 'Himachal Pradesh.png' },
        { name: 'Jammu and Kashmir', image: 'Jammu & Kashmir.png' },
        { name: 'Jharkhand', image: 'Jharkhand.png' },
        { name: 'Karnataka', image: 'Karnataka.png' },
        { name: 'Kerala', image: 'Kerala.png' },
        { name: 'Madhya Pradesh', image: 'Madhya Pradesh.png' },
        { name: 'Maharashtra', image: 'Maharashtra.png' },
        { name: 'Manipur', image: 'Manipur.png' },
        { name: 'Meghalaya', image: 'Meghalaya.png' },
        { name: 'Mizoram', image: 'Mizoram.png' },
        { name: 'Nagaland', image: 'Nagaland.png' },
        { name: 'Odisha', image: 'Odisha.png' },
        { name: 'Punjab', image: 'Punjab.png' },
        { name: 'Rajasthan', image: 'Rajasthan.png' },
        { name: 'Sikkim', image: 'Sikkim.png' },
        { name: 'Tamil Nadu', image: 'Tamil Nadu.png' },
        { name: 'Telangana', image: 'Telangana.png' },
        { name: 'Tripura', image: 'Tripura.png' },
        { name: 'Uttarakhand', image: 'Uttarakhand.png' },
        { name: 'Uttar Pradesh', image: 'Uttar Pradesh.png' },
        { name: 'West Bengal', image: 'West Bengal.png' },
        { name: 'Andaman and Nicobar Islands', image: 'Andaman and Nicobar Islands.png' },
        { name: 'Chandigarh', image: 'Chandigarh.png' },
        { name: 'Dadra and Nagar Haveli Dadra and Nagar Haveli and Daman and Diu', image: 'Dadra and Nagar Haveli and Daman and Diu.png' },
        { name: 'Delhi', image: 'Delhi.png' },
        { name: 'Lakshadweep', image: 'Lakshadweep.png' },
        { name: 'Puducherry', image: 'Puducherry.png' },
      ];
    return(
        <>
        <h1 className='StatesHeading'>Official's Panel</h1>
        <div className='CardGrid'>
      {states.map((state, index) => (
        <Link className='Link' to={`/State/${state.name}`}>
        <div key={index} className='stateCard'>
          <h2>{state.name}</h2>
          <img className='cardImage' src={`/${state.image}`} alt={state.name} />
        </div>
      </Link>
        
      ))}
    </div>
        </>
    )
}

export default State
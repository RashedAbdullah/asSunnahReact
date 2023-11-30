import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { VscEmptyWindow } from "react-icons/vsc";


const ClothTable = ({allData, setAllData}) => {

    const deleteSingleData = (ind)=>{
        const filteredItems = allData.filter((value, index)=> index !== ind);
        setAllData(filteredItems);

    }

  return (
    <div className='outsiteTable'>
        {
          allData.length > 0
          ?
          <div className='TableDiv'>
            <table>
            <tbody>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Size</th>
                <th>Color</th>
                <th>Description</th>
                <th>Remove</th>
            </tr>
            {
              allData.map((cloth, ind)=>(
                <tr key={ind}>
                <td>{cloth.clothID}</td>
                <td>{cloth.clothName}</td>
                <td>৳: {cloth.clothPrice}</td>
                <td>{cloth.clothQuantity}</td>
                <td>{cloth.fav_color}</td>
                <td>{cloth.colors}</td>
                <td>{cloth.description}</td>
                <td onClick={()=>deleteSingleData(ind)} className='dltBtn'><AiOutlineCloseCircle /></td>
            </tr>
              ))
            }
            </tbody>
            </table>
            <div className='allDataClear'><button onClick={()=>{setAllData([])}}>CLear all data</button></div>
          </div>
          :
          <div className='noItem'>
            <h2><VscEmptyWindow /></h2>
            <p>No item added yet!</p>
          </div>
        }
    </div>
  )
}

export default ClothTable;
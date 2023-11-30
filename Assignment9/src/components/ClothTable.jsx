import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";


const ClothTable = ({allData, setAllData}) => {

    const deleteSingleData = (ind)=>{
        const filteredItems = allData.filter((value, index)=> index !== ind);
        setAllData(filteredItems);

    }

  return (
    <div>
        {
          allData.length > 0
          ?
          <div>
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
                <td onClick={()=>deleteSingleData(ind)}><AiOutlineCloseCircle /></td>
            </tr>
              ))
            }
          </tbody>
        </table>
          <div><button onClick={()=>{setAllData([])}}>CLear all data</button></div>
        </div>
        :
        <div>No item added yet!</div>
        }
    </div>
  )
}

export default ClothTable;
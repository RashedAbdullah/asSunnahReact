import { useEffect, useState } from "react"
import ClothTable from './ClothTable';
import { localStorageData } from './Localstorage';

const FormData = () => {

    const [allData, setAllData] = useState(localStorageData());
    const [cencel, setCencel] = useState("");

    const handleInputValues = (event)=>{

        let inputValue = {};
        const allElemet = [...event.target.elements];
        allElemet.forEach((singleElement)=>{

            if(singleElement.type === "radio" && !singleElement.checked){
                return;
            }

            inputValue[singleElement.name] = singleElement.value;
            singleElement.checked = false;
            singleElement.value = "";
            setCencel(singleElement.value)

        })
        setAllData([...allData, inputValue]);

    }

    const handleForm= (e)=>{
        e.preventDefault();
        handleInputValues(e);
    }


    // Localstorage:
    useEffect(()=>{
        localStorage.setItem("userData", JSON.stringify(allData));
    },
    [allData]);


  return (

    <div className="mainClothDiv">
        <form id="mainForm" onSubmit={handleForm}>
            <div className="formHead"><h2>Input cloth details</h2></div>
            <div className="sameSizeInput">Id: <input min={1} required type="number" name='clothID' placeholder="Enter cloth id"/></div>
            <div className="sameSizeInput">Name: <input required type="text" name='clothName' placeholder="Enter cloth name"/></div>
            <div className="sameSizeInput">Price<input min={1} required type="number" name='clothPrice' placeholder="Enter price"/></div>
            <div className="sameSizeInput">Quantity<input min={1} max={99} required type="number" name='clothQuantity' placeholder="Enter quantity"/></div>
            <div className="sameSizeInput">Color: <select name="colors">
                <option>Red</option>
                <option>Green</option>
                <option>Blue</option>
                </select>
            </div>
            <div className="sameSizeInput">Size:
                <label className="sizeMarging" htmlFor="radio1"><input value="XL" name='fav_color' id='radio1' type="radio" />XL</label>
                <label htmlFor="radio2"><input value="M" name='fav_color' id='radio2' type="radio" />M</label>
                <label htmlFor="radio3"><input value="L" name='fav_color' id='radio3' type="radio" />L</label>
            </div>
            <div className="sameSizeInput">Description: <textarea maxLength="20" name="description" id="" cols="30" rows="1" placeholder="Enter your comment briefly"></textarea></div>
            <div className="terms"><input required id='terms' type="checkbox" /><label htmlFor="terms">Term and condition</label></div>
            <button className="submitBtn">Submit</button>
        </form>
        <ClothTable allData={allData} setAllData={setAllData} />
    </div>
  )
}

export default FormData;
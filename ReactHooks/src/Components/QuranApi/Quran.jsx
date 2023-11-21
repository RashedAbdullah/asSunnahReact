import React, { useEffect, useState } from 'react'

const Quran = () => {

    const [quranData, getQuranData] = useState([]);
    useEffect(()=>{

      const URL = `https://api.alquran.cloud/v1/surah/4`;
        // const URL = `https://quranenc.com/api/v1/translation/sura/english_saheeh/2`;
        // const URL = `https://quranenc.com/api/v1/translation/sura/${translation_key}/${sura_number}`;
        fetch(URL)
        .then(res => res.json())
        .then(data => getQuranData(data));
    },[]);
    console.log(quranData.data)
  return (
    <div>
        <h3>This is map</h3>
    </div>
  )
}

export default Quran;
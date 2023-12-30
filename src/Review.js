import React, { useState } from 'react'; // React import edildi
import people from './data'; // data dosyasındaki bilgiler people olarak burda kullanılır hale getirildi.
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';  // react icon kütüphanesinden iconlar içe aktarıldı

const Review = () => { // yorumlar komponenti oluşturuldu. 
  const [index,setIndex] = useState (0) //index 
  const {name,job,image,text} = people[index] //people index den name job image text olarak içeri alınıyor

  const checkNumber = (number) =>{ //numaraları kontrol fonksiyonu
    if(number > people.length -1){ // sayi people olarak aldığımız dizinin uzunluğundan büyük ise 0 geri döndürüyor.
      return 0
    }
    if(number < 0 ){ //sayi sifirdan küçük ise peoplenın uzunluğundan bir eksik geri döndürülüyor. 
      return people.length -1
    }
    return number
  }

  const nextPerson = () =>{ //ileri butonu için çalışan fonksiyon
    setIndex((index)=>{
      let newIndex = index + 1
      return checkNumber(newIndex) //bize gelen indexi checknumber fonksiyonuna callback olarak gönderip kontrol ediliyor.
    })
  }

  const prevPerson = () =>{  // geri butonu 
    setIndex((index)=>{
      let newIndex = index - 1
      return checkNumber(newIndex) // sayiyi checknumber fonnksiyonuna gönderiyor.
    })
  }


  const randomPerson = ()=>{  // rastgele sayi oluşturmak için fonksiyon
    let randomNumber = Math.floor(Math.random() * people.length)  //math kütüphanesinden rastgele sayı oluşturup aşşağı yuvarlanıyor.
   if(randomNumber === index){
    randomNumber = index + 1 // eğer index ile random sayı eşit ise indexe bir ekleniyor random sayıya aktarılıyor.
  }
  setIndex(checkNumber(randomNumber))
    console.log(randomNumber)
  }

  return <article className='review'> // html etiketleri oluşturulmuş.
    <div className='img-container'>
      <img src={image} alt={name} className='person-img'/>
      <span className='quote-icon'>
      <FaQuoteRight /> // icon eklenmiş
      </span>
    </div>
    
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
    <div className='button-container'>
      <button className='prev-btn' onClick={prevPerson}> // butona fonksiyon eklenmiş
      <FaChevronLeft/>
      </button>
      <button className='next-btn' onClick={nextPerson}> // butona fonksiyon eklenmiş
      <FaChevronRight/>
      </button>
    </div>
    <button className='random-btn' onClick={randomPerson}>butona fonksiyon eklenmiş
      Suprise Me
      </button>
    </article>;
};

export default Review;

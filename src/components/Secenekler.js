 import React from "react";
import {FaPlus,FaMinus,FaGithub} from "react-icons/fa"
import {VscFileBinary} from "react-icons/vsc"
import $ from "jquery"
const Secenekler = () => {
  const myRef = React.useRef(null)
  const [menuler,setMenu] = React.useState([
    {id:1, title:"Toplama", icon:<FaPlus/>},
    {id:2, title:"Çıkarma", icon:<FaMinus/>},
    {id:3, title:"Binary", icon:<VscFileBinary/>},
    {id:4, title:"Ondalıktan ikiliğe çevirme", icon:<VscFileBinary/>},
    {id:5, title:"Ondalıktan sekizliğe çevirme", icon:<VscFileBinary/>},
    {id:6, title:"Ondalıktan onaltılığa çevirme", icon:<VscFileBinary/>},
    {id:7, title:"Onaltılıktan ikiliğe çevirme", icon:<VscFileBinary/>},
    {id:8, title:"Onaltılıktan sekizliğe çevirme", icon:<VscFileBinary/>},
    {id:9, title:"Onaltılıktan onluğa çevirme", icon:<VscFileBinary/>},
    {id:10, title:"İkilikten sekizliğe çevirme", icon:<VscFileBinary/>},
    {id:11, title:"İkilikten onluğa çevirme", icon:<VscFileBinary/>},
    {id:12, title:"İkilikten onaltılığa çevirme", icon:<VscFileBinary/>},
    {id:13, title:"Sekizlikten onluğa çevirme", icon:<VscFileBinary/>},
    {id:14, title:"Sekizlikten onaltılığa çevirme", icon:<VscFileBinary/>},
    {id:15, title:"Sekizlikten ikiliğe çevirme", icon:<VscFileBinary/>},
    {id:16, title:"Fark", icon:<FaMinus/>},
    {id:17, title:"Bölüm", icon:<span>%</span>},
    {id:18, title:"Tek Çift", icon:<span>2 | 1</span>},
    {id:19, title:"Yakında", icon:<span>?</span>},
    {id:20, title:"Yakında", icon:<span>?</span>}
  ])
  const [menutitle,setMTitle] = React.useState("");
  const [binsayisi,setBinaryNumber] = React.useState(0);
  const [sayi1,setSayi1] = React.useState(0);
  const [sayi2,setSayi2] = React.useState(0);
  const [islemsonuclari,setIslemSonucu] = React.useState(null)
  const [hata,setHataState] = React.useState(false)
  

  const MenuGuncelle = (bool) =>{

    return setMTitle(bool), setIslemSonucu(0)
  }
  const Animasyon = (e) =>{
    e.classList.add("shrink");
      sleep(500).then(() => {
    // Do something after the sleep!
    e.classList.remove("shrink");
  });
  }
  const IslemiYap = (e) =>{
    e.preventDefault();
    if(menutitle === "Binary"){
      if(isNumber(binsayisi)){
      const bin = binsayisi;
      const sonuc = parseInt((bin + '').replace(/[^01]/gi, ''), 2);
      return console.log(`Çevirilen Binary: ${bin} \nYapılan işlemin sonucu: ${sonuc} `), setIslemSonucu(sonuc) ;
    }
    else{

      setHataState(true);
      sleep(1000).then(() => {
        setHataState(false)
      });

    }
    }
    else if(menutitle === "Toplama"){
      if(isNumber(sayi1) && isNumber(sayi2)){
      const sonuc = Number(sayi1) + Number(sayi2);
      return console.log(`Toplanan Sayılar: ${sayi1} ve ${sayi2} \nYapılan işlemin sonucu: ${sonuc} `), setIslemSonucu(sonuc) ;
    }
    else{
      setHataState(true);
      sleep(1000).then(() => {
        setHataState(false)
      });
    }
    }
    else if(menutitle === "Çıkarma"){
      if(isNumber(sayi1) && isNumber(sayi2)){
      const sonuc = Number(sayi1) - Number(sayi2);
      return console.log(`Çıkarılan Sayılar: ${sayi1} ve ${sayi2} \nYapılan işlemin sonucu: ${sonuc} `), setIslemSonucu(sonuc) ;
    }
    else{
      setHataState(true);
      sleep(1000).then(() => {
        setHataState(false)
      });
    }
    }
    else if(menutitle === "Fark"){
      if(isNumber(sayi1) && isNumber(sayi2)){
      const sonuc = sayi1 > sayi2 ? Number(sayi1) - Number(sayi2) : Number(sayi2) - Number(sayi1) ;
      return console.log(`Çıkarılan Sayılar: ${sayi1} ve ${sayi2} \nYapılan işlemin sonucu: ${sonuc} `), setIslemSonucu(sonuc) ;
      }
      else{
        setHataState(true);
        sleep(1000).then(() => {
          setHataState(false)
        });
      }
    }
    else if(menutitle === "Bölüm"){
      if(isNumber(sayi1) && isNumber(sayi2)){
      const sonuc = Number(sayi1) / Number(sayi2)
      return console.log(`Bölünen Sayılar: ${sayi1} ve ${sayi2} \nYapılan işlemin sonucu: ${sonuc} `), setIslemSonucu(sonuc) ;
    }
    else{
      setHataState(true);
      sleep(1000).then(() => {
        setHataState(false)
      });
    }
    }
    else if(menutitle === "Tek Çift"){

      if(isNumber(sayi1) ){
      const sonuc = Number(sayi1) % 2 == 0 ? "Çift" : "Tek" ;
      return console.log(`Girilen Sayı: ${sayi1}  \n Yapılan işlemin sonucu: ${sonuc} `), setIslemSonucu(sonuc) ;
      }
      else{
        setHataState(true);
        sleep(1000).then(() => {
          setHataState(false)
        });
      }

    }
    else if(menutitle === "Ondalıktan ikiliye çevirme"){
      if(isNumber16(sayi1)){
        return parseInt(sayi1, 10).toString(2), setIslemSonucu(parseInt(sayi1, 10).toString(2));
      }
      else{
        setHataState(true);
        sleep(1000).then(() => {
          setHataState(false)
        });
      }

 }
 else if(menutitle === "Ondalıktan sekizliğe çevirme"){
  if(isNumber16(sayi1)){
    return parseInt(sayi1, 10).toString(8), setIslemSonucu(parseInt(sayi1, 10).toString(8));
  }
  else{
    setHataState(true);
    sleep(1000).then(() => {
      setHataState(false)
    });
  }

}
else if(menutitle === "Ondalıktan onaltılığa çevirme"){
  if(isNumber16(sayi1)){
    return parseInt(sayi1, 10).toString(16), setIslemSonucu(parseInt(sayi1, 10).toString(16));
  }
  else{
    setHataState(true);
    sleep(1000).then(() => {
      setHataState(false)
    });
  }

}
else if(menutitle === "Onaltılıktan sekizliğe çevirme"){
  if(isNumber16(sayi1)){
    return parseInt(sayi1, 16).toString(8), setIslemSonucu(parseInt(sayi1, 16).toString(8));
  }
  else{
    setHataState(true);
    sleep(1000).then(() => {
      setHataState(false)
    });
  }

}
else if(menutitle === "Onaltılıktan ikiliğe çevirme"){
  if(isNumber16(sayi1)){
    return parseInt(sayi1, 16).toString(2), setIslemSonucu(parseInt(sayi1, 16).toString(2));
  }
  else{
    setHataState(true);
    sleep(1000).then(() => {
      setHataState(false)
    });
  }

}
else if(menutitle === "Onaltılıktan onluğa çevirme"){
  if(isNumber16(sayi1)){
    return parseInt(sayi1, 16).toString(10), setIslemSonucu(parseInt(sayi1, 16).toString(10));
  }
  else{
    setHataState(true);
    sleep(1000).then(() => {
      setHataState(false)
    });
  }

}

else if(menutitle === "İkilikten sekizliğe çevirme"){
  if(isNumber(sayi1)){
    return parseInt(sayi1, 2).toString(8), setIslemSonucu(parseInt(sayi1, 2).toString(8));
  }
  else{
    setHataState(true);
    sleep(1000).then(() => {
      setHataState(false)
    });
  }

}
else if(menutitle === "İkilikten onluğa çevirme"){
  if(isNumber(sayi1)){
    return parseInt(sayi1, 2).toString(10), setIslemSonucu(parseInt(sayi1, 2).toString(10));
  }
  else{
    setHataState(true);
    sleep(1000).then(() => {
      setHataState(false)
    });
  }

}
else if(menutitle === "İkilikten onaltılığa çevirme"){
  if(isNumber(sayi1)){
    return parseInt(sayi1, 2).toString(16), setIslemSonucu(parseInt(sayi1, 2).toString(16));
  }
  else{
    setHataState(true);
    sleep(1000).then(() => {
      setHataState(false)
    });
  }

}

else if(menutitle === "Sekizlikten onluğa çevirme"){
  if(isNumber16(sayi1)){
    return parseInt(sayi1, 8).toString(10), setIslemSonucu(parseInt(sayi1, 8).toString(10));
  }
  else{
    setHataState(true);
    sleep(1000).then(() => {
      setHataState(false)
    });
  }

}
else if(menutitle === "Sekizlikten ikiliğe çevirme"){
  if(isNumber16(sayi1)){
    return parseInt(sayi1, 8).toString(2), setIslemSonucu(parseInt(sayi1, 8).toString(2));
  }
  else{
    setHataState(true);
    sleep(1000).then(() => {
      setHataState(false)
    });
  }

}
else if(menutitle === "Sekizlikten onaltılığa çevirme"){
  if(isNumber16(sayi1)){
    return parseInt(sayi1, 8).toString(16), setIslemSonucu(parseInt(sayi1, 8).toString(16));
  }
  else{
    setHataState(true);
    sleep(1000).then(() => {
      setHataState(false)
    });
  }

}

















  }
  const [tema, setTema] = React.useState("kart")
  const [containertema, setContainerTema] = React.useState("container-islem")
  const [bodytema, setBodyTema] = React.useState("bodyvarsayilan")
  React.useEffect(()=>{
    document.body.className = localStorage.getItem("body") || bodytema
    setTema(localStorage.getItem("karttema") ||tema)
    setContainerTema(localStorage.getItem("containerbody") ||containertema)
 
   
  })
    return (
      <>
  
      <h1 className="container d-flex justify-content-center align-items-center" style={{marginTop:"50px",color:"white",transform:"skew(-15deg)",fontSize:"60px"}}>Gryffindor Math</h1>
      <small className="container d-flex justify-content-center align-items-center" style={{marginTop:"50px",color:"lightgray", fontSize:"20px"}}> Yapmak istediğiniz işlemi seçin ve aşağı inin</small>
      <h5 className="container d-flex justify-content-center align-items-center" style={{marginTop:"5px",color:"lightgray",cursor:"pointer"}} onClick={(e)=>(window.open("https://github.com/mhmtbsrglu0","_blank"))}><FaGithub/> mhmtbsrglu0</h5>
      
      
      <div className="Renkler container  d-flex justify-content-center align-items-center">
        <div className="varsayılan"  onClick={(e)=>(setTema("kart"),localStorage.setItem("karttema","kart"),setContainerTema("container-islem"),localStorage.setItem("containerbody","container-islem"),setBodyTema("bodyvarsayilan"), localStorage.setItem("body","bodyvarsayilan"))}></div>
        <div className="fistikyesili" onClick={(e)=>(setTema("kartfistik"),localStorage.setItem("karttema","kartfistik"),setContainerTema("container-islem_fistikyesili"),localStorage.setItem("containerbody","container-islem_fistikyesili"),setBodyTema("bodyyesil"), localStorage.setItem("body","bodyyesil"))}></div>
        <div className="turuncu"  onClick={(e)=>(setTema("kartturuncu"),localStorage.setItem("karttema","kartturuncu"),setContainerTema("container-islem_turuncu"),localStorage.setItem("containerbody","container-islem_turuncu"),setBodyTema("bodyturuncu"), localStorage.setItem("body","bodyturuncu"))}></div>
        <div className="mavi"  onClick={(e)=>(setTema("kartmavi"),localStorage.setItem("karttema","kartmavi"),setContainerTema("container-islem_mavi"),localStorage.setItem("containerbody","container-islem_mavi"),setBodyTema("bodymavi"), localStorage.setItem("body","bodymavi"))}></div>
      </div>
      <div className="container d-flex flex-wrap justify-content-center align-items-center margintop">
   
          {menuler.map(items =>(
            <div className={tema} onClick={(e)=>(MenuGuncelle(items.title), Animasyon(e.currentTarget))}>{items.icon}<h4>{items.title}</h4></div>
          ))}

          
      </div>
   
      {menutitle && menutitle != "Yakında" ? (
      <div  className="container d-flex flex-column justify-content-center align-items-center margintop" ref={myRef}>
    
        <div className={containertema}>
        <h1 className="h4mobil">{menutitle}</h1>
         {menutitle != "Binary" && menutitle != "Tek Çift"  && menutitle != "Ondalıktan ikiliye çevirme" && menutitle != "Yakında"
         && menutitle != "Ondalıktan sekizliğe çevirme"  && menutitle != "Ondalıktan onaltılığa çevirme"
         && menutitle != "Onaltılıktan ikiliğe çevirme"  && menutitle != "Onaltılıktan sekizliğe çevirme"  && menutitle != "Onaltılıktan onluğa çevirme" 
         && menutitle != "Sekizlikten onluğa çevirme"  && menutitle != "Sekizlikten ikiliğe çevirme"  && menutitle != "Sekizlikten onaltılığa çevirme"  
         & menutitle != "İkilikten onluğa çevirme"  && menutitle != "İkilikten sekizliğe çevirme"  && menutitle != "İkilikten onaltılığa çevirme"  ? (
            <>
            <input type="text" placeholder="Sayı 1" value={sayi1} onChange={(e)=>(setSayi1(e.target.value))} />
            <input type="text" placeholder="Sayı 2"  value={sayi2} onChange={(e)=>(setSayi2(e.target.value))}/>
            </>
         ):
         (
           <>
           {menutitle != "Yakında" ? (
              <input type="text" placeholder="Sayı giriniz..." value={menutitle === "Binary" ? binsayisi : sayi1} onChange={(e)=>menutitle === "Binary" ? setBinaryNumber(e.target.value) : setSayi1(e.target.value)}/>
          
           ):""}
           </>
         )}
          <h4>Sonuc: {islemsonuclari || <small>Bir işlem yapılmadı.</small>}</h4>
          {hata ? <p style={{color:"red"}}>Hata ! Harf kullanamazsınız.</p> : ""}
        
          <button type="submit" className="btn" onClick={IslemiYap}>Hesapla</button>
        </div>

      </div>):""}
    
      </>
    );
  };
  function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  function isNumber(n) { 
    var regex=/^[0-9]+\.?[0-9]*$/;;
    if (n.match(regex))
    {
      return n
    }
  }
  function isNumber16(n) { 
    var regex=/^[a-zA-Z0-9_]+$/;
    if (n.match(regex))
    {
      return n
    }
  }
export default Secenekler;
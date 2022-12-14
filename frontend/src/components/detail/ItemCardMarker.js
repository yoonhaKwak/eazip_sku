import React, { useState } from "react";
import styled from "styled-components";
import DefaultImg from "../../styles/img/DefaultHomeImg.svg";
import Officetell from "../../styles/img/Officetell.svg";
import Villa from "../../styles/img/Villa.svg";
import Oneroom from "../../styles/img/Oneroom.svg";
import Tworoom from "../../styles/img/Tworoom.svg";
import Threeroom from "../../styles/img/Threeroom.svg";
import Housing from "../../styles/img/Housing.svg";
import ItemDetail2 from 'components/part/ItemDetail2';
import LeftArrow from '../../styles/icons/Left.svg';
import RightArrow from '../../styles/icons/Right.svg';
import Jeonseimg from '../../styles/img/Jeonse.svg';
import Monthlyimg from '../../styles/img/Monthly.svg';
import Tradingimg from '../../styles/img/Trading.svg';
import Middle from '../../styles/icons/Middle.svg';
import Low from '../../styles/icons/Low.svg';
import High from '../../styles/icons/High.svg';
import Management from '../../styles/icons/Management.svg';
import ParkingLot from '../../styles/icons/Parking.svg';
import RoomNBath from '../../styles/icons/RoomNBath.svg';
import "../../styles/css/slick.css"
import "../../styles/css/slick-theme.css"
import Slider from "react-slick";
import Heart from "../part/Heart";
import aircon_hanging from "../../styles/icons/options/aircon_hanging.svg";
import aircon_stand_system from "../../styles/icons/options/aircon_stand_system.svg";
import bath from "../../styles/icons/options/bath.svg";
import bed from "../../styles/icons/options/bed.svg";
import bidet from "../../styles/icons/options/bidet.svg";
import cardkey from "../../styles/icons/options/cardkey.svg";
import CCTV from "../../styles/icons/options/CCTV.svg";
import closet from "../../styles/icons/options/closet.svg";
import couch from "../../styles/icons/options/couch.svg";
import delivery_box from "../../styles/icons/options/delivery_box.svg";
import desk from "../../styles/icons/options/desk.svg";
import drier from "../../styles/icons/options/drier.svg";
import elevator from "../../styles/icons/options/elevator.svg";
import entrance_security from "../../styles/icons/options/entrance_security.svg";
import fridge from "../../styles/icons/options/fridge.svg";
import gas_induction from "../../styles/icons/options/gas_induction.svg";
import interphone from "../../styles/icons/options/interphone.svg";
import microwave from "../../styles/icons/options/microwave.svg";
import oven from "../../styles/icons/options/oven.svg";
import security from "../../styles/icons/options/security.svg";
import shoe from "../../styles/icons/options/shoe.svg";
import shower_booth from "../../styles/icons/options/showr_booth.svg";
import sink from "../../styles/icons/options/sink.svg";
import table from "../../styles/icons/options/table.svg";
import wardrobe from "../../styles/icons/options/wardrobe.svg";
import washing from "../../styles/icons/options/washing.svg";
import window_guard from "../../styles/icons/options/window_guard.svg";
import fire_alarm from "../../styles/icons/options/fire_alarm.svg";
import dishwasher from "../../styles/icons/options/dishwasher.svg";
import OptionMap from "API/OptionMap";
import axios from "axios";


const Block = styled.div`
 ul{ 
  margin-left:-5rem;
  margin-top:-1rem;
  margin-bottom:1rem;}
li{
  list-style:none;

}
`;


const Table = styled.div`
width:100%;
min-width: 491px;
height:278px;
float:left;
    background-color:white;


    img{
      padding-left:20px;
      padding-top:20px;
      padding-bottom:20px;
      width:238px;
      height:238px;
    }
.rightarea{
  float:right;
  display:fixed;
  width:234px;
  height:278px;
 
}
.leftarea{
  float:left;
  display:fixed;
  width:100px;
  min-width:100px;
  max-width:100px;
  height:278px;
  overflow:visible;

}
    border-bottom:1px solid rgba(0,0,0,0.1);
:hover{
  background-color:#f9f9f9;
}

`;
const ListFeature = styled.div`
  height: 100%;
  width: 80%;
  margin-bottom:12px;
  margin-top:24px;
 padding-left:12px;
 word-break:keep-all;
 overflow:visible;

  .default{
    width:45px;
    height:21px;
    padding: 0 8px 0 0;
  }
  .roomdefault{
    width:45px;
    height:21px;
    padding:  0 0 0 0;
  }
  .officetell{
    width:66px;
    height:21px;
    padding: 0 8px 0 0 ;
  }
  .threeroom{
    width:66px;
    height:19px;
    padding:  0 0 0 0;
  }
  .list{
width:220px;
height:100%
  }
  .list .bold{
    font-weight: 700;
    font-size:19px;
    
  }


`;
const WTF = styled.div`
width:35px;
height:216px;
margin-top:24px;
cursor: pointer;
`;


/*---------------------------------------------------[??????????????? ?????? ?????? ????????????]-------------------------------------------------------*/
/*-----------------------------------------------------------[??????????????? ?????????]-------------------------------------------------------------------*/

const ImageArea = styled.div`
width: 750px;
height: 400px;
margin-left:auto;
margin-right:auto;
margin-top:20px;
background: #e2e2e2;
border-radius: 15px;
.image{
 

  position:flex;


}
.image img{
  width:400px;
  height:400px;
  padding-left:125px;
  padding-right:125px;
  
}
.rightbutton{
width:50px;
height:50px;
float:right;
position:flex;
margin-top:175px;
}

.leftbutton{
width:50px;
height:50px;
float:left;
position:flex;
margin-top:175px;
}

`;
const settings = {

    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <img src={RightArrow} alt="" />,
    prevArrow: <img src={LeftArrow} alt="" />
};

/*-----------------------------------------------------------[??????,??????,???????????? ??????]-------------------------------------------------------------------*/

const SecondItem = styled.div`
width: 750px;
height: 250px;
margin-top:20px;
margin-left:auto;
margin-right:auto;
text-align:center;
background: #FDFDFD;
box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.25);
border-radius: 15px;


.tag{
padding-top:10px;
padding-left:10px;
padding-right:0;
  float:left;
}
.tag img{
    width:60px;
    height:24px;
    padding: 0 0 0 0;
  }
  .tag .officetall{
    width:92px;
    height:24px;
    padding: 0 0 0 0;
  }
  .tag .threeroom{
        width:76px;
    height:24px;
    padding: 0 0 0 0;
  }
  

.sellingtag{
  padding-top:10px;
  padding-right:10px;

  float:right;
  
}
.sellingtag img{
    width:60px;
    height:24px;
    padding: 0 0 0 0;
  }
  .bold{
    position:flex;
    font-weight: 700;
    font-size:30px;
    padding-top:40px;
  }
  .word{
    font-size:17px;
    padding-top:25px;
    
  }
  .addr{
    font-size:17px;
    padding-top:15px;
  }
`;




const ThirdItem = styled.div`

width: 750px;
height: 1678px;
margin-top:20px;
margin-left:auto;
margin-right:auto;
background: #FDFDFD;
box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.25);
border-radius: 15px;


hr{
  border: 2px solid #d4d4d4;
  width: 700px;
}
.mini hr{
  
  border: 0.5px solid #dbdbdb;
  width: 700px;

}
.Icon{

    height:200px;
    padding-left:100px;
    
}
.Icon .Tag{
    
    padding-bottom: 20px;
    bottom:15px;
    width:70px;
    height:auto;
    padding-right:88px;
    float:left;
   

  bottom: 10px;
    
}
.Icon .Tag .a img{

    padding-right:auto;
    padding-left:auto;
    width:70px;
   padding-top:27px;
    
}
.Icon .Tag .b img{

padding-right:auto;
padding-left:auto;
width:70px;
padding-top:66px;

}
.Icon .Tag .c img{

padding-right:auto;
padding-left:auto;
width:70px;
padding-top:80px;


}
.Icon .Tag .d img{

padding-right:auto;
padding-left:auto;
width:70px;
padding-top:70px;

}
.Icon .Tag .e img{

padding-right:auto;
padding-left:auto;
width:70px;
padding-top:71px;

}
.Icon .Tag .f img{

padding-right:auto;
padding-left:auto;
width:70px;
padding-top:96px;
}

.Icon .Tag .Text{
padding-top:15px;
width:70px;

text-align : center;
}
.Icon .Tag .Text .Wtf{

 white-space: nowrap;

}

.Long{
  width:690px;
  padding-top:20px;
  padding-left:40px;
  word-break:initial;
  white-space: pre-wrap;
  padding-bottom:20px;
}
`

const ForthItem = styled.div`

width: 750px;
height: 809px;
margin-top:20px;
margin-left:auto;
margin-right:auto;
background: #FDFDFD;
box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.25);
border-radius: 15px;
`;







function ItemCard({ key, ImageUrl, Category2, Feature,
    Supply, Dedicated, Jeonse, Monthly, Trading, Selling,
    Room, Deposit, SupplyP, Addr1, Addr2, LongFeature, Layer,
    AllLayer, LayerType, ManageCost, RoomN, Parking, BathN, Parking2,
    MoveDate, Direction, DirectionN, Category1, Price, Id,
    Aircon_Hanging, Fridge, Wardrobe, Microwave, Shoe, Washing, Elevator, Security_private,
    Security, Cctv, Bed, Desk, Bidet, Closet, Table, Couch, Shower_booth, Bath, Gas, Induction,
    Oven, Interphone, Cardkey, Fire_alarm, Dishwasher, Sink, Aircon_system, Aircon_standing,
    Delivery_box, Window_guard, Entrance_security, Drier, Lat, Lng }) {



    let longfeature;
    if (LongFeature === "0") {
        longfeature = null;
    }
    else {
        longfeature = LongFeature;
    }


    /*--------------------------------------------[????????? ?????? ????????? ????????????]------------------------------------------*/



    let price = (Price).toFixed(0);
    let monthly = (Monthly).toFixed(0);
    let result = (Trading / SupplyP).toFixed(0);
    let supply = (Supply).toFixed(0);
    let dedicated = (Dedicated).toFixed(0);

    let pricel;
    let realprice;
    let pricem;

    if (Selling === 3) {
        realprice = (monthly + "???").toString(); //????????? ??????
    }
    else {  //????????? ????????????
        if (price < 10000) {

            realprice = (price + "???").toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","); //??????????????? 1?????? ?????? ?????? ??????
        }
        else {
            if (price % 10000 === 0) {

                pricel = (price / 10000);         //?????? ????????? 1?????? ?????? ??? ????????? ?????? ??????
                realprice = (pricel + "???").toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

            }
            else {
                if (!(price % 1000 === 0)) { //?????? ????????? 1?????? ?????? ??? ????????? 1000????????? ??????
                    pricel = (price / 10000);
                    pricel = Math.floor(pricel);
                    pricel = pricel.toFixed(0);
                    pricem = (price % 10000);
                    pricem = pricem.toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
                    realprice = (pricel + "??? " + pricem + "???").toString();
                }
                else {    //?????? ?????????
                    pricel = price.toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{4})+(?!\d))/g, "??? ")
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
                    realprice = (pricel + "???").toString();
                }
            }
        }
    }



    //?????????
    let deposit;
    let depositl;
    if (Selling === 3) {
        if (Price < 10000) {
            depositl = Price.toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")

            deposit = ("/" + depositl + "???").toString();
        }
        else {
            if (Price % 10000 === 0) {

                pricel = (Price / 10000);         //?????? ????????? 1?????? ?????? ??? ????????? ?????? ??????
                deposit = ("/" + pricel + "???").toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

            }
            else {
                if (!(Price % 1000 === 0)) { //?????? ????????? 1?????? ?????? ??? ????????? 1000????????? ??????
                    pricel = (Price / 10000);
                    pricel = Math.floor(pricel);
                    pricel = pricel.toFixed(0);
                    pricem = (Price % 10000);
                    pricem = pricem.toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
                    Price = ("/" + pricel + "??? " + pricem + "???").toString();
                }
                else {    //?????? ?????????
                    pricel = Price.toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{4})+(?!\d))/g, "??? ")
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
                    deposit = ("/" + pricel + "???").toString();
                }
            }
        }
    }
    else {
        deposit = null;
    }



    //?????????
    let realresult;

    if (result < 10000) {

        realresult = (result + "???").toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","); //??????????????? 1?????? ?????? ?????? ??????
    }
    else {
        if (result % 10000 === 0) {

            pricel = (result / 10000);         //?????? ????????? 1?????? ?????? ??? ????????? ?????? ??????
            realresult = (pricel + "???").toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

        }
        else {
            if (!(result % 1000 === 0)) { //?????? ????????? 1?????? ?????? ??? ????????? 1000????????? ??????
                pricel = (result / 10000);
                pricel = Math.floor(pricel);
                pricel = pricel.toFixed(0);
                pricem = (result % 10000);
                pricem = pricem.toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
                realresult = (pricel + "??? " + pricem + "???").toString();
            }
            else {    //?????? ?????????
                pricel = result.toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{4})+(?!\d))/g, "??? ")
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
                realresult = (pricel + "???").toString();
            }
        }
    }
    //?????????
    let managecost;


    if (ManageCost < 10000) {

        managecost = (ManageCost).toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","); //??????????????? 1?????? ?????? ?????? ??????
    }
    else {
        if (ManageCost % 10000 === 0) {

            pricel = (ManageCost / 10000);         //?????? ????????? 1?????? ?????? ??? ????????? ?????? ??????
            managecost = (pricel + "???").toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        }
        else {
            if (!(ManageCost % 1000 === 0)) { //?????? ????????? 1?????? ?????? ??? ????????? 1000????????? ??????
                pricel = (ManageCost / 10000);
                pricel = Math.floor(pricel);
                pricel = pricel.toFixed(0);
                pricem = (ManageCost % 10000);
                pricem = pricem.toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
                managecost = (pricel + "??? " + pricem).toString();
            }
            else {    //?????? ?????????
                pricel = ManageCost.toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{4})+(?!\d))/g, "??? ")
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
                managecost = (pricel).toString();
            }
        }
    }
    managecost = managecost + "???";

    let roomnbath;

    roomnbath = "???" + RoomN + "/??????" + Bath

    let parkinglot;

    if (Parking === 0) {
        parkinglot = Parking2;
    }
    else if (Parking2 === 0) {
        parkinglot = Parking;
    }
    else if (Parking2 === 0 && Parking == 0) {
        parkinglot = 0;
    }
    else {
        parkinglot = Parking2;
    }

    parkinglot = "?????? " + parkinglot + "???"
    //????????? ?????? ????????? ?????????
    let Addr;
    if (Addr2 === "0") {
        Addr = Addr1 + " " + Layer + "???" + "(??? " + AllLayer + "???)";;
    }
    else {
        Addr = Addr2 + " " + Layer + "???" + "(??? " + AllLayer + "???)";
    };

    let Addrd
    if (Addr2 === "0") {
        Addrd = Addr1;
    }
    else {
        Addrd = Addr2;
    };
    let dirN
    if (DirectionN === null) {
        dirN = null;
    }
    else {
        dirN = '(' + DirectionN + ' ??????)'
    }


    /*-----------------------------------------------------------[????????????]-------------------------------------------------------------------*/




    /*---------------------------------------------------[????????? ???????????? ?????? ????????????]-------------------------------------------------------*/
    let image = (ImageUrl);
    if (image === null) {
        image = "[]";
    }
    else {
        image = image.replace(/\'/g, "");

        image = image.replace(/\[/g, "");
        image = image.replace(/\]/g, "");
    }
    let imagearray = image.split(',');
    const onErrorImg = (e) => {
        e.target.src = DefaultImg;
    }



    if (imagearray[0] === "") {
        image = <img src={DefaultImg} className="image--itemcard" alt="" />
    }
    else {
        image = <img src={imagearray[0]} className="image--itemcard" onError={onErrorImg} alt="" />
    }
    /*-----------------------------------------------------------[????????????]-------------------------------------------------------------------*/
    /*---------------------------------------------------[??????????????? ???????????? ?????? ????????????]-------------------------------------------------------*/
    function ImageSlide() {
        let imageA = (ImageUrl);
        if (imageA === null) {
            imageA = "[]";
        }
        else {

            imageA = imageA.replace(/\'/g, "");

            imageA = imageA.replace(/\[/g, "");
            imageA = imageA.replace(/\]/g, "");
        }
        let imageAarray = imageA.split(',');
        var imageslidearray = [];

        if (imageAarray[0] === "") {
            imageslidearray.push(<div> <img src={DefaultImg} className="image--itemcard" alt="" /></div>)
        }
        /*         else if (<img src={imagearray[0]} className="image--itemcard" onError={onErrorImg} alt="" /> === ) {
                    imageslidearray.push(<div> <img src={DefaultImg} className="image--itemcard" alt="" /></div>)
                } */
        else {

            for (var i = 0; i < imageAarray.length; i++) {
                imageslidearray.push(<div><img src={imageAarray[i]} className="image--itemcard" onError={onErrorImg} alt="" /></div>)
            };
        }
        return imageslidearray
    }
    /*-----------------------------------------------------------[????????????]-------------------------------------------------------------------*/

    /*---------------------------------------------------[????????? ????????? ?????? ????????????]-------------------------------------------------------*/
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };


    /*-----------------------------------------------------------[????????????]-------------------------------------------------------------------*/
    /*---------------------------------------------------[??????????????? ?????? ?????? ????????????]-------------------------------------------------------*/
    /*-----------------------------------------------------------[??????????????? ?????????]-------------------------------------------------------------------*/

    const ImageArea = styled.div`
width: 750px;
height: 400px;
margin-left:auto;
margin-right:auto;
margin-top:20px;
background: #e2e2e2;
border-radius: 15px;
.image{
 

  position:flex;


}
.image img{
  width:400px;
  height:400px;
  padding-left:125px;
  padding-right:125px;
  
}
.rightbutton{
width:50px;
height:50px;
float:right;
position:flex;
margin-top:175px;
}

.leftbutton{
width:50px;
height:50px;
float:left;
position:flex;
margin-top:175px;
}

`;
    const settings = {

        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <img src={RightArrow} alt="" />,
        prevArrow: <img src={LeftArrow} alt="" />
    };

    /*-----------------------------------------------------------[??????,??????,???????????? ??????]-------------------------------------------------------------------*/

    const SecondItem = styled.div`
width: 750px;
height: 250px;
margin-top:20px;
margin-left:auto;
margin-right:auto;
text-align:center;
background: #FDFDFD;
box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.25);
border-radius: 15px;


.tag{
padding-top:10px;
padding-left:10px;
padding-right:0;
  float:left;
}
.tag img{
    width:60px;
    height:24px;
    padding: 0 0 0 0;
  }
  .tag .officetall{
    width:92px;
    height:24px;
    padding: 0 0 0 0;
  }
  .tag .threeroom{
        width:76px;
    height:24px;
    padding: 0 0 0 0;
  }
  

.sellingtag{
  padding-top:10px;
  padding-right:10px;

  float:right;
  
}
.sellingtag img{
    width:60px;
    height:24px;
    padding: 0 0 0 0;
  }
  .bold{
    position:flex;
    font-weight: 700;
    font-size:30px;
    padding-top:40px;
  }
  .word{
    font-size:17px;
    padding-top:25px;
    
  }
  .addr{
    font-size:17px;
    padding-top:15px;
  }
`;




    const ThirdItem = styled.div`

width: 750px;
height: auto;
margin-top:20px;
margin-left:auto;
margin-right:auto;
background: #FDFDFD;
box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.25);
border-radius: 15px;


hr{
  border: 2px solid #d4d4d4;
  width: 700px;
}
.mini hr{
  
  border: 0.5px solid #dbdbdb;
  width: 700px;

}
.Icon{

    height:200px;
    padding-left:100px;
    
}
.Icon .Tag{
    
    padding-bottom: 20px;
    bottom:15px;
    width:70px;
    height:auto;
    padding-right:88px;
    float:left;
   

  bottom: 10px;
    
}
.Icon .Tag .a img{

    padding-right:auto;
    padding-left:auto;
    width:70px;
   padding-top:27px;
    
}
.Icon .Tag .b img{

padding-right:auto;
padding-left:auto;
width:70px;
padding-top:66px;

}
.Icon .Tag .c img{

padding-right:auto;
padding-left:auto;
width:70px;
padding-top:80px;


}
.Icon .Tag .d img{

padding-right:auto;
padding-left:auto;
width:70px;
padding-top:70px;

}
.Icon .Tag .e img{

padding-right:auto;
padding-left:auto;
width:70px;
padding-top:71px;

}
.Icon .Tag .f img{

padding-right:auto;
padding-left:auto;
width:70px;
padding-top:96px;
}

.Icon .Tag .Text{
padding-top:15px;
width:70px;

text-align : center;
}
.Icon .Tag .Text .Wtf{

 white-space: nowrap;

}

.Long{
  width:690px;
  padding-top:20px;
  padding-left:40px;
  word-break:initial;
  white-space: pre-wrap;
  padding-bottom:20px;
  float:left;
}
`;

    const ForthItem = styled.div`

width: 750px;
height: 709px;
margin-top:20px;
margin-left:auto;
margin-right:auto;
background: #FDFDFD;
box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.25);
border-radius: 15px;



hr{
  border: 2px solid #d4d4d4;
  width: 700px;
}
.mini hr{
  
  border: 0.5px solid #dbdbdb;
  width: 700px;

}


`;
    /*----------------------------------------------[?????? ????????? ????????? ??????????????? (???????????? ?????????)]----------------------------------------------------*/

    const Options = styled.main`
    width:auto;
    height:auto;
    display: flex;
  justify-content: space-between;
  .Longa{
  width:690px;
  padding-top:20px;
  padding-left:50px;
  padding-right:40px;
  word-break:initial;
  white-space: pre-wrap;
  padding-bottom:20px;
  float:left;
}


  .Longa  img{
padding-left:16px;
padding-right:16px;
padding-top:28px;
padding-bottom:28px;
  }
`;

    let Sec;
    if (Security === 1) { Sec = 1 }
    else if (Security_private === 1) { Sec = 1 }
    else {
        Sec = 0
    }
    let GasIn;
    if (Gas === 1) { GasIn = 1 }
    else if (Induction === 1) { GasIn = 1 }
    else {
        GasIn = 0
    }
    let Air
    if (Aircon_standing === 1) { Air = 1 }
    else if (Aircon_system === 1) { Air = 1 }
    else {
        Air = 0
    }

    /*----------------------------------------------------------[?????? ???????????????????]-------------------------------------------------------------------*/



    /*-----------------------------------------------------------[??????????????? ?????????]-------------------------------------------------------------------*/
    return (
        <Block>
            <ul>
                <form>
                    <li className="component component--item_card" key={key} >

                        <React.Fragment onClick={openModal}>

                            <ImageArea>
                                <Slider {...settings}>
                                    {ImageSlide()}

                                    {/* <div>
                                        <img src="https://w.namu.la/s/f16f3471166dd81cfd74bd6a927ed0bd3bad05bdf74b5069e7b5b57a155bbe16809c69aef2083973a899615546150b9485eb692f50300c35238115da0c908c1353facffec7f6ca098fe904ab6faf13ff8596e7d2ab47ab285b8c15d644144115" alt="" />
                                    </div> */}
                                </Slider>

                            </ImageArea>
                            <SecondItem>
                                <div className="tag">
                                    {{
                                        ??????: <img src={Villa} className="default" alt="" />,

                                        ????????????: <img src={Officetell} className="officetall" alt="" />,
                                        ??????: <img src={Housing} className="default" alt="" />,
                                        ?????????????????????: <img src={Housing} className="default" alt="" />,
                                        null: null
                                    }[Category2]}
                                </div>
                                <div className="tag">
                                    {{
                                        1: <img src={Oneroom} className="roomdefault" alt="" />,
                                        2: <img src={Tworoom} className="roomdefault" alt="" />,
                                        3: <img src={Threeroom} className="threeroom" alt="" />,
                                        null: null
                                    }[Room]}
                                </div>
                                <div className="sellingtag">
                                    {{
                                        1: <img src={Tradingimg} alt="" />,
                                        2: <img src={Jeonseimg} alt="" />,
                                        3: <img src={Monthlyimg} alt="" />
                                    }[Selling]}
                                </div>

                                <scaleFontSize>
                                    <div className="bold"> {{ 1: "??????", 2: "??????", 3: "??????" }[Selling]} {realprice}{deposit}
                                    </div>
                                </scaleFontSize>
                                <div className="addr">
                                    {Addr}
                                </div>



                                <div className="word">
                                    {Feature}
                                </div>




                                <div className="word">
                                    {supply}m??/{dedicated}m??
                                    {realresult === '0???' ? null
                                        :
                                        <> | {realresult}???/3.3m??</>}
                                </div>

                            </SecondItem>
                            <ThirdItem>
                                <div className="Header">
                                    ????????????
                                </div>

                                <hr />

                                <div className="Icon">
                                    <div className="Tag">
                                        {{
                                            "?????????": <div className="b"><img src={Middle} alt="" /></div>,
                                            "??????": <div className="c"><img src={Low} alt="" /></div>,
                                            "??????": <div className="a"><img src={High} alt="" /></div>,
                                            null: null
                                        }[LayerType]}
                                        <div className="Text">{LayerType}</div>
                                    </div>
                                    <div className="Tag">

                                        <div className="d"><img src={RoomNBath} alt="" /></div>

                                        <div className="Text">
                                            <div className="Wtf">
                                                {roomnbath}</div></div>
                                    </div>
                                    <div className="Tag">
                                        <div className="e"><img src={Management} alt="" /></div>
                                        <div className="Text">
                                            ?????????{`\n`}
                                            <div className="wtf">
                                                {managecost}
                                            </div>

                                        </div>
                                    </div>
                                    <div className="Tag">
                                        <div className="f"><img src={ParkingLot} alt="" /></div>
                                        <div className="Text"> {parkinglot}</div>
                                    </div>

                                </div>
                                <div className="mini" ><hr /></div>
                                <div className="Long">
                                    ??{supply}m??/{dedicated}m?? (??????/??????)
                                    <br />
                                    <br />
                                    ??{MoveDate}(???????????????)
                                    <br />
                                    <br />
                                    ??{managecost}(??? ?????? ?????????)
                                    <br />
                                    <br />
                                    ??{Category2}
                                    <br />
                                    <br />
                                    ??{Direction}{dirN}
                                    <br />
                                    <br />
                                    ??{Addrd}
                                </div>
                                <div className="mini" ><hr /></div>
                                <div className="MiniHeader" >????????????</div>
                                <hr />
                                <div className="Long">
                                    {longfeature}
                                </div>
                                <div className="mini" ><hr /></div>
                                <div className="MiniHeader" >??????</div>
                                <hr />

                                {/* ------------------??? ??????????????? ?????? (????????? ?????? ???????????????)-------------------------------- */}
                                <Options>
                                    <div className="Longa">

                                        {{
                                            1: <img src={aircon_hanging} alt="" />,
                                            0: null
                                        }[Aircon_Hanging]}





                                        {{
                                            1: <img src={aircon_stand_system} alt="" />,
                                            0: null
                                        }[Air]}



                                        {{
                                            1: <img src={bath} alt="" />,
                                            0: null
                                        }[Bath]}
                                        {{
                                            1: <img src={bed} alt="" />,
                                            0: null
                                        }[Bed]}
                                        {{
                                            1: <img src={drier} alt="" />,
                                            0: null
                                        }[Drier]}

                                        {{
                                            1: <img src={bidet} alt="" />,
                                            0: null
                                        }[Bidet]}
                                        {{
                                            1: <img src={cardkey} alt="" />,
                                            0: null
                                        }[Cardkey]}
                                        {{
                                            1: <img src={CCTV} alt="" />,
                                            0: null
                                        }[Cctv]}
                                        {{
                                            1: <img src={closet} alt="" />,
                                            0: null
                                        }[Closet]}
                                        {{
                                            1: <img src={couch} alt="" />,
                                            0: null
                                        }[Couch]}
                                        {{
                                            1: <img src={delivery_box} alt="" />,
                                            0: null
                                        }[Delivery_box]}
                                        {{
                                            1: <img src={desk} alt="" />,
                                            0: null
                                        }[Desk]}
                                        {{
                                            1: <img src={elevator} alt="" />,
                                            0: null
                                        }[Elevator]}
                                        {{
                                            1: <img src={entrance_security} alt="" />,
                                            0: null
                                        }[Entrance_security]}
                                        {{
                                            1: <img src={fridge} alt="" />,
                                            0: null
                                        }[Fridge]}
                                        {{
                                            1: <img src={microwave} alt="" />,
                                            0: null
                                        }[Microwave]}



                                        {{
                                            1: <img src={gas_induction} alt="" />,
                                            0: null
                                        }[GasIn]}


                                        {{
                                            1: <img src={interphone} alt="" />,
                                            0: null
                                        }[Interphone]}
                                        {{
                                            1: <img src={oven} alt="" />,
                                            0: null
                                        }[Oven]}
                                        {{
                                            1: <img src={security} alt="" />,
                                            0: null
                                        }[Sec]}

                                        {{
                                            1: <img src={shoe} alt="" />,
                                            0: null
                                        }[Shoe]}
                                        {{
                                            1: <img src={shower_booth} alt="" />,
                                            0: null
                                        }[Shower_booth]}
                                        {{
                                            1: <img src={sink} alt="" />,
                                            0: null
                                        }[Sink]}
                                        {{
                                            1: <img src={table} alt="" />,
                                            0: null
                                        }[Table]}
                                        {{
                                            1: <img src={wardrobe} alt="" />,
                                            0: null
                                        }[Wardrobe]}
                                        {{
                                            1: <img src={washing} alt="" />,
                                            0: null
                                        }[Washing]}
                                        {{
                                            1: <img src={window_guard} alt="" />,
                                            0: null
                                        }[Window_guard]}
                                        {{
                                            1: <img src={fire_alarm} alt="" />,
                                            0: null
                                        }[Fire_alarm]}
                                        {{
                                            1: <img src={dishwasher} alt="" />,
                                            0: null
                                        }[Dishwasher]}

                                    </div>
                                </Options>

                                {/* ------------------------------------------?????? ???????????????????------------------------------------- */}



                            </ThirdItem>
                            <ForthItem className="minimap">
                                <div className="Header" >?????? ??? ????????????</div>
                                <hr />
                                <OptionMap className="minimap" idx={Id} lat={Lat} lng={Lng} />

                            </ForthItem>
                        </React.Fragment>
                    </li>
                </form>
            </ul>

        </Block >

    );
}

export default ItemCard;
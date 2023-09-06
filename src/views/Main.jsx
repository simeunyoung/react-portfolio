import React from "react";

const Main = () =>{
    return(
        <>
           <div className="main-wrap">
                <div className="row">
                    <div div className="back-box box1">
                        <div className="row">
                            <div className="item-box white-box"></div>
                            <div className="item-box pink-box"></div>
                        </div>
                        <div class="row">
                            <div className="item-box pink-box"></div>
                            <div className="item-box white-box"></div>
                        </div>
                    </div>
                    <div className="back-box box2">
                        <div className="item-box black-box"></div>
                        <div className="item-box skyblue-box"></div>
                        <div className="item-box blue-box"></div>
                    </div>
                </div>
                <div class="row">
                    <div className="back-box box3">
                        <div className="item-box white-box"></div>
                    </div>
                    <div className="back-box box4"></div>
                </div>
                <div className="back-box green-box box5">
                    <div className="item-box red-box"></div>
                    <div className="item-box white-box"></div>
                </div>
           </div>
        </>
    );
};

export default Main;
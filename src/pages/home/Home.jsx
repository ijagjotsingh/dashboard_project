import React from "react";  
import "./home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import widgetData from "../../components/widget/widgetdata";
import Progressbar from "../../components/progressBar/progressbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/list/List";
import Event from "../../components/event/Event";
import { Link } from "react-router-dom";

function Home(){
    return (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer">
            <Navbar/>
                <div className="homeTitle">
                    Hey! Welcome to your Dashboard
                    <Link className="link" to="/faculty">
                        Your Faculty
                    </Link>
                </div>
                <div className="widgetContainer">
                {widgetData.map(widgetItem => (
                    <Widget 
                        image = {widgetItem.image}
                        title = {widgetItem.title}
                    />
                ))}
                </div>
                <div className="charts">
                    <div className="left">
                        <Progressbar 
                            value = {"40"}
                            text = {"40%"}
                            pathColor = {"#659DBD"}
                            textColor = {"#659DBD"}
                            proText = {"Course Progress"}
                        />
                        <Progressbar 
                            value = {"60"}
                            text = {"60%"}
                            pathColor = {"#C38D9E"}
                            textColor = {"#C38D9E"}
                            proText = {"Average Marks"}
                        />
                    </div>
                    <div className="right">
                        <Chart/>
                    </div>
                </div>

                <div className="tableContainer">
                    <div className="Left">
                         <List/> 
                    </div>
                    <div className="right eventHere">
                       <Event/>
                    </div>
                </div>
        </div>
    </div>
    )
}

export default Home;
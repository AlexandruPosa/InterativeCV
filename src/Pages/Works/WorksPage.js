import React, { Component } from "react";
import PopUp from "../../Components/PopUp";
import "./WorkPage.css";

class Works extends Component {
    state = {
        show: false,
        title: '',
        body: ''
    }
    showPopUp = (popup) => {
        if (popup === "Bosch") {
            this.setState({
                show: true,
                title: 'Bosch',
                body: 'The Bosch Group has been present in Romania for over 25 years and employs over 8,000 associates. In 2019, Bosch generated consolidated sales of 436 million euros in Romania. The total net sales, including sales of non-consolidated companies and internal deliveries to affiliated companies, reached 1.4 billion euros. With two plants, a research and development center and sales offices, all four business sectors of the group are represented in Romania: Mobility Solutions, Consumer Goods, Energy and Building Technology and Industrial Technology.'
            })
        }
        else if (popup === "Emerson") {
            this.setState({
                show: true,
                title: 'Emerson',
                body: 'We concentrate on the most complex, profound challenges facing the world in the process, industrial, commercial and residential markets. Our global talent, best-in-class technologies and core platforms deliver value across a range of industries and sectors. With us, you can always Consider It Solved™.'
            })
        }
        else if (popup === "ScoalaInformala") {
            this.setState({
                show: true,
                title: 'The Informal School of IT',
                body: 'The Informal School of IT is the largest platform in Romania that brings together industry leading professionals with talented people driven by a desire to develop their unique IT skills.Our hands-on approach, combined with a permanently updated curricula and convenient timeframe proved to be a successful recipe for our alternative school.'
            })
        }
    }

    render() {
        const { show, title, body } = this.state;
        return (

            <div>
                <div class="container-fluid">
                    <div class="row" >
                        <div class="col-12 mt-3">
                            <div class="card" style={{ boxShadow: "1px 1px 10px 5px lightblue" }}>
                                <div class="card-horizontal">
                                    <div class="img-square-wrapper">
                                        <img className="logo-image" src={require("../../Image/scoala-logo.png")} alt="Card image cap" onClick={() => this.showPopUp('ScoalaInformala')} />

                                    </div>
                                    <div class="card-body">
                                        <p class="card-title card-job-title">Web developer</p>
                                        <p class="card-text">11 Nov. 2019 - 16 Jul. 2020</p>
                                    </div>

                                </div>
                                <div class="card-footer">
                                    <small class="text-muted"><a href="https://www.scoalainformala.ro" target="_blank">Company website</a></small>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 mt-3">
                            <div class="card" style={{ boxShadow: "1px 1px 10px 5px lightblue" }}>
                                <div class="card-horizontal">
                                    <div class="img-square-wrapper">
                                        <img className="logo-image" src={require("../../Image/Emerson-logo.png")} alt="Card image cap" onClick={() => this.showPopUp('Emerson')} />
                                    </div>
                                    <div class="card-body" style={{ maxWidth: "300px" }}>
                                        <p class="card-title card-job-title" >Manufacturing engineer</p>
                                        <p class="card-text">7 May 2019 - Present</p>
                                    </div>
                                    <div className="card-list-work-page">
                                        <ul>
                                            <li>Responsible for mechanical assembly and final configuration
                                            processes</li>
                                            <li>Production problems investigation</li>
                                            <li>Procedure audit implementation</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted"><a href="https://www.emerson.com/en-us" target="_blank">Company website</a></small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 mt-3">
                            <div class="card" style={{ boxShadow: "1px 1px 10px 5px lightblue" }}>
                                <div class="card-horizontal">
                                    <div class="img-square-wrapper">
                                        <img className="logo-image" src={require("../../Image/bosch-logo.png")} alt="Card image cap" onClick={() => this.showPopUp('Bosch')} />

                                    </div>
                                    <div class="card-body" style={{ maxWidth: "300px" }}>
                                        <ul>
                                            <li >
                                                <p class="card-title card-job-title">Process engineer</p>
                                                <p class="card-text">1 Aug 2018 - 1 May 2019</p>
                                            </li>

                                            <li>
                                                <p class="card-title card-job-title">Working student</p>
                                                <p class="card-text">14 Mar. 2016 - 30 Jul. 2018</p>
                                            </li>
                                        </ul>

                                    </div>
                                    <div className="card-list-work-page">
                                        <ul>
                                            <li>Process planning and maintenance protocol coordination</li>
                                            <li>Personnel training for winding machine equipment</li>
                                            <li>Production management and inventory control supervision</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted"><a href="https://www.bosch.ro" target="_blank">Company website</a></small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PopUp show={show} title={title} body={body} />


            </div >



        )
    }
}

export default Works;
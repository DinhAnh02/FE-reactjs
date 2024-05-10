import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MedicalFacilities.scss';
import Slider from "react-slick";



class MedicalFacilities extends Component {

    render() {

        return (
            <div>
                <div className='section-share section-medical'>
                    <div className='section-container'>
                        <div className='section-header'>
                            <span className='title-secsion'> Cơ sở y tế nổi bật</span>
                            <button className='btn-section'>Tìm Kiếm</button>
                        </div>
                        <div className='section-body'>
                            <Slider {...this.props.settings}>
                                <div className='section-customize '>
                                    <div className='bg-img section-medical '></div>
                                    <div>Hệ thống y tế thu cúc 1</div>
                                </div>
                                <div className='section-customize '>
                                    <div className='bg-img section-medical '></div>
                                    <div>Hệ thống y tế thu cúc 2</div>
                                </div>
                                <div className='section-customize '>
                                    <div className='bg-img section-medical '></div>
                                    <div>Hệ thống y tế thu cúc 3</div>
                                </div>
                                <div className='section-customize '>
                                    <div className='bg-img section-medical '></div>
                                    <div>Hệ thống y tế thu cúc 4</div>
                                </div>
                                <div className='section-customize '>
                                    <div className='bg-img section-medical '></div>
                                    <div>Hệ thống y tế thu cúc 5</div>
                                </div>
                                <div className='section-customize '>
                                    <div className='bg-img section-medical '></div>
                                    <div>Hệ thống y tế thu cúc 6</div>
                                </div>
                            </Slider>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacilities);

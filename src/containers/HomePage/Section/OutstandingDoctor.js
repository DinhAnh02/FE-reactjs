import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";



class OutstandingDoctor extends Component {

    render() {

        return (
            <div>
                <div className='section-share section-outstandingDoctor'>
                    <div className='section-container'>
                        <div className='section-header'>
                            <span className='title-secsion'> Bác sĩ nổi bật tuần qua</span>
                            <button className='btn-section'>Tìm Kiếm</button>
                        </div>
                        <div className='section-body'>
                            <Slider {...this.props.settings}>
                                <div className='section-customize '>
                                    <div className='customize-boder'>
                                        <div className='outter-bg'>
                                            <div className='bg-img section-outstandingDoctor'></div>

                                        </div>
                                        <div className='position text-center'>
                                            <div>Giáo sư ,Tiến sĩ ,Anh02</div>
                                            <div>Cơ xương khớp</div>
                                        </div>
                                    </div>


                                </div>
                                <div className='section-customize '>
                                    <div className='customize-boder'>
                                        <div className='outter-bg'>
                                            <div className='bg-img section-outstandingDoctor'></div>

                                        </div>
                                        <div className='position text-center'>
                                            <div>Giáo sư ,Tiến sĩ ,Anh02</div>
                                            <div>Cơ xương khớp</div>
                                        </div>
                                    </div>

                                </div>
                                <div className='section-customize '>
                                    <div className='customize-boder'>
                                        <div className='outter-bg'>
                                            <div className='bg-img section-outstandingDoctor'></div>

                                        </div>
                                        <div className='position text-center'>
                                            <div>Giáo sư ,Tiến sĩ ,Anh02</div>
                                            <div>Cơ xương khớp</div>
                                        </div>
                                    </div>

                                </div>
                                <div className='section-customize '>
                                    <div className='customize-boder'>
                                        <div className='outter-bg'>
                                            <div className='bg-img section-outstandingDoctor'></div>

                                        </div>
                                        <div className='position text-center'>
                                            <div>Giáo sư ,Tiến sĩ ,Anh02</div>
                                            <div>Cơ xương khớp</div>
                                        </div>
                                    </div>

                                </div>
                                <div className='section-customize '>
                                    <div className='customize-boder'>
                                        <div className='outter-bg'>
                                            <div className='bg-img section-outstandingDoctor'></div>

                                        </div>
                                        <div className='position text-center'>
                                            <div>Giáo sư ,Tiến sĩ ,Anh02</div>
                                            <div>Cơ xương khớp</div>
                                        </div>
                                    </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);

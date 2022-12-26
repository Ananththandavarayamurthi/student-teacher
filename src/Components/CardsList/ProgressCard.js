import React from "react";

const ProgressCard = () => {
  return (
    <> 
    <div class="container-fluid pt-4 px-4">
    <div className=" m-3 my-3">
      <h2 class="bg-dark text-danger">languages</h2>
                    <div class="row g-4 ">
                          <div class="col-sm-6 col-xl-3 bg-dark ">
                        <div class="bg-dark rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa fa-chart-pie fa-3x text-danger"></i>
                            <div class="ms-3">
                                
                                <h6 class="mb-0 text-danger">Tamil</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3 bg-dark">
                        <div class="bg-dark rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa fa-chart-pie fa-3x text-danger"></i>
                            <div class="ms-3">
                                
                                <h6 class="mb-0 text-danger">English</h6>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
     
       
      </div>
    </>
  );
};

export default ProgressCard;

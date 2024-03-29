export default function Dashboard(){
    return (
      <div className="col-md-10 p-5 align-items-center">
        <div className="row ">
          <div className="col-xxl-5 col-sm-6 col-md-4 bg-primary text-light p-5 m-4">
            Total number of Posts
          </div>
          <div className="col-xxl-5 col-sm-6 col-md-4 bg-success p-5 m-4">
            Total E-paper
          </div>
          <div className="col-xxl-5 col-sm-6 col-md-4 bg-secondary text-light p-5 m-4">
            Total Visiters
          </div>
          <div className="col-xxl-5 col-sm-6 col-md-4 bg-warning  p-5 m-4">
            Total number of Posts
          </div>
          <div className="col-xxl-5 col-sm-6 col-md-4 bg-danger text-light p-5 m-4">
            Total Subscribers
          </div>
          <div className="col-xxl-5 col-sm-6 col-md-4 bg-info p-5 m-4">
            Total E-paper
          </div>
        </div>
      </div>
    );
};
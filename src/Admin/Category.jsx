export default function Category() {
  return (
    <div className="col-md-10 p-5 align-items-center">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Add Category</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="categoryName" className="form-label">
                    Category Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="categoryName"
                    placeholder="Enter category name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="categoryDescription" className="form-label">
                    Category Description:
                  </label>
                  <textarea
                    className="form-control"
                    id="categoryDescription"
                    rows="3"
                    placeholder="Enter category description"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

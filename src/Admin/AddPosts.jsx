export default function Addposts() {
  return (
    <div className="col-md-10 p-5 align-items-center">
      <h1 className="text-center mb-4">Post News</h1>
  <div className="row justify-content-center">
    <div className="col-md-6">
      <form>
        <table className="table">
          <tbody>
            <tr>
              <td><label htmlFor="newsTitle" className="form-label">News Title:</label></td>
              <td><input type="text" className="form-control bg-white text-dark" id="newsTitle" placeholder="Enter news title" required /></td>
            </tr>
            <tr>
              <td><label htmlFor="category" className="form-label">Category:</label></td>
              <td>
                <select className="form-select bg-white text-dark" id="category" required>
                  <option value="">Select category</option>
                  <option value="1">Politics</option>
                  <option value="2">Business</option>
                  <option value="3">Technology</option>
                  <option value="4">Entertainment</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="shortDescription" className="form-label">Short Description:</label></td>
              <td><input type="text" className="form-control bg-white text-dark" id="shortDescription" placeholder="Enter short description" required /></td>
            </tr>
            <tr>
              <td><label htmlFor="longDescription" className="form-label">Long Description:</label></td>
              <td><textarea className="form-control bg-white text-dark" id="longDescription" rows="3" placeholder="Enter long description"></textarea></td>
            </tr>
            <tr>
              <td><label htmlFor="image" className="form-label">Image:</label></td>
              <td><input type="file" className="form-control bg-white text-dark" id="image" accept="image/*" required /></td>
            </tr>
            <tr>
              <td><label htmlFor="tags" className="form-label">Tags:</label></td>
              <td><input type="text" className="form-control bg-white text-dark" id="tags" placeholder="Enter tags separated by commas" /></td>
            </tr>
            <tr>
              <td></td>
              <td className="text-end"><button type="submit" className="btn btn-dark">Submit</button></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  </div>
    </div>
  );
}

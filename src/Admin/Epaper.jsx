export default function Epaper() {
    return (
      <div className="col-md-10 p-5 align-items-center">
        <h1 className="text-center mb-4">Share E-Paper</h1>
        <table className="table">
          <tbody>
            <tr>
              <td>
                <label htmlFor="paperFile">Upload E-Paper File (PDF):</label>
              </td>
              <td>
                <input
                  type="file"
                  name="paperFile"
                  id="paperFile"
                  accept=".pdf"
                  required
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button type="submit" className="btn btn-primary">
                  Share
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
};
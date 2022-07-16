import React from "react";

const SearchPopupArea = () => {
  return (
    <>
      <div className="search-popup">
        <button type="button" className="btn-close" aria-label="Close"></button>

        <div className="search-content">
          <div className="text-center">
            <h3 className="mb-4 mt-0">Press ESC to close</h3>
          </div>

          <form className="d-flex search-form">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search and press enter ..."
              aria-label="Search"
            />
            <button className="btn btn-default btn-lg" type="submit">
              <i className="icon-magnifier"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchPopupArea;

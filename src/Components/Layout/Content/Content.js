import React from "react";
import Footer from "../Footer/Footer";
import Headers from "../Header/Headers";
import { useNavigate } from "react-router-dom";
const Content = ({
  title,
  children,
  col_size,
  show_footer,
  responsive_col,
  addtitle,
  handleAdd
}) => {

  return (
    <>
      <div className="flapt-page-content">
        <div class="main-panel">
          <div className="content-wrapper">
            <div className="container-fluid">
              <div className="row">
                <div className={`col-${col_size} ${responsive_col} box-margin`}>
                  <div className="card">
                    <div className="card-body">
                      <div class="admin-add-main">
                        <h3 className="card-titl1e mb-4">{title}</h3>{" "}
                        {addtitle ? (
                          <button
                            onClick={handleAdd}
                            className="admin-add-btn mb-4"
                          >
                            {addtitle}
                          </button>
                        ) : (
                          ""
                        )}
                      </div>

                      {children}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {show_footer ? <Footer /> : ""}
        </div>
      </div>
    </>
  );
};

export default Content;

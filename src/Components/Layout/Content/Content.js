import React from "react";
import Footer from "../Footer/Footer";
import Headers from "../Header/Headers";
const Content = ({
  title,
  children,
  col_size,
  show_footer,
  responsive_col,
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
                      <h3 className="card-titl1e mb-5">{title}</h3>
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

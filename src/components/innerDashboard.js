import React from "react";
import { Row, Col, Card } from "antd";
import { Line, Bar } from "react-chartjs-2";
import { defaults } from "react-chartjs-2";
import { connect } from "react-redux";

class InnerDashboard extends React.Component {
  /* componentWillMount() {
    if (!this.props.loggedIn && !this.props.signedIn) {
      this.props.history.push("/login");
    }
  } */
  render() {
    defaults.global.defaultFontColor = "white";
    const TempData1 = {
      labels: ["M", "T", "W", "T", "F", "S", "S"],
      datasets: [
        {
          data: [12, 19, 3, 5, 2, 3, 7],
          borderColor: "white",
          borderWidth: 3,
          fill: false
        }
      ]
    };
    const TempData2 = {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      datasets: [
        {
          data: [12, 19, 3, 5, 2, 3, 1, 8, 6, 3, 9, 15],
          borderColor: "white",
          borderWidth: 3,
          fill: false,
          backgroundColor: "white"
        }
      ]
    };
    const options = {
      legend: { display: false },
      tooltips: false,
      elements: {
        point: {
          radius: 0
        }
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false
            }
          }
        ]
      }
    };
    return (
      <div>
        <div className="dashboard">Dashboard</div>
        <div className="dashboard-content">
          <Row gutter={10}>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <Card>
                <div className="Chart1">
                  <Line data={TempData1} options={options} />
                </div>
                <div className="chart-label">Total Daily Weigh</div>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <Card>
                <div className="Chart2">
                  {" "}
                  <Line
                    data={TempData2}
                    options={{
                      legend: { display: false },
                      elements: {
                        line: {
                          tension: 0
                        }
                      }
                    }}
                  />{" "}
                </div>
                <div className="chart-label">Total Monthly Weigh</div>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <Card>
                <div className="Chart3">
                  {" "}
                  <Bar data={TempData2} options={options} />{" "}
                </div>
                <div className="chart-label">Total Daily Lorries</div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  loggedIn: state.login.isSuccess,
  signedIn: state.signup.isSuccess
});

export default connect(mapStateToProps)(InnerDashboard);

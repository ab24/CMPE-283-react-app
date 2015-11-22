
var React = require('react')
class Home extends React.Component {


    render() {
        return (

            <div id="wrapper">

                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="home.html">Move To Cloud</a>
                    </div>

                    <ul className="nav navbar-right top-nav">
                        <li classNamee="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i> John Smith <b className="caret"></b></a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="#"><i className="fa fa-fw fa-user"></i> Profile</a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <a href="#"><i className="fa fa-fw fa-power-off"></i> Log Out</a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav side-nav">
                            <li className="active">
                                <a href="home.html"><i className="fa fa-fw fa-dashboard"></i> Dashboard</a>
                            </li>
                            <li>
                                <a href="charts.html"><i className="fa fa-fw fa-bar-chart-o"></i> Charts</a>
                            </li>
                            <li>
                                <a href="tables.html"><i className="fa fa-fw fa-table"></i> Tables</a>
                            </li>
                            <li>
                                <a href="forms.html"><i className="fa fa-fw fa-edit"></i> Forms</a>
                            </li>
                            <li>
                                <a href="javascript:;" data-toggle="collapse" data-target="#demo"><i className="fa fa-fw"></i> Departments <i className="fa fa-fw fa-caret-down"></i></a>
                                <ul id="demo" className="collapse">
                                    <li>
                                        <a href="#">Finance</a>
                                    </li>
                                    <li>
                                        <a href="#">Purchases</a>
                                    </li>
                                    <li>
                                        <a href="#">HR</a>
                                    </li>
                                    <li>
                                        <a href="#">Legal</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </nav>

                <div id="page-wrapper">

                    <div className="container-fluid">


                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="page-header">
                                    Dashboard
                                </h1>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="panel panel-primary">
                                    <div className="panel-heading">
                                        <div className="row">
                                            <div className="col-xs-3">
                                                <i className="fa fa-bars fa-5x"></i>
                                            </div>
                                            <div className="col-xs-9 text-right">
                                                <div className="huge">5</div>
                                                <div>Created Instances</div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#">
                                        <div className="panel-footer">
                                            <span className="pull-left">List Instances</span>
                                            <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                            <div className="clearfix"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="panel panel-green">
                                    <div className="panel-heading">
                                        <div className="row">
                                            <div className="col-xs-3">
                                                <i className="fa fa-life-ring fa-5x"></i>
                                            </div>
                                            <div className="col-xs-9 text-right">
                                                <div className="huge">2</div>
                                                <div>Images</div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#">
                                        <div className="panel-footer">
                                            <span className="pull-left">List Images</span>
                                            <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                            <div className="clearfix"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="panel panel-yellow">
                                    <div className="panel-heading">
                                        <div className="row">
                                            <div className="col-xs-3">
                                                <i className="fa fa-desktop fa-5x"></i>
                                            </div>
                                            <div className="col-xs-9 text-right">
                                                <div className="huge">4</div>
                                                <div>Available Instances</div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#">
                                        <div className="panel-footer">
                                            <span className="pull-left">Create Instance</span>
                                            <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                            <div className="clearfix"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="panel panel-red">
                                    <div className="panel-heading">
                                        <div className="row">
                                            <div className="col-xs-3">
                                                <div className="fa fa-usd fa-5x"></div>
                                            </div>
                                            <div className="col-xs-9 text-right">
                                                <div className="huge">150</div>
                                                <div>Billing</div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#">
                                        <div className="panel-footer">
                                            <span className="pull-left">Billing</span>
                                            <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                            <div className="clearfix"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>N
                        </div>


                        <div className="row">
                            <div className="col-lg-4">
                                <div className="panel panel-primary">
                                    <div className="panel-heading">
                                        <h3 className="panel-title"><i className="fa fa-long-arrow-right"></i> Bar Graph Example</h3>
                                    </div>
                                    <div className="panel-body">
                                        <div id="morris-bar-chart"></div>
                                        <div className="text-right">
                                            <a href="#">View Details <i className="fa fa-arrow-circle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h3 className="panel-title"><i className="fa fa-money fa-fw"></i> Instances</h3>
                                    </div>
                                    <div className="panel-body">
                                        <div className="table-responsive">
                                            <table className="table table-bordered table-hover table-striped">
                                                <thead>
                                                <tr>
                                                    <th>Name #</th>
                                                    <th>Image Name</th>
                                                    <th>IP Address</th>
                                                    <th>Size</th>
                                                    <th>Status</th>
                                                    <th>Power State</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>dummy</td>
                                                    <td>CIRROS</td>
                                                    <td>10.10.10.7</td>
                                                    <td>m1.tiny|512MB|1vCpu(s)|3GB</td>
                                                    <td>ACTIVE</td>
                                                    <td>Running</td>
                                                </tr>
                                                <tr>
                                                    <td>dummy</td>
                                                    <td>CIRROS</td>
                                                    <td>10.10.10.7</td>
                                                    <td>m1.tiny|512MB|1vCpu(s)|3GB</td>
                                                    <td>ACTIVE</td>
                                                    <td>Running</td>
                                                </tr>
                                                <tr>
                                                    <td>dummy</td>
                                                    <td>CIRROS</td>
                                                    <td>10.10.10.7</td>
                                                    <td>m1.tiny|512MB|1vCpu(s)|3GB</td>
                                                    <td>ACTIVE</td>
                                                    <td>Running</td>
                                                </tr>
                                                <tr>
                                                    <td>dummy</td>
                                                    <td>CIRROS</td>
                                                    <td>10.10.10.7</td>
                                                    <td>m1.tiny|512MB|1vCpu(s)|3GB</td>
                                                    <td>ACTIVE</td>
                                                    <td>Running</td>
                                                </tr>
                                                <tr>
                                                    <td>dummy</td>
                                                    <td>CIRROS</td>
                                                    <td>10.10.10.7</td>
                                                    <td>m1.tiny|512MB|1vCpu(s)|3GB</td>
                                                    <td>ACTIVE</td>
                                                    <td>Running</td>
                                                </tr>
                                                <tr>
                                                    <td>dummy</td>
                                                    <td>CIRROS</td>
                                                    <td>10.10.10.7</td>
                                                    <td>m1.tiny|512MB|1vCpu(s)|3GB</td>
                                                    <td>ACTIVE</td>
                                                    <td>Running</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="text-right">
                                            <a href="#">View All Transactions <i className="fa fa-arrow-circle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>


                </div>

            </div>

        );
    }
}

export default Home;
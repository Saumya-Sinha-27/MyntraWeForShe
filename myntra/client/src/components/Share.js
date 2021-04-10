import React from 'react'

const Share = () => {
    return (
        <div>
            <div class="nav">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                    <a href="#" class="navbar-brand">MENU</a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div class="navbar-nav mr-auto">
                            <a href="index.html" class="nav-item nav-link">Home</a>

                        </div>
                        <div class="navbar-nav ml-auto">
                            <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">User Account</a>
                                <div class="dropdown-menu">
                                    <a href="#" class="dropdown-item">Login</a>
                                    <a href="#" class="dropdown-item">Register</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        
        <div class="bottom-bar">
            <div class="container-fluid">
                <div class="row align-items-center">
                  <div class="product-view">
              <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-12">
                              <div class="product-view-top">
                                  <div class="row">
                                      <div class="col-md-8">
                                          <div class="product-search">
                                              <input type="email" value="Search Group" />
                                              <button><i class="fa fa-search"></i></button>
                                          </div>
                                      </div>
                                      <div class="col-md-4">
                                          <div class="product-short">
                                              <div class="dropdown">
                                                  <div class="dropdown-toggle" data-toggle="dropdown">Group sort by</div>
                                                  <div class="dropdown-menu dropdown-menu-right">
                                                      <a href="#" class="dropdown-item">Name</a>
                                                      <a href="#" class="dropdown-item">Date modified</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-md-4">
                                          <div class="product-price-range">

                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
              </div>
          </div>
                </div>
            </div>
        </div>
        
        <div class="wishlist-page">
            <div class="container-fluid">
                <div class="wishlist-page-inner">
                    <div class="row" >
                        <div class="col-sm-5 mx-auto" >
                            <div class="table-responsive" >
                                <table class="table table-bordered">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th>Groups</th>

                                            <th>Forward</th>
                                        </tr>
                                    </thead>
                                    <tbody class="align-middle">
                                        <tr>
                                            <td>
                                                <div class="img">
                                                    <a href="#"><img src="/img/s.jpg" alt="Image" /></a>
                                                    <p>Group 1</p>
                                                </div>
                                            </td>

                                            <td><form>
                                              <input type="checkbox" name="enter name here" value="enter value here" /></form></td>                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="img">
                                                    <a href="#"><img src="/img/s.jpg" alt="Image" /></a>
                                                    <p>Group 2</p>
                                                </div>
                                            </td>

                                            <td><form>
                                              <input type="checkbox" name="enter name here" value="enter value here" /></form></td>                                        </tr>
                                        
                                        
                                        <tr>
                                            <td>
                                                <div class="img">
                                                    <a href="#"><img src="/img/s.jpg" alt="Image" /></a>
                                                    <p>Group 3</p>
                                                </div>
                                            </td>

                                            <td><form>
                                              <input type="checkbox" name="enter name here" value="enter value here" /></form></td>                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

        <div class="col-md-12">
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1">Previous</a>
                    </li>
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>

        
        <div class="footer-bottom">
            <div class="container">
                <div class="row">

                    <div class="col-md-12 template-by">
                        <p><button class="btn-cart">Share</button></p>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
    </div>
    )
}

export default Share

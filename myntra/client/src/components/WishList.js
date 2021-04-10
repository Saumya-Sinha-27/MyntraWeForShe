import React from 'react'

const WishList = () => {
    return (
        <>
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
                            <a href="/" class="nav-item nav-link">Home</a>

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

                </div>
            </div>
        </div>
       
        <div class="wishlist-page">
            <div class="container-fluid">
                <div class="wishlist-page-inner">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <table class="table table-bordered">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th>Product</th>
                                            <th>Price</th>

                                            <th>Add to Cart</th>
                                            <th>Select Item to share</th>
                                        </tr>
                                    </thead>
                                    <tbody class="align-middle">
                                        <tr>
                                            <td>
                                                <div class="img">
                                                    <a href="#"><img src="/img/product-6.jpg" alt="Image" /></a>
                                                    <p>Faded Jeans</p>
                                                </div>
                                            </td>
                                            <td>$99</td>

                                            <td><button class="btn-cart">Add to Cart</button></td>
                                            <td><form>
                                              <input type="checkbox" name="enter name here" value="enter value here" /></form></td>                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="img">
                                                    <a href="#"><img src="/img/product-7.jpg" alt="Image" /></a>
                                                    <p>Winter Coat</p>
                                                </div>
                                            </td>
                                            <td>$99</td>

                                            <td><button class="btn-cart">Add to Cart</button></td>
                                            <td><form>
                                              <input type="checkbox" name="enter name here" value="enter value here" /></form></td>                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="img">
                                                    <a href="#"><img src="/img/product-8.jpg" alt="Image" /></a>
                                                    <p>Flowy Top</p>
                                                </div>
                                            </td>
                                            <td>$99</td>

                                            <td><button class="btn-cart">Add to Cart</button></td>
                                            <td><form>
                                              <input type="checkbox" name="enter name here" value="enter value here" /></form></td>                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="img">
                                                    <a href="#"><img src="/img/product-9.jpg" alt="Image" /></a>
                                                    <p>Sweat-shirt</p>
                                                </div>
                                            </td>
                                            <td>$99</td>

                                            <td><button class="btn-cart">Add to Cart</button></td>
                                            <td><form>
                                              <input type="checkbox" name="enter name here" value="enter value here" /></form></td>                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="img">
                                                    <a href="#"><img src="/img/product-10.jpg" alt="Image" /></a>
                                                    <p>Beachy Dress</p>
                                                </div>
                                            </td>
                                            <td>$99</td>

                                            <td><button class="btn-cart">Add to Cart</button></td>
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
        <div class="footer-bottom">
            <div class="container">
                <div class="row">

                    <div class="col-md-12 template-by">
                        <p><button class="btn-cart"><a href="share.html">Continue</a></button></p>
                    </div>
                </div>
            </div>
        </div>
        <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>

        </div>
        </>
    )
}

export default WishList

import React from 'react'

const Cart = () => {
    return (
        <>
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

        <div class="cart-page">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="cart-page-inner">
                            <div class="table-responsive">
                                <table class="table table-bordered">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th>Product</th>
                                            <th>Price</th>

                                            <th>Share Item</th>
                                        </tr>
                                    </thead>
                                    <tbody class="align-middle">
                                        <tr>
                                            <td>
                                                <div class="img">
                                                    <a href="#"><img src="img/product-1.jpg" alt="Image" /></a>
                                                    <p>Black Dress</p>
                                                </div>
                                            </td>
                                            <td>$99</td>

                                            <td><form>
                                              <input type="checkbox" name="enter name here" value="enter value here" /></form></td>                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="img">
                                                    <a href="#"><img src="img/product-2.jpg" alt="Image" /></a>
                                                    <p>Blue Top</p>
                                                </div>
                                            </td>
                                            <td>$99</td>

                                            <td><form>
                                              <input type="checkbox" name="enter name here" value="enter value here" /></form></td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="img">
                                                    <a href="#"><img src="img/product-3.jpg" alt="Image" /></a>
                                                    <p>Blue Dress</p>
                                                </div>
                                            </td>
                                            <td>$99</td>

                                            <td><form>
                                              <input type="checkbox" name="enter name here" value="enter value here" /></form></td>
                                                                                    </tr>
                                        <tr>
                                            <td>
                                                <div class="img">
                                                    <a href="#"><img src="img/product-4.jpg" alt="Image" /></a>
                                                    <p>Brown Top</p>
                                                </div>
                                            </td>
                                            <td>$99</td>

                                            <td><form>
                                              <input type="checkbox" name="enter name here" value="enter value here" /></form></td>                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="img">
                                                    <a href="#"><img src="img/product-5.jpg" alt="Image" /></a>
                                                    <p>Blue Jeans</p>
                                                </div>
                                            </td>
                                            <td>$99</td>

                                            <td><form>
                                              <input type="checkbox" name="enter name here" value="enter value here" /></form></td>                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="cart-page-inner">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="coupon">
                                        <input type="text" placeholder="Coupon Code" />
                                        <button>Apply Code</button>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="cart-summary">
                                        <div class="cart-content">
                                            <h1>Cart Summary</h1>
                                            <p>Sub Total<span>$99</span></p>
                                            <p>Shipping Cost<span>$1</span></p>
                                            <h2>Grand Total<span>$100</span></h2>
                                        </div>
                                        <div class="cart-btn">
                                            <button>Update Cart</button>
                                            <button>Checkout</button>
                                        </div>
                                    </div>
                                </div>
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
        
        </>
    )
}

export default Cart

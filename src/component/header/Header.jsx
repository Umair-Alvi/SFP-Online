import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Navbar, Container } from 'react-bootstrap';
import { BsBell } from "react-icons/bs";

const Header = () => {
    const notificationCount =0;
  return (
    // <BrowserRouter>
    <div className='header'>
      <Navbar bg="white" expand="lg" className="navbar fixed-top m-auto">
        {/* <Container  className="p-3 mb-3 border-bottom"> */}
          <div className="container-fluid p-3 mb-2 border-bottom">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start ml-24">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li  >
                <Link className="nav-link text-bolder  link-body-emphasis "   to="/" >
                  SFP Online
                </Link>
              </li>
            </ul>
            </div>

          <div className="nav-item dropdown nav-item-box  d-flex align-items-center mr-8">
                <Link to="/" className="dropdown-toggle nav-link d-flex align-items-center " data-bs-toggle="dropdown">
                 <div className='d-flex align-items-center'> 
                 <BsBell  height="30px" />
                    <span className=" rounded-pill">{notificationCount }</span>
                 </div>
                </Link >
                
              <div className="dropdown-menu  notifications ">
                     <div className="topnav-dropdown-header">
                            <span className="notification-title">Notifications</span>
                                <Link to="/" className="clear-noti nav-link"> Clear All </Link >
                      </div>
                      <div className="noti-content">
                            <ul className="notification-list"></ul>
                      </div>
                                
                       <div className="topnav-dropdown-footer">
                            <Link className="nav-link" to="/">View all Notifications</Link >
                        </div>
              </div>
            
                <div className="dropdown text-end">
                    <Link to="/" className="flex justify-center items-center link-body-emphasis text-decoration-none dropdown-toggle mx-2" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="data:image/webp;base64,UklGRiINAABXRUJQVlA4IBYNAADQPQCdASrgAJsAPp1In0qlpCKhp5LrELATiWNu3V6fh4cyVJeO9nH4iBbjPnhnKTsj9LoopyHZd7X5mwMFlirRRr3lU1Dul4Y1vYAaNNKXa78dl/ZI7luW847p8fO9t6E/Vu4n2aD69DFKFRNxuMqfBmgwDh09sZsfUoN9gePD1tRv4aN1hQMj6f0x0q8cthjUaBcUjZI/+E4SbLjHU+bHuNvOMKNHoLcGCyJa5RK1PbMdiJRE4z3B1ufWSeowxx/GU2IYDWAfLZcC4InOCwicZl+caa9OG2wuMxakD/telA2gkETj/7LYSgDF6NXlNlGr5yynhF0ntQuW46vcWMEH3fnuWwHIukimUymGzM6p87V71JfC3tGc0uu7YVyc9mNCztspqIhSv0efXCHJik+YWdwCZ7sRGk7JrAOe0IZ+ZEgz58x1z/A+7wmght6EYVfevNiDB/8TkEgjYH3g14wLGVgwweD7Vkq9MbIlkPtHTOSqsfPiBFMVyF79UXHsdpXDhtbREbihZCEp//UedFbx5du6/2amnIt8HuowwQcELi5U/+Ly6gXyAfW/9cCSOeLOODSvUx2cz7W2cJ8lZXKsWiOTkFN8NeOvFvkS2PccMJGnr/3bN7rhIkpEPLsc/vO5z0ZebHilo1Y4q9uMTwndih+Mgff7MAD++gKCfGdXRKrkxkAf7pWaqrONabsU1ODiaWvAcasv0nvEH5pNemqzYm+oYitJ0/1GskFE46NMQDWWLDI/K/EKchzVxBCieu2olHqAzn+FvSXvWkGXPxiwMAafndtHifzvvXZDgCOnQetYWPaHJfRkRrXaaf/7YPkVxTkUWXyxHLzhljks6xi/wNXyne96AIfOm7pwVt0AmdrlMsinYrJ7BdzsFgP1TIPD5tNQbiK/qFjxrXuPe+UY+booCJ0xfYX5kSk9QEuhBGd3+IMPZJ6JGm+EzDqm1dBw1K8vVg2MzNy3Zq7yp8zbYsupUJf7/0GvDilUue1ZUhkD0KFSyw6WlleCp2cFvOgqho8s6Cjgm1wNTOXtU07VXxYtPyvT7JnW9jtyHaVBk/Qsymn+JXzS7qljcc5PEFClNB9M7gYsyrz2+ZKZB/FFbpET6MMwu+Ny+/3bdBMP+Va8ZwuToM6254tVnzPz/iNJldgxVbvrWLxhTlByeQaWpOYXW9+KgoQsz8eCh/pIXRPGhhaFIAMZMA62I/PZOVGypi27QtpHT+R1ZZuXhJUOWvdmOOOnZvC76UCmo7J/W7IIzz3U5vNJdKOrxbvot91tazC0P2mMK4N/1QlnzOrwMLjFnwU4OPSXGh3/aOWm/KOjKE2jNXqvOROUBtDgbP3SwMURhKuCBhru2btbVOLFEhASDLTWVZfA0hetjr+QpmDYPmr1IXml2eHjN+U8QFGrmn2u+JPNg15tDZyVCEwHGSVPzzzUus3Pv+dCtrMoXZUfUBvYoIPWKAz3CDJ4z+TfDVvrIorZT14N1b1OXAG5BE+kmcH38NU6z2nRXlZ0/7pxyHq5xlRWmP2m9aPopk1rFK+qUmOX1h6+Xn6SWO8gmrZ5qikogp8/djJrEZjkWXvDDbCS5R8kl5kYIOcoICH3KVdkLZdASiAkQ9Uq77T/2mPSsDupYE+IVEsDab2NXOyJVoLbCD9kBFfnjtYG438ci9hXcE2zVsU+BHOu6afC1Ky3ZIYPp+W3UFh8E5n8ZLoPE/UdjioKtM/9giyS7tMdIP8nq4jmLPdU9moxsBukdH4f19F22oBJRb58LQ4V7d7kgf3+aTNS+La6yPqQaAi0XP6x6ezJSWagCn1fH8wbnaTbXshllvkNlfOzCZHTaTeYP2EY5KxLZ9uStYVSZhno2Ne95KBm6ZzEUZ99PtX5lD95ClVoKvDlfhjt65DG+QFB/lu7cXf8HGS8Eoar2F8pw+ftfnNlwnaF6re8uKKRalT1BsCY72/Lp48Iv3ZvcVLkWBy9xz7RN7FRGNuV1cLbA376rfd+kyO4kL8JsyLwqKbkyT2n6PLIEUGKFGOHZI2FM5soaBIcwZ+13EjqCBI11h3LA+Q87mH1FSq39hFkLb2HahquIgFqTLlgiR4SV+Kom+coTo89IOUU+V6A6tFpHFEy9wEqpD36LjuTdE4/fCY2kHpq2FEgv2xVbbUWKY5YBDie7oC/yFkWREjszi0gd4Lg8wvkfRmgAJf37sTAczcgakwlrgSQ/8SI5IjVxifwcMm9pCsjgQLj96+pF6pqEcfcgnPM2lwNPW9XrPBAQiZ8ctr51visSlCydJ+ZyY61E7jQt8ofvq64URqYoxcyLYInI/pd6Ss4ApVyMAHIWcbojM7Syj4FRf0Zht/c24ubJto9Jw0PfBDCnVF4gKG1cFdXRL76xVcZiRSIYIEclRffHrFLlqQ7IyHojG0LU84dkI3VtyUzmcsWNDN/s27LjPwUXR3gVkuilgKiJlGRagGA/yUwJ15EBwBBMnmBJ9TawKe/eIe3fT6cP3rqEIpFsc8dtFiYjtWEOwACB30qeHpC4skMe+G8+J68ppjItdj9rwZew7xJBx6n5yk3q458BXj3e3GASMTApEq1zT7+zC8pV9lWn1emqRq5gkOW+yTJRtrnChTLsA55MPWpgiaybt08pthmFAgsbDIdn5v+pyKD2g7QSDwDm+UF1wqxWEHFQLlSNhqw8PdHCaU4nPZhp0aPNWk9MBoEe8MuVDw8I9B+jz6p102tkmf9Af9H0x1D/QYTiQkZHMRy2M4HT5SY3BsObeivOBChFX8+D57upzfR6vms4zMtM1hsGitdSxmGBulnS3mxEfnoqBDHzZ+NYVILATd2msZdKmtyAFE6nzdNBJ9lVHM4aEMx4RANRfs9U7SW5g+LbweakqxEUp2+qlzQvXmovkdcQlmI7rwVpzyaYn00rfMj56PhDBLsWQp2LkOHNiUV3rq+nvR8xCN7OY9r86li6rpK4ks+Mz7ZDWXlmIazMMcyvxslK3kVZcpRqzAbHuHXSW5UIzzQ7BkenDXCzDrhBVCAgQ3qMUPfWF43fuSTTN9eE3EaH2WJEJq8p427z/eZa5IbAPM0ORMV8cZ16nXBavCY13Le/oJW4SxWzbERNH7NNhYELuMuDWotltpi2nc1IgoFMkwWLdWVOdYi1/JmIRRpmKbCxC0THk992jGo6/8aM5kLrHFseunvatqhEIuGv8xsRKVA1BEGG2OY1MedCTOCV/pL+RL6JwJ10qYaqitojt8fHgT6II73fYfJuhifs4t8VxFmxthxM690KAHREMHHLC4FjCL96IDGVe0qPvM1k60xcT8mBUFI+sI3gCQEd7r32aq6FKcm7ThenDXnfKXJ8SSmFZfepbsG5JB2wdVwhiPiyLJKbPjHhXoA3Wr6e6TbmiSL9AlzNYTPbWbAViBBGf4lNlbtRgs7Y5t4ramfGD1kMLvT5VcglloSlyxZPQwwd1v2UZSVZlktFxN1W8K0K8CvFDxXR2H8qetJRM7bPjhBTZrZWKXoIVyKO7jmNzxusVzpak3uDZCgUB3Zs6zomKiXOm8Yo21NJXR/s1U8WWdLVOuWVjX8lM1SGCJZ6jL2FVV85ZWotaCse0sDNH6pX2BToGqjM3Qfq/Rif66P8Kp+EiA9YpzCMC0ZsZmTjgbMQLcisM6AOqk+1uaPPEndrKMtKP1z1Zz+RGEDih7U5z1P89EJqvobjUIerCmitgHg7jeVF2yazZ1z9MivlJLyFBneqFrK87wFX+w+nwU3kSqIegDh8Cf2wAzffYAzwUh2DKSBcESEfyng/wQ91b1D2zQrUDFQPvp2bHPQH0Bv5Rg7C+hvrjHsrpNORUjMbHO1RpAQS1QgNVKHTZAwZQKWbjrGh9mKu4ri8hMtOXlXn0TI4kewDBzTKPLisQtmdq+2BdlkIJrixvipVvYuuwUA0oamDcVyjrdHwJNclTfY/7WmU/r41OLwB1OVkzFsvzV8qs4BRq1Tk2HzhpO8WblH5OK6yFNgkQgBnPr40K+ZNKyOm2HSwPFRX8oj6By5fGU+U1Ch1es29/LPLD2zxDImJkfatnLILNJwFHMe3+yr8uv84hrymuFcdkYHNvLeV53km11pfDfNQSiyHkmpbgt6bLHApOUlV6qiR0Mfj2TAAhK5nNI5mMWxyJ0ohRpJuzkUMtC9eaKAhcwhX0JpyLmE9TDxm/g/WY1O/h17wrETLvntWRLIkK48S3wDNNNLGp8KVLyqwjRrZ3eeZDdQuxJqMcaYNHuYJMMWKCCWuBM7Q3oVP+8Ekk2EAeY4Et4jKyfUz3jfMEnOcQAZKacFMbdvbFsh6GA+a4Mx4KZZt4bvPEAFCoRi5khAH5vJdRfCVKj+mNT6ZihjJoZOOz54GKX19D4ydRq68UngDhdUzEWDbHXruuWycnOuHm/yLJVy4sBumMajum0lKApeQ5rBSuDnRAzta+WmIvze+0yVpWW5qcCCtAFq4F6NZoAAAA==" alt="mdo" width="32" height="32" className="rounded-circle mx-2 "/>
                            Muhammad Umair Akram</Link >
                        <ul className="dropdown-menu text-small">
                            <li><Link className="dropdown-item" to="/">Profile</Link ></li>
                            <li><h className="dropdown-divider"/></li>
                            <li><Link className="dropdown-item" to="/">Sign out</Link ></li>
                        </ul>
                 </div>

          </div>
          </div>
        {/* </Container> */}
      </Navbar>
      </div>
    // </BrowserRouter>
  );
};

export default Header;

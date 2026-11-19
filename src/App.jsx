import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import FeaturePage from './Pages/FeaturePage'
import FaqPage from './Pages/FaqPage'
import ProductPage from './Pages/ProductPage'
import ShopPage from './Pages/ShopPage'
import TestimonialPage from './Pages/TestimonialPage'
import ErrorPage from './Pages/ErrorPage'
import ContactUsPage from './Pages/ContactUsPage'
import PrivacyPolicyPage from './Pages/PolicyPages/PrivacyPolicyPage'
import RefundPolicyPage from './Pages/PolicyPages/RefundPolicyPage'
import TermsAndConditionsPage from './Pages/PolicyPages/TermsnAndConditionsPage'
import SignUpPage from './Pages/User/SignUpPage'

import LoginPage from './Pages/User/LoginPage'
import ProfilePage from './Pages/User/ProfilePage'
import CartPage from './Pages/User/CartPage'
import CheckoutPage from './Pages/User/Checkout'
import OrderConfirmationPage from './Pages/User/OrderConfirmationPage'

import AdminHomePage from './Pages/Admin/AdminHomePage'

import AdminMaincategoryPage from './Pages/Admin/Maincategory/AdminMaincategoryPage'
import AdminCreateMaincategoryPage from './Pages/Admin/Maincategory/AdminCreateMaincategory'
import AdminUpdateMaincategoryPage from './Pages/Admin/Maincategory/AdminUpdateMaincategory'

import AdminSubcategoryPage from './Pages/Admin/Subcategory/AdminSubcategoryPage'
import AdminCreateSubcategoryPage from './Pages/Admin/Subcategory/AdminCreateSubcategory'
import AdminUpdateSubcategoryPage from './Pages/Admin/Subcategory/AdminUpdateSubcategory'

import AdminBrandPage from './Pages/Admin/Brand/AdminBrandPage'
import AdminCreateBrandPage from './Pages/Admin/Brand/AdminCreateBrand'
import AdminUpdateBrandPage from './Pages/Admin/Brand/AdminUpdateBrand'

import AdminFeaturePage from './Pages/Admin/Feature/AdminFeaturePage'
import AdminCreateFeaturePage from './Pages/Admin/Feature/AdminCreateFeature'
import AdminUpdateFeaturePage from './Pages/Admin/Feature/AdminUpdateFeature'

import AdminFaqPage from './Pages/Admin/Faq/AdminFaqPage'
import AdminCreateFaqPage from './Pages/Admin/Faq/AdminCreateFaq'
import AdminUpdateFaqPage from './Pages/Admin/Faq/AdminUpdateFaq'

import AdminSettingPage from './Pages/Admin/Setting/AdminSettingPage'

import AdminProductPage from './Pages/Admin/Product/AdminProductPage'
import AdminCreateProductPage from './Pages/Admin/Product/AdminCreateProduct'
import AdminUpdateProductPage from './Pages/Admin/Product/AdminUpdateProduct'

import AdminNewsletterPage from './Pages/Admin/Newsletter/AdminNewsletterPage'

import AdminContactUsPage from './Pages/Admin/ContactUs/AdminContactUsPage'
import AdminContactUsShowPage from './Pages/Admin/ContactUs/AdminContactUsShowPage'

import AdminCheckoutPage from './Pages/Admin/Checkout/AdminCheckoutPage'
import AdminCheckoutShowPage from './Pages/Admin/Checkout/AdminCheckoutShowPage'


import AdminUserPage from './Pages/Admin/User/AdminUserPage'
import AdminCreateUserPage from './Pages/Admin/User/AdminCreateUser'
import AdminUpdateUserPage from './Pages/Admin/User/AdminUpdateUser'
function BuyerRoute({ children }) {
  return localStorage.getItem("login") ? children : <Navigate to="/login" replace />
}

function AdminRoute({ children }) {
  return localStorage.getItem("login") && localStorage.getItem("role") !== "Buyer"
    ? children
    : <Navigate to="/login" replace />
}

function SuperAdminRoute({ children }) {
  return localStorage.getItem("login") && localStorage.getItem("role") === "Super Admin"
    ? children
    : <Navigate to="/admin" replace />
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/feature' element={<FeaturePage />} />
        <Route path='/faq' element={<FaqPage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/testimonial' element={<TestimonialPage />} />
        <Route path='/contact' element={<ContactUsPage />} />

        <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
        <Route path='/tc' element={<TermsAndConditionsPage />} />
        <Route path='/refund-policy' element={<RefundPolicyPage />} />

        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />

        {/* Buyer Routes */}
        <Route path='/profile' element={<BuyerRoute><ProfilePage /></BuyerRoute>} />
        <Route path='/cart' element={<BuyerRoute><CartPage /></BuyerRoute>} />
        <Route path='/checkout' element={<BuyerRoute><CheckoutPage /></BuyerRoute>} />
        <Route path='/order-confirmation' element={<BuyerRoute><OrderConfirmationPage /></BuyerRoute>} />

        {/* Admin Routes */}
        <Route path='/admin' element={<AdminRoute><AdminHomePage /></AdminRoute>} />

        <Route path='/admin/maincategory' element={<AdminRoute><AdminMaincategoryPage /></AdminRoute>} />
        <Route path='/admin/maincategory/create' element={<AdminRoute><AdminCreateMaincategoryPage /></AdminRoute>} />
        <Route path='/admin/maincategory/update/:id' element={<AdminRoute><AdminUpdateMaincategoryPage /></AdminRoute>} />

        <Route path='/admin/subcategory' element={<AdminRoute><AdminSubcategoryPage /></AdminRoute>} />
        <Route path='/admin/subcategory/create' element={<AdminRoute><AdminCreateSubcategoryPage /></AdminRoute>} />
        <Route path='/admin/subcategory/update/:id' element={<AdminRoute><AdminUpdateSubcategoryPage /></AdminRoute>} />

        <Route path='/admin/brand' element={<AdminRoute><AdminBrandPage /></AdminRoute>} />
        <Route path='/admin/brand/create' element={<AdminRoute><AdminCreateBrandPage /></AdminRoute>} />
        <Route path='/admin/brand/update/:id' element={<AdminRoute><AdminUpdateBrandPage /></AdminRoute>} />

        <Route path='/admin/feature' element={<AdminRoute><AdminFeaturePage /></AdminRoute>} />
        <Route path='/admin/feature/create' element={<AdminRoute><AdminCreateFeaturePage /></AdminRoute>} />
        <Route path='/admin/feature/update/:id' element={<AdminRoute><AdminUpdateFeaturePage /></AdminRoute>} />

        <Route path='/admin/faq' element={<AdminRoute><AdminFaqPage /></AdminRoute>} />
        <Route path='/admin/faq/create' element={<AdminRoute><AdminCreateFaqPage /></AdminRoute>} />
        <Route path='/admin/faq/update/:id' element={<AdminRoute><AdminUpdateFaqPage /></AdminRoute>} />

        <Route path='/admin/setting' element={<AdminRoute><AdminSettingPage /></AdminRoute>} />

        <Route path='/admin/product' element={<AdminRoute><AdminProductPage /></AdminRoute>} />
        <Route path='/admin/product/create' element={<AdminRoute><AdminCreateProductPage /></AdminRoute>} />
        <Route path='/admin/product/update/:id' element={<AdminRoute><AdminUpdateProductPage /></AdminRoute>} />

        <Route path='/admin/newsletter' element={<AdminRoute><AdminNewsletterPage /></AdminRoute>} />

        <Route path='/admin/contactus' element={<AdminRoute><AdminContactUsPage /></AdminRoute>} />
        <Route path='/admin/contactus/show/:id' element={<AdminRoute><AdminContactUsShowPage /></AdminRoute>} />

        <Route path='/admin/checkout' element={<AdminRoute><AdminCheckoutPage /></AdminRoute>} />
        <Route path='/admin/checkout/show/:id' element={<AdminRoute><AdminCheckoutShowPage /></AdminRoute>} />

        <Route path='/admin/user' element={<SuperAdminRoute><AdminUserPage /></SuperAdminRoute>} />
        <Route path='/admin/user/create' element={<SuperAdminRoute><AdminCreateUserPage /></SuperAdminRoute>} />
        <Route path='/admin/user/update/:id' element={<SuperAdminRoute><AdminUpdateUserPage /></SuperAdminRoute>} />

        <Route path='/*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

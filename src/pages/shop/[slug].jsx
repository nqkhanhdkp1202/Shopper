import ProductInfo from "../../components/ProductInfo";

export default function ProductDetail() {
    return (
        <>
            {/* BREADCRUMB */}
            <nav className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Breadcrumb */}
                            <ol className="breadcrumb mb-0 font-size-xs text-gray-400">
                                <li className="breadcrumb-item">
                                    <a className="text-gray-400" href="index.html">Home</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a className="text-gray-400" href="shop.html">Women's Shoes</a>
                                </li>
                                <li className="breadcrumb-item active">
                                    Leather Sneakers
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </nav>
            <ProductInfo />
            <div>
                {/* DESCRIPTION */}
                <section className="pt-11">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* Nav */}
                                <div className="nav nav-tabs nav-overflow justify-content-start justify-content-md-center border-bottom">
                                    <a className="nav-link active" data-toggle="tab" href="#descriptionTab">
                                        Description
                                    </a>
                                    <a className="nav-link" data-toggle="tab" href="#sizeTab">
                                        Size &amp; Fit
                                    </a>
                                    <a className="nav-link" data-toggle="tab" href="#shippingTab">
                                        Shipping &amp; Return
                                    </a>
                                </div>
                                {/* Content */}
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="descriptionTab">
                                        <div className="row justify-content-center py-9">
                                            <div className="col-12 col-lg-10 col-xl-8">
                                                <div className="row">
                                                    <div className="col-12">
                                                        {/* Text */}
                                                        <p className="text-gray-500">
                                                            Won't herb first male seas, beast. Let upon, female upon third fifth every. Man subdue rule
                                                            after years herb after
                                                            form. And image may, morning. Behold in tree day sea that together cattle whose. Fifth gathering
                                                            brought
                                                            bearing. Abundantly creeping whose. Beginning form have void two. A whose.
                                                        </p>
                                                    </div>
                                                    <div className="col-12 col-md-6">
                                                        {/* List */}
                                                        <ul className="list list-unstyled mb-md-0 text-gray-500">
                                                            <li>
                                                                <strong className="text-body">SKU</strong>: #61590437
                                                            </li>
                                                            <li>
                                                                <strong className="text-body">Occasion</strong>: Lifestyle, Sport
                                                            </li>
                                                            <li>
                                                                <strong className="text-body">Country</strong>: Italy
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-12 col-md-6">
                                                        {/* List */}
                                                        <ul className="list list-unstyled mb-0">
                                                            <li>
                                                                <strong>Outer</strong>: Leather 100%, Polyamide 100%
                                                            </li>
                                                            <li>
                                                                <strong>Lining</strong>: Polyester 100%
                                                            </li>
                                                            <li>
                                                                <strong>CounSoletry</strong>: Rubber 100%
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="sizeTab">
                                        <div className="row justify-content-center py-9">
                                            <div className="col-12 col-lg-10 col-xl-8">
                                                <div className="row">
                                                    <div className="col-12 col-md-6">
                                                        {/* Text */}
                                                        <p className="mb-4">
                                                            <strong>Fitting information:</strong>
                                                        </p>
                                                        {/* List */}
                                                        <ul className="mb-md-0 text-gray-500">
                                                            <li>
                                                                Upon seas hath every years have whose
                                                                subdue creeping they're it were.
                                                            </li>
                                                            <li>
                                                                Make great day bearing.
                                                            </li>
                                                            <li>
                                                                For the moveth is days don't said days.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-12 col-md-6">
                                                        {/* Text */}
                                                        <p className="mb-4">
                                                            <strong>Model measurements:</strong>
                                                        </p>
                                                        {/* List */}
                                                        <ul className="list-unstyled text-gray-500">
                                                            <li>Height: 1.80 m</li>
                                                            <li>Bust/Chest: 89 cm</li>
                                                            <li>Hips: 91 cm</li>
                                                            <li>Waist: 65 cm</li>
                                                            <li>Model size: M</li>
                                                        </ul>
                                                        {/* Size */}
                                                        <p className="mb-0">
                                                            <img src="/img/icons/icon-ruler.svg" alt="..." className="img-fluid" />
                                                            <a className="text-reset text-decoration-underline ml-3" data-toggle="modal" href="#modalSizeChart">Size chart</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="shippingTab">
                                        <div className="row justify-content-center py-9">
                                            <div className="col-12 col-lg-10 col-xl-8">
                                                {/* Table */}
                                                <div className="table-responsive">
                                                    <table className="table table-bordered table-sm table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>Shipping Options</th>
                                                                <th>Delivery Time</th>
                                                                <th>Price</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Standard Shipping</td>
                                                                <td>Delivery in 5 - 7 working days</td>
                                                                <td>$8.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Express Shipping</td>
                                                                <td>Delivery in 3 - 5 working days</td>
                                                                <td>$12.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>1 - 2 day Shipping</td>
                                                                <td>Delivery in 1 - 2 working days</td>
                                                                <td>$12.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Free Shipping</td>
                                                                <td>
                                                                    Living won't the He one every subdue meat replenish
                                                                    face was you morning firmament darkness.
                                                                </td>
                                                                <td>$0.00</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                {/* Caption */}
                                                <p className="mb-0 text-gray-500">
                                                    May, life blessed night so creature likeness their, for. <a className="text-body text-decoration-underline" href="#!">Find out more</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* PRODUCTS */}
                <section className="pt-11">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* Heading */}
                                <h4 className="mb-10 text-center">You might also like</h4>
                                {/* Items */}
                                <div className="row">
                                    <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                                        {/* Card */}
                                        <div className="card mb-7">
                                            {/* Badge */}
                                            <div className="badge badge-white card-badge card-badge-left text-uppercase">
                                                New
                                            </div>
                                            {/* Image */}
                                            <div className="card-img">
                                                {/* Image */}
                                                <a className="card-img-hover" href="product.html">
                                                    <img className="card-img-top card-img-back" src="/img/products/product-120.jpg" alt="..." />
                                                    <img className="card-img-top card-img-front" src="/img/products/product-5.jpg" alt="..." />
                                                </a>
                                                {/* Actions */}
                                                <div className="card-actions">
                                                    <span className="card-action">
                                                        <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="modal" data-target="#modalProduct">
                                                            <i className="fe fe-eye" />
                                                        </button>
                                                    </span>
                                                    <span className="card-action">
                                                        <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                                            <i className="fe fe-shopping-cart" />
                                                        </button>
                                                    </span>
                                                    <span className="card-action">
                                                        <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                                            <i className="fe fe-heart" />
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Body */}
                                            <div className="card-body px-0">
                                                {/* Category */}
                                                <div className="font-size-xs">
                                                    <a className="text-muted" href="shop.html">Shoes</a>
                                                </div>
                                                {/* Title */}
                                                <div className="font-weight-bold">
                                                    <a className="text-body" href="product.html">
                                                        Leather mid-heel Sandals
                                                    </a>
                                                </div>
                                                {/* Price */}
                                                <div className="font-weight-bold text-muted">
                                                    $129.00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                                        {/* Card */}
                                        <div className="card mb-7">
                                            {/* Image */}
                                            <div className="card-img">
                                                {/* Image */}
                                                <a className="card-img-hover" href="product.html">
                                                    <img className="card-img-top card-img-back" src="/img/products/product-121.jpg" alt="..." />
                                                    <img className="card-img-top card-img-front" src="/img/products/product-6.jpg" alt="..." />
                                                </a>
                                                {/* Actions */}
                                                <div className="card-actions">
                                                    <span className="card-action">
                                                        <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="modal" data-target="#modalProduct">
                                                            <i className="fe fe-eye" />
                                                        </button>
                                                    </span>
                                                    <span className="card-action">
                                                        <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                                            <i className="fe fe-shopping-cart" />
                                                        </button>
                                                    </span>
                                                    <span className="card-action">
                                                        <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                                            <i className="fe fe-heart" />
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Body */}
                                            <div className="card-body px-0">
                                                {/* Category */}
                                                <div className="font-size-xs">
                                                    <a className="text-muted" href="shop.html">Dresses</a>
                                                </div>
                                                {/* Title */}
                                                <div className="font-weight-bold">
                                                    <a className="text-body" href="product.html">
                                                        Cotton floral print Dress
                                                    </a>
                                                </div>
                                                {/* Price */}
                                                <div className="font-weight-bold text-muted">
                                                    $40.00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                                        {/* Card */}
                                        <div className="card mb-7">
                                            {/* Badge */}
                                            <div className="badge badge-dark card-badge card-badge-left text-uppercase">
                                                Sale
                                            </div>
                                            {/* Image */}
                                            <div className="card-img">
                                                {/* Image */}
                                                <a className="card-img-hover" href="product.html">
                                                    <img className="card-img-top card-img-back" src="/img/products/product-122.jpg" alt="..." />
                                                    <img className="card-img-top card-img-front" src="/img/products/product-7.jpg" alt="..." />
                                                </a>
                                                {/* Actions */}
                                                <div className="card-actions">
                                                    <span className="card-action">
                                                        <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="modal" data-target="#modalProduct">
                                                            <i className="fe fe-eye" />
                                                        </button>
                                                    </span>
                                                    <span className="card-action">
                                                        <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                                            <i className="fe fe-shopping-cart" />
                                                        </button>
                                                    </span>
                                                    <span className="card-action">
                                                        <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                                            <i className="fe fe-heart" />
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Body */}
                                            <div className="card-body px-0">
                                                {/* Category */}
                                                <div className="font-size-xs">
                                                    <a className="text-muted" href="shop.html">Shoes</a>
                                                </div>
                                                {/* Title */}
                                                <div className="font-weight-bold">
                                                    <a className="text-body" href="product.html">
                                                        Leather Sneakers
                                                    </a>
                                                </div>
                                                {/* Price */}
                                                <div className="font-weight-bold">
                                                    <span className="font-size-xs text-gray-350 text-decoration-line-through">$85.00</span>
                                                    <span className="text-primary">$85.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-6 col-md-4 col-lg-3 d-md-none d-lg-block">
                                        {/* Card */}
                                        <div className="card mb-7">
                                            {/* Image */}
                                            <div className="card-img">
                                                {/* Image */}
                                                <a href="#!">
                                                    <img className="card-img-top card-img-front" src="/img/products/product-8.jpg" alt="..." />
                                                </a>
                                                {/* Actions */}
                                                <div className="card-actions">
                                                    <span className="card-action">
                                                        <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="modal" data-target="#modalProduct">
                                                            <i className="fe fe-eye" />
                                                        </button>
                                                    </span>
                                                    <span className="card-action">
                                                        <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                                            <i className="fe fe-shopping-cart" />
                                                        </button>
                                                    </span>
                                                    <span className="card-action">
                                                        <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                                            <i className="fe fe-heart" />
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Body */}
                                            <div className="card-body px-0">
                                                {/* Category */}
                                                <div className="font-size-xs">
                                                    <a className="text-muted" href="shop.html">Tops</a>
                                                </div>
                                                {/* Title */}
                                                <div className="font-weight-bold">
                                                    <a className="text-body" href="product.html">
                                                        Cropped cotton Top
                                                    </a>
                                                </div>
                                                {/* Price */}
                                                <div className="font-weight-bold text-muted">
                                                    $29.00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* REVIEWS */}
                <section className="pt-9 pb-11" id="reviews">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* Heading */}
                                <h4 className="mb-10 text-center">Customer Reviews</h4>
                                {/* Header */}
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-auto">
                                        {/* Dropdown */}
                                        <div className="dropdown mb-4 mb-md-0">
                                            {/* Toggle */}
                                            <a className="dropdown-toggle text-reset" data-toggle="dropdown" href="#">
                                                <strong>Sort by: Newest</strong>
                                            </a>
                                            {/* Menu */}
                                            <div className="dropdown-menu mt-3">
                                                <a className="dropdown-item" href="#!">Newest</a>
                                                <a className="dropdown-item" href="#!">Oldest</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md text-md-center">
                                        {/* Rating */}
                                        <div className="rating text-dark h6 mb-4 mb-md-0" data-value={4}>
                                            <div className="rating-item">
                                                <i className="fas fa-star" />
                                            </div>
                                            <div className="rating-item">
                                                <i className="fas fa-star" />
                                            </div>
                                            <div className="rating-item">
                                                <i className="fas fa-star" />
                                            </div>
                                            <div className="rating-item">
                                                <i className="fas fa-star" />
                                            </div>
                                            <div className="rating-item">
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        {/* Count */}
                                        <strong className="font-size-sm ml-2">Reviews (3)</strong>
                                    </div>
                                    <div className="col-12 col-md-auto">
                                        {/* Button */}
                                        <a className="btn btn-sm btn-dark" data-toggle="collapse" href="#reviewForm">
                                            Write Review
                                        </a>
                                    </div>
                                </div>
                                {/* New Review */}
                                <div className="collapse" id="reviewForm">
                                    {/* Divider */}
                                    <hr className="my-8" />
                                    {/* Form */}
                                    <form>
                                        <div className="row">
                                            <div className="col-12 mb-6 text-center">
                                                {/* Text */}
                                                <p className="mb-1 font-size-xs">
                                                    Score:
                                                </p>
                                                {/* Rating form */}
                                                <div className="rating-form">
                                                    {/* Input */}
                                                    <input className="rating-input" type="range" min={1} max={5} defaultValue={5} />
                                                    {/* Rating */}
                                                    <div className="rating h5 text-dark" data-value={5}>
                                                        <div className="rating-item">
                                                            <i className="fas fa-star" />
                                                        </div>
                                                        <div className="rating-item">
                                                            <i className="fas fa-star" />
                                                        </div>
                                                        <div className="rating-item">
                                                            <i className="fas fa-star" />
                                                        </div>
                                                        <div className="rating-item">
                                                            <i className="fas fa-star" />
                                                        </div>
                                                        <div className="rating-item">
                                                            <i className="fas fa-star" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                {/* Name */}
                                                <div className="form-group">
                                                    <label className="sr-only" htmlFor="reviewName">Your Name:</label>
                                                    <input className="form-control form-control-sm" id="reviewName" type="text" placeholder="Your Name *" required />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                {/* Email */}
                                                <div className="form-group">
                                                    <label className="sr-only" htmlFor="reviewEmail">Your Email:</label>
                                                    <input className="form-control form-control-sm" id="reviewEmail" type="email" placeholder="Your Email *" required />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                {/* Name */}
                                                <div className="form-group">
                                                    <label className="sr-only" htmlFor="reviewTitle">Review Title:</label>
                                                    <input className="form-control form-control-sm" id="reviewTitle" type="text" placeholder="Review Title *" required />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                {/* Name */}
                                                <div className="form-group">
                                                    <label className="sr-only" htmlFor="reviewText">Review:</label>
                                                    <textarea className="form-control form-control-sm" id="reviewText" rows={5} placeholder="Review *" required defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="col-12 text-center">
                                                {/* Button */}
                                                <button className="btn btn-outline-dark" type="submit">
                                                    Post Review
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/* Reviews */}
                                <div className="mt-8">
                                    {/* Review */}
                                    <div className="review">
                                        <div className="review-body">
                                            <div className="row">
                                                <div className="col-12 col-md-auto">
                                                    {/* Avatar */}
                                                    <div className="avatar avatar-xxl mb-6 mb-md-0">
                                                        <span className="avatar-title rounded-circle">
                                                            <i className="fa fa-user" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md">
                                                    {/* Header */}
                                                    <div className="row mb-6">
                                                        <div className="col-12">
                                                            {/* Rating */}
                                                            <div className="rating font-size-sm text-dark" data-value={5}>
                                                                <div className="rating-item">
                                                                    <i className="fas fa-star" />
                                                                </div>
                                                                <div className="rating-item">
                                                                    <i className="fas fa-star" />
                                                                </div>
                                                                <div className="rating-item">
                                                                    <i className="fas fa-star" />
                                                                </div>
                                                                <div className="rating-item">
                                                                    <i className="fas fa-star" />
                                                                </div>
                                                                <div className="rating-item">
                                                                    <i className="fas fa-star" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            {/* Time */}
                                                            <span className="font-size-xs text-muted">
                                                                Logan Edwards, <time dateTime="2019-07-25">25 Jul 2019</time>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {/* Title */}
                                                    <p className="mb-2 font-size-lg font-weight-bold">
                                                        So cute!
                                                    </p>
                                                    {/* Text */}
                                                    <p className="text-gray-500">
                                                        Justo ut diam erat hendrerit. Morbi porttitor, per eu. Sodales curabitur diam sociis. Taciti
                                                        lobortis nascetur. Ante laoreet odio hendrerit.
                                                        Dictumst curabitur nascetur lectus potenti dis sollicitudin habitant quis vestibulum.
                                                    </p>
                                                    {/* Footer */}
                                                    <div className="row align-items-center">
                                                        <div className="col-auto d-none d-lg-block">
                                                            {/* Text */}
                                                            <p className="mb-0 font-size-sm">Was this review helpful?</p>
                                                        </div>
                                                        <div className="col-auto mr-auto">
                                                            {/* Rate */}
                                                            <div className="rate">
                                                                <a className="rate-item" data-toggle="vote" data-count={3} href="#" role="button">
                                                                    <i className="fe fe-thumbs-up" />
                                                                </a>
                                                                <a className="rate-item" data-toggle="vote" data-count={0} href="#" role="button">
                                                                    <i className="fe fe-thumbs-down" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="col-auto d-none d-lg-block">
                                                            {/* Text */}
                                                            <p className="mb-0 font-size-sm">Comments (0)</p>
                                                        </div>
                                                        <div className="col-auto">
                                                            {/* Button */}
                                                            <a className="btn btn-xs btn-outline-border" href="#!">
                                                                Comment
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Review */}
                                    <div className="review">
                                        {/* Body */}
                                        <div className="review-body">
                                            <div className="row">
                                                <div className="col-12 col-md-auto">
                                                    {/* Avatar */}
                                                    <div className="avatar avatar-xxl mb-6 mb-md-0">
                                                        <span className="avatar-title rounded-circle">
                                                            <i className="fa fa-user" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md">
                                                    {/* Header */}
                                                    <div className="row mb-6">
                                                        <div className="col-12">
                                                            {/* Rating */}
                                                            <div className="rating font-size-sm text-dark" data-value={3}>
                                                                <div className="rating-item">
                                                                    <i className="fas fa-star" />
                                                                </div>
                                                                <div className="rating-item">
                                                                    <i className="fas fa-star" />
                                                                </div>
                                                                <div className="rating-item">
                                                                    <i className="fas fa-star" />
                                                                </div>
                                                                <div className="rating-item">
                                                                    <i className="fas fa-star" />
                                                                </div>
                                                                <div className="rating-item">
                                                                    <i className="fas fa-star" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            {/* Time */}
                                                            <span className="font-size-xs text-muted">
                                                                Sophie Casey, <time dateTime="2019-07-07">07 Jul 2019</time>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {/* Title */}
                                                    <p className="mb-2 font-size-lg font-weight-bold">
                                                        Cute, but too small
                                                    </p>
                                                    {/* Text */}
                                                    <p className="text-gray-500">
                                                        Shall good midst can't. Have fill own his multiply the divided. Thing great. Of heaven whose
                                                        signs.
                                                    </p>
                                                    {/* Footer */}
                                                    <div className="row align-items-center">
                                                        <div className="col-auto d-none d-lg-block">
                                                            {/* Text */}
                                                            <p className="mb-0 font-size-sm">Was this review helpful?</p>
                                                        </div>
                                                        <div className="col-auto mr-auto">
                                                            {/* Rate */}
                                                            <div className="rate">
                                                                <a className="rate-item" data-toggle="vote" data-count={2} href="#" role="button">
                                                                    <i className="fe fe-thumbs-up" />
                                                                </a>
                                                                <a className="rate-item" data-toggle="vote" data-count={1} href="#" role="button">
                                                                    <i className="fe fe-thumbs-down" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="col-auto d-none d-lg-block">
                                                            {/* Text */}
                                                            <p className="mb-0 font-size-sm">Comments (1)</p>
                                                        </div>
                                                        <div className="col-auto">
                                                            {/* Button */}
                                                            <a className="btn btn-xs btn-outline-border" href="#!">
                                                                Comment
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Child review */}
                                        <div className="review review-child">
                                            <div className="review-body">
                                                {/* Content */}
                                                <div className="row">
                                                    <div className="col-12 col-md-auto">
                                                        {/* Avatar */}
                                                        <div className="avatar avatar-xxl mb-6 mb-md-0">
                                                            <span className="avatar-title rounded-circle">
                                                                <i className="fa fa-user" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md">
                                                        {/* Header */}
                                                        <div className="row mb-6">
                                                            <div className="col-12">
                                                                {/* Rating */}
                                                                <div className="rating font-size-sm text-dark" data-value={4}>
                                                                    <div className="rating-item">
                                                                        <i className="fas fa-star" />
                                                                    </div>
                                                                    <div className="rating-item">
                                                                        <i className="fas fa-star" />
                                                                    </div>
                                                                    <div className="rating-item">
                                                                        <i className="fas fa-star" />
                                                                    </div>
                                                                    <div className="rating-item">
                                                                        <i className="fas fa-star" />
                                                                    </div>
                                                                    <div className="rating-item">
                                                                        <i className="fas fa-star" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                {/* Time */}
                                                                <span className="font-size-xs text-muted">
                                                                    William Stokes, <time dateTime="2019-07-14">14 Jul 2019</time>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Title */}
                                                        <p className="mb-2 font-size-lg font-weight-bold">
                                                            Very good
                                                        </p>
                                                        {/* Text */}
                                                        <p className="text-gray-500">
                                                            Made face lights yielding forth created for image behold blessed seas.
                                                        </p>
                                                        {/* Footer */}
                                                        <div className="row align-items-center">
                                                            <div className="col-auto d-none d-lg-block">
                                                                {/* Text */}
                                                                <p className="mb-0 font-size-sm">Was this review helpful?</p>
                                                            </div>
                                                            <div className="col-auto mr-auto">
                                                                {/* Rate */}
                                                                <div className="rate">
                                                                    <a className="rate-item" data-toggle="vote" data-count={7} href="#" role="button">
                                                                        <i className="fe fe-thumbs-up" />
                                                                    </a>
                                                                    <a className="rate-item" data-toggle="vote" data-count={0} href="#" role="button">
                                                                        <i className="fe fe-thumbs-down" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="col-auto d-none d-lg-block">
                                                                {/* Text */}
                                                                <p className="mb-0 font-size-sm">Comments (0)</p>
                                                            </div>
                                                            <div className="col-auto">
                                                                {/* Button */}
                                                                <a className="btn btn-xs btn-outline-border" href="#!">
                                                                    Comment
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Pagination */}
                                <nav className="d-flex justify-content-center mt-9">
                                    <ul className="pagination pagination-sm text-gray-400">
                                        <li className="page-item">
                                            <a className="page-link page-link-arrow" href="#">
                                                <i className="fa fa-caret-left" />
                                            </a>
                                        </li>
                                        <li className="page-item active">
                                            <a className="page-link" href="#">1</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">2</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link page-link-arrow" href="#">
                                                <i className="fa fa-caret-right" />
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

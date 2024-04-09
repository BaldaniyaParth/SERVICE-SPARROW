import React from 'react'
import Navbar from '../../Component/User/Navbars'
import Footer from '../../Component/User/Footer'
const Faq = () => {
    return (
        <>
            <Navbar />
            <div
                className="relative w-full bg-white px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
                <div className="mx-auto px-5">
                    <div className="flex flex-col items-center">
                        <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2>
                        <p className="mt-3 text-lg text-neutral-500 md:text-xl">Frequenty asked questions

                        </p>
                    </div>
                    <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span> Can I Trust Maid?</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                            stroke="currentColor" strokeLinecap="round" stroke-linejoin="round"
                                            strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Absolutely! All of our maids are
                                    employees of A la Maid. We do not hire subcontractors and carefully screen and train all of our maids
                                    on a regular basis. We treat your belongings and property with the utmost care and respect
                                </p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span> Can I get a refund for my service?</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                            stroke="currentColor" strokeLinecap="round" stroke-linejoin="round"
                                            strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We offer a 30-day money-back
                                    guarantee for most of its subscription plans. If you are not satisfied with your
                                    subscription within the first 30 days, you can request a full refund. Refunds for
                                    subscriptions that have been active for longer than 30 days may be considered on a
                                    case-by-case basis.
                                </p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span> Will My Maid Speak In English?</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                            stroke="currentColor" strokeLinecap="round" stroke-linejoin="round"
                                            strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">All of our maids are required to read, speak
                                    and write English. It is important that you are able to communicate with your maid so we can offer you
                                    the most comprehensive and customized service available
                                </p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span>Do I Need To Supply My Own Cleaning Supplies And Equipment ?</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                            stroke="currentColor" strokeLinecap="round" stroke-linejoin="round"
                                            strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We ask that you do and have found that we
                                    can offer more sanitary and thorough services by doing so. Many maid services typically do not clean
                                    their equipment between homes. As a result germs and pet dander/fleas, etc. can be transmitted from
                                    one house to another. We will be happy to provide you with a list of equipment and supplies that your
                                    maid will need to leave your home spotless. Of course, our maids do have back up supplies and equipment in case of emergency
                                </p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span> How do I contact support?</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                            stroke="currentColor" strokeLinecap="round" stroke-linejoin="round"
                                            strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">If you need help with our platform or
                                    have any other questions, you can contact the company's support team by submitting a support
                                    request through the website or by emailing support@ourwebsite.com.
                                </p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span> Can I Pay By Credit Card?</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                            stroke="currentColor" strokeLinecap="round" stroke-linejoin="round"
                                            strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Sure! We accept VISA, MASTERCARD, DISCOVER, and AMEX.</p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span>What If I Am Not Satisfied?</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                            stroke="currentColor" strokeLinecap="round" stroke-linejoin="round"
                                            strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="group-open:animate-fadeIn mt-3 text-neutral-600 ">We are so confident that you will love us
                                    that our services are 200% guaranteed. On the rare occasion that you aren’t happy we will promptly
                                    return within 24 hours to re-clean any unsatisfactory areas. If for some reason we cannot satisfy
                                    the matter at hand we will offer you a refund and terminate services.
                                </p>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Faq
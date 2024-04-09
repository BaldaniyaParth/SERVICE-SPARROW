import React from 'react';

function Privacypolicy() {
  return (
    <div className='container mx-auto'>
      <h1 className="text-2xl md:text-3xl my-10 font-sans font-bold dark:text-gray-200">
        Privacy Policy
      </h1>
      <section className="text-gray-600 body-font">
        <div className="py-10 flex flex-wrap items-center">
          <div className="lg:w-1/2 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-left text-gray-900">Terms And Conditions</h1>
            <hr />
            <div>
              <p className="mt-4 text-left"><span className='text-[25px]'>•</span> You will be responsible for maintaining the confidentiality of your user-name, password, and whatever the activities are performing by your account.</p>
              <p className="mt-4 text-left"><span className='text-[25px]'>•</span> In order to use the HomeService, you will need to register yourself at the website. Here you have to fill your personal information.</p>
              <p className="mt-4 text-left"><span className='text-[25px]'>•</span> One can be assured of getting the right person at HomeService, who will be near your area so that it will reduce traveling expense.</p>
              <p className="mt-4 text-left"><span className='text-[25px]'>•</span> HomeService will appoint you only those providers who will serve the best services to you at low cost and on the mentioned time.</p>
              <p className="mt-4 text-left"><span className='text-[25px]'>•</span> Convince charge at HomeService is completely free, you will get services at your doorstep just by a call.</p>
              <p className="mt-4 text-left"><span className='text-[25px]'>•</span> HomeService will not be responsible for any kind of miscommunication and misunderstanding between you and our agent.</p>
              <p className="mt-4 text-left"><span className='text-[25px]'>•</span> We are here to provide you with any kind of repair and replacement of plumbing, electrical appliance and carpentry or any other equipment.</p>
            </div>
          </div>
          <div className="lg:w-1/2 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <img src='./images/privacypolicy.jpg' alt='Privacy Policy' />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Privacypolicy;

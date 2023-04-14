import { toast } from "react-hot-toast";
import { apple, bill, google, dribble, netflix, manulife, polygon2, polygon4, paypal } from "../assets";
import styles, { layout } from "../style";


const Billing = () => (
  <section id="product" className={`${layout.sectionReverse}`}>
    <div className={`${layout.sectionImgReverse}`}>
      <div className={`flex py-6 px-5 bg-black-gradient-2  flex-col rounded-xl box-shadow w-[335px] h-[280px] relative`}>
        <div>
          <h1 className="text-white text-xl font-poppins font-semibold">Last Transaction</h1>
        </div>
        <div className="mt-8">
          <div className='flex items-center'>
            <img src={dribble} alt="dribble" className="h-10 w-10" />
            <div className="flex justify-between w-full font-poppins">
              <div className="flex flex-col ms-3">
                <h1 className="text-white font-semibold ">Dribble Pro</h1>
                <p className="text-dimWhite text-xs">15 Days ago</p>
              </div>
              <div className="flex justify-center items-center">
                <img src={polygon2} alt="" />
                <span className="text-white text-sm">-$250,93</span>
              </div>
            </div>
          </div>
          <div className='flex items-center my-5'>
            <img src={netflix} alt="dribble" className="h-10 w-10" />
            <div className="flex justify-between w-full font-poppins">
              <div className="flex flex-col ms-3">
                <h1 className="text-white font-semibold ">Netflix</h1>
                <p className="text-dimWhite text-xs">4 Days ago</p>
              </div>
              <div className="flex justify-center items-center">
                <img src={polygon2} alt="" />
                <span className="text-white text-sm">-$250,93</span>
              </div>
            </div>
          </div>
          <div className='flex items-center my-5'>
            <img src={manulife} alt="dribble" className="h-10 w-10" />
            <div className="flex justify-between w-full font-poppins">
              <div className="flex flex-col ms-3">
                <h1 className="text-white font-semibold ">Manulife Cash</h1>
                <p className="text-dimWhite text-xs">4 Days ago</p>
              </div>
              <div className="flex justify-center items-center">
                <img src={polygon4} alt="" />
                <span className="text-white text-sm">-$250,93</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`bg-black-gradient-2 sm:flex-col flex-row rounded-xl box-shadow w-[230px] h-[230px] absolute md:-top-1/3 right-0`}>
        <div className='flex items-center m-5'>
          <img src={paypal} alt="dribble" className="h-14 w-14" />
          <div className="flex w-full font-poppins">
            <div className="flex flex-col ms-3">
              <h1 className="text-white font-semibold text-2xl">Paypal</h1>
              <p className="text-dimWhite text-xs">Checkout</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full font-poppins m-5">
          <div className="flex flex-col">
            <p className="text-dimWhite text-xs">Total</p>
            <h1 className="text-white font-semibold text-lg">$210</h1>
          </div>
          <div className="flex justify-center items-center me-10">
            <button className="bg-transparent hover:bg-blue-gradient text-gradient font-semibold hover:text-white py-2 px-4 border border-[#DEF9FA] hover:border-transparent rounded">
              Change
            </button>
          </div>
        </div>
        <div className="mx-5">
          <button onClick={() => toast.success("Great! Your Payment is successfully.")} type='button' className={`py-2 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-xl w-full`}>Make Payment</button>
        </div>
      </div>


      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Billing;